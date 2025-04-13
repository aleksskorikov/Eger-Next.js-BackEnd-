import Product from '../../models/product.js';
import { sequelize } from '../../utils/db.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/");
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
        cb(null, uniqueName);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedFields = ['imgSrc', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10'];
        if (allowedFields.includes(file.fieldname)) {
            cb(null, true);
        } else {
            cb(new Error('Unexpected field'), false);
        }
    }
});
const uploadMiddleware = promisify(upload.any());

export const config = {
    api: {
        bodyParser: false, 
    },
};

function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("❌ Ошибка при удалении файла:", err);
        } else {
            console.log("✅ Файл успешно удален:", filePath);
        }
    });
}

export default async function handler(req, res) {
    console.log(`📡 Получен запрос: ${req.method}`);

    if (req.method === 'POST') {
        try {
            await uploadMiddleware(req, res); 
            console.log("📩 Данные от клиента:", req.body);
            console.log("📷 Загруженные файлы:", req.files);

            const { name, price, description, category, page_name, product_category, ...listData } = req.body;

            if (!name || !price) {
                return res.status(400).json({ message: 'Название и цена обязательны' });
            }

            const images = {};
            req.files.forEach((file) => {
                images[file.fieldname] = `/uploads/${file.filename}`;
            });

            const newProduct = await Product.create({
                name,
                price,
                description,
                imgSrc: images.imgSrc || images.img1 || null,
                category: category || "default",
                page_name: page_name || "default_page",
                product_category: product_category || "default_category",
                ...images,
                ...listData
            });

            console.log("🎉 Продукт успешно добавлен в БД:", newProduct);
            return res.status(201).json(newProduct);

        } catch (error) {
            console.error("🚨 Ошибка сервера:", error);
            return res.status(500).json({ message: 'Ошибка сервера', error: error.message });
        }
    }

    else if (req.method === 'GET') {
        try {
            const { id } = req.query;
            if (id) {
                const product = await Product.findByPk(Number(id));
                return product ? res.status(200).json(product) : res.status(404).json({ message: 'Товар не найден' });
            } else {
                const products = await Product.findAll();
                return res.status(200).json(products);
            }
        } catch (error) {
            return res.status(500).json({ message: 'Ошибка при получении товаров', error: error.message });
        }
    }

    else if (req.method === 'PUT') {
        try {
            console.log('📡 PUT запрос получен');

            await new Promise((resolve, reject) => {
                upload.fields([
                    { name: 'imgSrc', maxCount: 1 },
                    { name: 'img2', maxCount: 1 },
                    { name: 'img3', maxCount: 1 },
                    { name: 'img4', maxCount: 1 },
                    { name: 'img5', maxCount: 1 },
                    { name: 'img6', maxCount: 1 },
                    { name: 'img7', maxCount: 1 },
                    { name: 'img8', maxCount: 1 },
                    { name: 'img9', maxCount: 1 },
                    { name: 'img10', maxCount: 1 },
                ])(req, res, (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });

            console.log('📩 Данные запроса:', req.body);
            console.log('📷 Загруженные файлы:', req.files);

            const { id, name, price, description, category, page_name, product_category, ...listData } = req.body;

            if (!id) {
                console.error("❌ Ошибка: ID товара не передано");
                return res.status(400).json({ message: 'ID товара не передано' });
            }

            const product = await Product.findByPk(id);
            if (!product) {
                console.error(`❌ Ошибка: Товар с ID ${id} не найден`);
                return res.status(404).json({ message: 'Товар не найден' });
            }

            const currentProductData = product.toJSON();

            const newProductData = {
                name,
                price,
                description,
                category,
                page_name,
                product_category,
                ...listData,
            };

            const images = {};
            for (let i = 0; i <= 9; i++) {
                const key = i === 0 ? 'imgSrc' : `img${i + 1}`;
                if (req.files[key]) {
                    if (currentProductData[key]) {
                        const oldImagePath = path.join(process.cwd(), 'public', currentProductData[key]);
                        if (fs.existsSync(oldImagePath)) {
                            deleteFile(oldImagePath);
                        }
                    }

                    images[key] = `/uploads/${req.files[key][0].filename}`;
                }
            }

            Object.assign(newProductData, images);
            
            const changes = {};
            for (const key in newProductData) {
                if (newProductData[key] !== currentProductData[key]) {
                    changes[key] = newProductData[key];
                }
            }

            if (Object.keys(changes).length > 0) {
                await product.update(changes);
                console.log('🔄 Обновлены поля:', changes);
            } else {
                console.log('✅ Изменений нет, обновление не требуется');
            }

            return res.status(200).json({ message: 'Товар успешно обновлен', product });

        } catch (error) {
            console.error("🚨 Ошибка при обновлении товара:", error);
            return res.status(500).json({ message: 'Ошибка при обновлении товара', error: error.message });
        }
    }

    if (req.method === 'DELETE') {
        try {
            const { id, field, imagePath } = req.query;
            console.log('Запрос на удаление: ID:', id, 'Поле:', field, 'Путь к изображению:', imagePath);

            if (!id || !field || !imagePath) {
                return res.status(400).json({ message: 'Некорректные данные, отсутствуют обязательные параметры' });
            }

            const product = await Product.findByPk(id);

            if (!product) {
                console.error(`❌ Товар с ID ${id} не найден`);
                return res.status(404).json({ message: 'Товар не найден' });
            }

            const fullImagePath = path.join(process.cwd(), 'public', imagePath);
            console.log('Полный путь к изображению:', fullImagePath);

            if (fs.existsSync(fullImagePath)) {
                fs.unlinkSync(fullImagePath); 
                console.log(`✅ Изображение успешно удалено: ${fullImagePath}`);
            } else {
                console.error(`❌ Изображение не найдено по пути: ${fullImagePath}`);
                return res.status(404).json({ message: 'Изображение не найдено' });
            }

            product[field] = null;
            await product.save();

            return res.status(200).json({ message: 'Изображение успешно удалено' });

        } catch (error) {
            console.error('🚨 Ошибка при удалении изображения:', error);
            return res.status(500).json({ message: 'Ошибка при удалении изображения', error: error.message });
        }
    }

    return res.status(405).json({ message: 'Метод не разрешен' });
}








