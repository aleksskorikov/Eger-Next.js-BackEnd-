
const categories = [
    {
        title: "Ружья",
        subcategories: [
            {
                subtitle: "Нарезные",
                items: [
                    { category: "product-category1", pageName: "guns", productCategory: "productsOne", name: "Напівавтоматичні" },
                    { category: "product-category2", pageName: "guns", productCategory: "productsOne", name: "Штуцери" },
                    { category: "product-category3", pageName: "guns", productCategory: "productsOne", name: "З поздовжньо-ковзним затвором" },
                    { category: "product-category4", pageName: "guns", productCategory: "productsOne", name: "Дрібнокаліберні" }
                ]
            },
            {
                subtitle: "Гладкоствольные",
                items: [
                    { category: "product-category-two1", pageName: "guns", productCategory: "productsTwo", name: "Переломні" },
                    { category: "product-category-two2", pageName: "guns", productCategory: "productsTwo", name: "Напівавтоматичні" },
                    { category: "product-category-two3", pageName: "guns", productCategory: "productsTwo", name: "Помпові" },
                    { category: "product-category-two4", pageName: "guns", productCategory: "productsTwo", name: "З продольно-ковзним затвором" }
                ]
            }
        ]
    },
    {
        title: "патрони",
        subcategories: [
            {
                items: [
                    { category: "product-category1", pageName: "cartridges", productCategory: "productsOne", name: "Дробові патрони" },
                    { category: "product-category2", pageName: "cartridges", productCategory: "productsOne", name: "Картеч" },
                    { category: "product-category3", pageName: "cartridges", productCategory: "productsOne", name: "Кульові патрони" },
                    { category: "product-category4", pageName: "cartridges", productCategory: "productsOne", name: "Нарізні" },
                    { category: "product-category5", pageName: "cartridges", productCategory: "productsOne", name: "Гладкоствольні" }
                ]
            }
        ]
    },
    {
        title: "Аксесуари",
        subcategories: [
            {
                subtitle: "",
                items: [
                    { category: "product-category1", pageName: "accessories", productCategory: "productsOne", name: "Кейси" },
                    { category: "product-category2", pageName: "accessories", productCategory: "productsOne", name: "Чохли" },
                    { category: "product-category3", pageName: "accessories", productCategory: "productsOne", name: "Підсумки" },
                    { category: "product-category4", pageName: "accessories", productCategory: "productsOne", name: "Коробки для патронів" },
                    { category: "product-category5", pageName: "accessories", productCategory: "productsOne", name: "Сумки" },
                    { category: "product-category6", pageName: "accessories", productCategory: "productsOne", name: "Патронташі" },
                    { category: "product-category7", pageName: "accessories", productCategory: "productsOne", name: "Фіксатори патронів" },
                    { category: "product-category8", pageName: "accessories", productCategory: "productsOne", name: "Ремені збройові" }
                ]
            }
        ]
    },
    {
        title: "Ножі",
        subcategories: [
            {
                subtitle: "",
                items: [
                    { category: "product-category1", pageName: "knives", productCategory: "productsOne", name: "Ножі з фіксованим клинком" },
                    { category: "product-category2", pageName: "knives", productCategory: "productsOne", name: "Складні ножі" },
                    { category: "product-category3", pageName: "knives", productCategory: "productsOne", name: "Тренувальна зброя" },
                    { category: "product-category4", pageName: "knives", productCategory: "productsOne", name: "Комплектуючі для ножів" },
                    { category: "product-category5", pageName: "knives", productCategory: "productsOne", name: "Точильні пристрої" }
                ]
            }
        ]
    },
    {
        title: "Одяг",
        subcategories: [
            {
                subtitle: "Верхній одяг",
                items: [
                    { category: "product-category1", pageName: "cloth", productCategory: "productsOne", name: "Куртки" },
                    { category: "product-category2", pageName: "cloth", productCategory: "productsOne", name: "Костюми" },
                    { category: "product-category3", pageName: "cloth", productCategory: "productsOne", name: "Футболки та джемпера" },
                    { category: "product-category4", pageName: "cloth", productCategory: "productsOne", name: "Штани та комбінезони" }
                ]
            },
            {
                subtitle: "Взуття",
                items: [
                    { category: "product-category-two1", pageName: "cloth", productCategory: "productsTwo", name: "Черевики" },
                    { category: "product-category-two2", pageName: "cloth", productCategory: "productsTwo", name: "Чоботи" },
                    { category: "product-category-two3", pageName: "cloth", productCategory: "productsTwo", name: "Гумові чоботи" },
                    { category: "product-category-two4", pageName: "cloth", productCategory: "productsTwo", name: "Заброди та комбінезони" }
                ]
            }
        ]
    },
    {
        title: "Догляд за зброєю",
        subcategories: [
            {
                subtitle: "",
                items: [
                    { category: "product-category1", pageName: "care", productCategory: "productsOne", name: "Шомполи" },
                    { category: "product-category2", pageName: "care", productCategory: "productsOne", name: "Набори для чищення" },
                    { category: "product-category3", pageName: "care", productCategory: "productsOne", name: "Протяжки" },
                    { category: "product-category4", pageName: "care", productCategory: "productsOne", name: "Насадки" },
                    { category: "product-category5", pageName: "care", productCategory: "productsOne", name: "Направляючі" },
                    { category: "product-category6", pageName: "care", productCategory: "productsOne", name: "Засоби для чишення" },
                    { category: "product-category7", pageName: "care", productCategory: "productsOne", name: "Фарба" },
                    { category: "product-category8", pageName: "care", productCategory: "productsOne", name: "Інші аксесуари" }
                ]
            }
        ]
    },
    {
        title: "Мисливські аксесуари",
        subcategories: [
            {
                subtitle: "",
                items: [
                    { category: "product-category1", pageName: "hunting_accessories", productCategory: "productsOne", name: "Опудала" },
                    { category: "product-category2", pageName: "hunting_accessories", productCategory: "productsOne", name: "Горни" },
                    { category: "product-category3", pageName: "hunting_accessories", productCategory: "productsOne", name: "Маскування" },
                    { category: "product-category4", pageName: "hunting_accessories", productCategory: "productsOne", name: "Радіостанції" }
                ]
            }
        ]
    },
    {
        title: "Стрілецькі аксесуари",
        subcategories: [
            {
                subtitle: "",
                items: [
                    { category: "product-category1", pageName: "shooting_accessories", productCategory: "productsOne", name: "Мішені" },
                    { category: "product-category2", pageName: "shooting_accessories", productCategory: "productsOne", name: "Тарілки" },
                    { category: "product-category3", pageName: "shooting_accessories", productCategory: "productsOne", name: "Інше" }
                ]
            }
        ]
    }
];
export default categories;
