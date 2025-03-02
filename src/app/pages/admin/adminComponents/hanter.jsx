"use client";

import React, { useState, useEffect } from "react";
import styles from "../../../../styles/scss/admin.module.scss";
import useFetchProducts from "@/app/Hooks/useFetchProducts";
import CategoryListItem from "./CategoryListItem";
import categories from "./hantingCategories";

const Hanter = ({ onCategoryClick }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { products } = useFetchProducts();

    useEffect(() => {
        if (selectedCategory && products.length > 0) {
            const filtered = products.filter((product) => product.category === selectedCategory.category);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    }, [selectedCategory, products]);

    return (
        <>
            <div className={styles.hanter}>
                <p className={styles.title}>полювання</p>
                <ol className={styles.lists}>
                    {categories.map((categoryItem, index) => (
                        <li key={index} className={styles.list}>
                            <div className={styles.listTitle}>{categoryItem.title}</div>
                            {categoryItem.subcategories.map((subcategory, subIndex) => (
                                <ul key={subIndex}>
                                    {subcategory.subtitle && <p className={styles.listSubtitle}>{subcategory.subtitle}</p>}
                                    {subcategory.items.map((item, itemIndex) => (
                                        <CategoryListItem
                                            key={itemIndex}
                                            {...item}
                                            onClick={onCategoryClick}
                                        />
                                    ))}
                                </ul>
                            ))}
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
};

export default Hanter;





// "use client";

// import React, { useState, useEffect } from "react";
// import styles from "../../../../styles/scss/admin.module.scss";
// import useFetchProducts from "@/app/Hooks/useFetchProducts";
// import CategoryListItem from "./CategoryListItem";
// import categories from "./hantingCategories";

// const Hanter = ({ onCategoryClick }) => {
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const { products } = useFetchProducts();

//     const handleCategoryClick = (category) => {
//         if (selectedCategory !== category) {
//             setSelectedCategory(category);
//         }
//     };

//     useEffect(() => {
//         if (!selectedCategory) {
//             setFilteredProducts([]);
//             return;
//         }

//         const filtered = products.filter((product) => product.category === selectedCategory);
        
//         setFilteredProducts((prevFiltered) => 
//             JSON.stringify(prevFiltered) !== JSON.stringify(filtered) ? filtered : prevFiltered
//         );
//     }, [selectedCategory, products]);

//     return (
//         <div className={styles.hanter}>
//             <p className={styles.title}>Полювання</p>
//             <ol className={styles.lists}>
//                 {categories.map((categoryItem, index) => (
//                     <li key={index} className={styles.list}>
//                         <div className={styles.listTitle}>{categoryItem.title}</div>
//                         {categoryItem.subcategories.map((subcategory, subIndex) => (
//                             <ul key={subIndex}>
//                                 {subcategory.subtitle && <p className={styles.listSubtitle}>{subcategory.subtitle}</p>}
//                                 {subcategory.items.map((item, itemIndex) => (
//                                     <CategoryListItem
//                                         key={itemIndex}
//                                         {...item}
//                                         onClick={() => handleCategoryClick(item.category)}
//                                     />
//                                 ))}
//                             </ul>
//                         ))}
//                     </li>
//                 ))}
//             </ol>
//         </div>
//     );
// };

// export default Hanter;










