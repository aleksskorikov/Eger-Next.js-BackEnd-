// const categories = [
//     {
//         title: "вудки",
//         pageName: "fishing_rods",
//         items: [
//             { category: "product-category1", name: "Спінінгові" },
//             { category: "product-category2", name: "Кастингові" },
//             { category: "product-category3", name: "Фідерні" },
//             { category: "product-category4", name: "Морські" },
//             { category: "product-category5", name: "Коропові" },
//             { category: "product-category6", name: "Поплавочні" },
//             { category: "product-category7", name: "Вершинки та камлі" }
//         ]
//     },
//     {
//         title: "котушки",
//         pageName: "coils",
//         items: [
//             { category: "product-category1", name: "Безінерційні" },
//             { category: "product-category2", name: "Мультиплікаторні" },
//             { category: "product-category3", name: "Провідні" },
//             { category: "product-category4", name: "Додаткові шпулі" }
//         ]
//     },
//     {
//         title: "cнасті",
//         pageName: "tackle",
//         items: [
//             { category: "product-category1", name: "Готові монтажі" },
//             { category: "product-category2", name: "Гачки" },
//             { category: "product-category3", name: "Грузила" },
//             { category: "product-category4", name: "Джиг - головки" },
//             { category: "product-category5", name: "Годівниці" },
//             { category: "product-category6", name: "Поплавки" },
//             { category: "product-category7", name: "Карабіни та застібки" }
//         ]
//     },
//     {
//         title: "прикормки",
//         pageName: "lure",
//         items: [
//             { category: "product-category1", name: "Блешні" },
//             { category: "product-category2", name: "Балансири" },
//             { category: "product-category3", name: "Воблери" },
//             { category: "product-category4", name: "Силікон" },
//             { category: "product-category5", name: "Діпи" },
//             { category: "product-category6", name: "прикормки" }
//         ]
//     },
    
// ];

// export default categories;


const categories = [
    {
        title: "вудки",
        subcategories: [
            {
                items: [
                    { category: "product-category1", pageName: "fishing_rods", productCategory: "productsOne", name: "Спінінгові" },
                    { category: "product-category2", pageName: "fishing_rods", productCategory: "productsOne", name: "Кастингові" },
                    { category: "product-category3", pageName: "fishing_rods", productCategory: "productsOne", name: "Фідерні" },
                    { category: "product-category4", pageName: "fishing_rods", productCategory: "productsOne", name: "Морські" },
                    { category: "product-category5", pageName: "fishing_rods", productCategory: "productsOne", name: "Коропові" },
                    { category: "product-category6", pageName: "fishing_rods", productCategory: "productsOne", name: "Поплавочні" },
                    { category: "product-category7", pageName: "fishing_rods", productCategory: "productsOne", name: "Вершинки та камлі" }
                ]
            }
        ]
    },
    {
        title: "котушки",
        subcategories: [
            {
                items: [
                    { category: "product-category1", pageName: "coils", productCategory: "productsOne", name: "Безінерційні" },
                    { category: "product-category2", pageName: "coils", productCategory: "productsOne", name: "Мультиплікаторні" },
                    { category: "product-category3", pageName: "coils", productCategory: "productsOne", name: "Провідні" },
                    { category: "product-category4", pageName: "coils", productCategory: "productsOne", name: "Додаткові шпулі" }
                ]
            }
        ]
    },
    {
        title: "снасті",
        subcategories: [
            {
                items: [
                    { category: "product-category1", pageName: "tackle", productCategory: "productsOne", name: "Готові монтажі" },
                    { category: "product-category2", pageName: "tackle", productCategory: "productsOne", name: "Гачки" },
                    { category: "product-category3", pageName: "tackle", productCategory: "productsOne", name: "Грузила" },
                    { category: "product-category4", pageName: "tackle", productCategory: "productsOne", name: "Джиг - головки" },
                    { category: "product-category5", pageName: "tackle", productCategory: "productsOne", name: "Годівниці" },
                    { category: "product-category6", pageName: "tackle", productCategory: "productsOne", name: "Поплавки" },
                    { category: "product-category7", pageName: "tackle", productCategory: "productsOne", name: "Карабіни та застібки" }
                ]
            }
        ]
    },
    {
        title: "прикормки",
        subcategories: [
            {
                items: [
                    { category: "product-category1", pageName: "lure", productCategory: "productsOne", name: "Блешні" },
                    { category: "product-category2", pageName: "lure", productCategory: "productsOne", name: "Балансири" },
                    { category: "product-category3", pageName: "lure", productCategory: "productsOne", name: "Воблери" },
                    { category: "product-category4", pageName: "lure", productCategory: "productsOne", name: "Силікон" },
                    { category: "product-category5", pageName: "lure", productCategory: "productsOne", name: "Діпи" },
                    { category: "product-category6", pageName: "lure", productCategory: "productsOne", name: "прикормки" }
                ]
            }
        ]
    },
    {
        title: "обладнання",
        subcategories: [
            {
                items: [
                    { category: "product-category1", pageName: "equipment_fithing", productCategory: "productsOne", name: "Ракети та рогатки" },
                    { category: "product-category2", pageName: "equipment_fithing", productCategory: "productsOne", name: "Ємності для підгодовування" },
                    { category: "product-category3", pageName: "equipment_fithing", productCategory: "productsOne", name: "Тубуси та чохли" },
                    { category: "product-category4", pageName: "equipment_fithing", productCategory: "productsOne", name: "Сумки" },
                    { category: "product-category5", pageName: "equipment_fithing", productCategory: "productsOne", name: "Коробки для риболовлі" },
                    { category: "product-category6", pageName: "equipment_fithing", productCategory: "productsOne", name: "Платформи та станції" },
                    { category: "product-category7", pageName: "equipment_fithing", productCategory: "productsOne", name: "Ящики для риболовлі" },
                    { category: "product-category8", pageName: "equipment_fithing", productCategory: "productsOne", name: "Поводочниці та мотовила" }
                ]
            }
        ]
    },
    {
        title: "Ліхтарі",
        subcategories: [
            {
                items: [
                    { category: "product-category1", pageName: "lanterns", productCategory: "productsOne", name: "Комплектуючі для ліхтарів" },
                    { category: "product-category2", pageName: "lanterns", productCategory: "productsOne", name: "Налобні ліхтарі" },
                    { category: "product-category3", pageName: "lanterns", productCategory: "productsOne", name: "Ручні ліхтарі" },
                    { category: "product-category4", pageName: "lanterns", productCategory: "productsOne", name: "Кемпенгові ліхтарі" },
                    { category: "product-category5", pageName: "lanterns", productCategory: "productsOne", name: "Ліхтарі зброї" },
                    { category: "product-category6", pageName: "lanterns", productCategory: "productsOne", name: "Елементи живлення" }
                ]
            }
        ]
    },
    {
        title: "Термобілизна",
        subcategories: [
            {
                items: [
                    { category: "product-category1", pageName: "thermal_underwear", productCategory: "productsOne", name: "Термобілизна" },
                    { category: "product-category2", pageName: "thermal_underwear", productCategory: "productsOne", name: "Шкарпетки" },
                    { category: "product-category3", pageName: "thermal_underwear", productCategory: "productsOne", name: "Головні убори" },
                    { category: "product-category4", pageName: "thermal_underwear", productCategory: "productsOne", name: "Нашивки" },
                    { category: "product-category5", pageName: "thermal_underwear", productCategory: "productsOne", name: "Рукавички" },
                    { category: "product-category6", pageName: "thermal_underwear", productCategory: "productsOne", name: "Пояси" }
                ]
            }
        ]
    }
];

export default categories;