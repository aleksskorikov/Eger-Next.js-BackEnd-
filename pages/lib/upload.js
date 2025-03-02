// import multer from "multer";
// import path from "path";
// import fs from "fs";

// // Путь к папке, где будут сохраняться файлы
// const uploadDir = path.resolve("./public/uploads"); // Используем папку public для Next.js

// // Проверка существования папки
// if (!fs.existsSync(uploadDir)) {
//     console.log("⚠️ Папка uploads не найдена, создаем...");
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Логирование содержимого папки перед загрузкой
// fs.readdir(uploadDir, (err, files) => {
//     if (err) {
//         console.error("❌ Ошибка чтения папки uploads:", err);
//     } else {
//         console.log("📂 Файлы в uploads перед загрузкой:", files);
//     }
// });

// // Настройка хранения файлов с помощью multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         console.log(`📂 Загружаем в папку: ${uploadDir}`);
//         cb(null, uploadDir); // Указываем, куда загружать файл
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//         const ext = path.extname(file.originalname);
//         const filename = `${uniqueSuffix}${ext}`; // Генерируем уникальное имя файла
//         console.log(`✅ Имя файла: ${filename}`);
//         cb(null, filename); // Устанавливаем имя файла
//     }
// });

// // Инициализация multer
// const upload = multer({ storage });

// export { upload };

// // Отключаем встроенный парсер Next.js для обработки файлов
// export const config = {
//     api: {
//         bodyParser: false, // Отключаем парсер
//     },
// };

// import { v4 as uuidv4 } from 'uuid'; // Для генерации уникальных имен файлов
// import fs from 'fs';
// import path from 'path';
// import multer from 'multer';

// const uploadDir = path.resolve('./public/uploads');

// // Проверка и создание папки, если она не существует
// if (!fs.existsSync(uploadDir)) {
//     console.log('⚠️ Папка uploads не найдена, создаем...');
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Логирование содержимого папки перед загрузкой
// fs.readdir(uploadDir, (err, files) => {
//     if (err) {
//         console.error('❌ Ошибка чтения папки uploads:', err);
//     } else {
//         console.log('📂 Файлы в uploads перед загрузкой:', files);
//     }
// });

// // Настройка хранилища с multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         console.log(`📂 Загружаем в папку: ${uploadDir}`);
//         cb(null, uploadDir); // Указываем папку для сохранения
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//         const ext = path.extname(file.originalname);
//         const filename = `${uniqueSuffix}${ext}`;
//         console.log(`✅ Имя файла: ${filename}`);
//         cb(null, filename); // Устанавливаем имя файла
//     },
// });

// // Инициализация multer
// const upload = multer({ storage });

// // Конфигурация API для отключения bodyParser
// export const config = {
//     api: {
//         bodyParser: false, // Отключаем стандартный парсер
//     },
// };

// export { upload };
