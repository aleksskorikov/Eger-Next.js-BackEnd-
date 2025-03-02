// import { Sequelize } from 'sequelize';
// import 'dotenv/config';

// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         dialect: 'postgres',
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         logging: false,
//     }
// );

// // Тест подключения
// sequelize.authenticate()
//     .then(() => console.log('✅ Успешное подключение к БД'))
//     .catch(err => console.error('❌ Ошибка подключения к БД:', err));

// export { sequelize };

import { Sequelize } from 'sequelize';
import 'dotenv/config';
import Product from '../models/product.js';  // Путь к модели

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logging: false,
    }
);

// Подключение к базе данных
sequelize.authenticate()
    .then(() => {
        console.log('✅ Успешное подключение к БД');

        // Синхронизация моделей с базой данных (создание таблиц, если они не существуют)
        sequelize.sync({ force: false })  // Для обновления без удаления данных
            .then(() => console.log('✅ Таблицы синхронизированы'))
            .catch(error => console.error('Ошибка при синхронизации:', error));
    })
    .catch(err => console.error('❌ Ошибка подключения к БД:', err));

export { sequelize };
