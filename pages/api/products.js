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

const upload = multer({ storage });
const uploadMiddleware = promisify(upload.any()); // Оборачиваем в промис

export const config = {
    api: {
        bodyParser: false, // Отключаем bodyParser для работы с FormData
    },
};

export default async function handler(req, res) {
    console.log(`📡 Получен запрос: ${req.method}`);

    if (req.method === 'POST') {
        try {
            await uploadMiddleware(req, res); // Загружаем файлы через promisify
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
        await uploadMiddleware(req, res);  // Загружаем файлы через promisify

        // Теперь используем req.body для текстовых данных и req.files для файлов
        const { id, name, price, description, category, page_name, product_category, ...listData } = req.body;
        console.log('📩 Данные:', { id, name, price, description });

        if (!id) {
            return res.status(400).json({ message: 'ID товара не передано' });
        }

        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Товар не найден' });
        }

        const images = {};
        req.files.forEach((file, index) => {
            images[`img${index + 1}`] = `/uploads/${file.filename}`;  // Изменение имени файла на соответствующее поле
        });

        // Обновляем товар в базе данных
        const updatedProduct = await Product.update(
            {
                name,
                price,
                description,
                category: category || product.category,
                page_name: page_name || product.page_name,
                product_category: product_category || product.product_category,
                ...images,  // Добавляем загруженные изображения
            },
            { where: { id } }
        );

        return res.status(200).json(updatedProduct);  // Возвращаем обновленный товар
    } catch (error) {
        console.error("🚨 Ошибка при обновлении товара:", error);  // Логирование ошибки
        return res.status(500).json({ message: 'Ошибка при обновлении товара', error: error.message });
    }
}

    
    else if (req.method === 'DELETE') {
        try {
            const { id } = req.query;
            if (!id) {
                return res.status(400).json({ message: 'ID товара обязателен' });
            }

            const product = await Product.findOne({ where: { id } });
            if (!product) {
                return res.status(404).json({ message: 'Товар не найден' });
            }

            const imagePaths = Object.values(product.toJSON()).filter(value => 
                typeof value === 'string' && value.startsWith('/uploads/')
            );

            imagePaths.forEach(imgPath => {
                const fullPath = path.join(process.cwd(), 'public', imgPath);
                if (fs.existsSync(fullPath)) {
                    fs.unlinkSync(fullPath);
                }
            });

            const deleted = await Product.destroy({ where: { id } });

            return deleted
                ? res.status(200).json({ message: 'Товар и изображения удалены' })
                : res.status(404).json({ message: 'Товар не найден' });

        } catch (error) {
            return res.status(500).json({ message: 'Ошибка при удалении товара', error: error.message });
        }
    } 
    
    else {
        console.log(`⛔ Метод ${req.method} не разрешен`);
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).json({ message: `Метод ${req.method} не разрешен` });
    }
}








