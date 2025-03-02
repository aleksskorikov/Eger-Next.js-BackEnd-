"use client";

import React, { useState, useCallback, useMemo } from "react";
import EditableField from "./editableField";
import EditableImageField from "./editableImageField";
import styles from "../../../../styles/scss/addProducts.module.scss";

const AddProductForm = ({ onSave, onCancel }) => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: "",
        list: Array(20).fill(""),
        images: {},
    });

    // Используем useCallback для оптимизации функций
    const handleFieldChange = useCallback((field, value) => {
        setNewProduct(prevState => {
            if (prevState[field] === value) return prevState; // ✅ Избегаем лишнего рендера
            return { ...prevState, [field]: value };
        });
    }, []);

    const handleListChange = useCallback((index, value) => {
        setNewProduct(prevState => {
            if (prevState.list[index] === value) return prevState; // ✅ Проверяем изменение

            const updatedList = [...prevState.list];
            updatedList[index] = value;
            return { ...prevState, list: updatedList };
        });
    }, []);

    const handleImageChange = useCallback((field, file) => {
        setNewProduct(prevState => {
            if (file) {
                return { ...prevState, images: { ...prevState.images, [field]: file } };
            } else {
                const updatedImages = { ...prevState.images };
                delete updatedImages[field];
                return { ...prevState, images: updatedImages };
            }
        });
    }, []);

    // Оптимизируем list с useMemo
    const listMemo = useMemo(() => newProduct.list, [newProduct.list]);

    const handleSaveClick = async () => {
        const formData = new FormData();

        Object.keys(newProduct).forEach((key) => {
            if (key === "images") {
                Object.entries(newProduct.images).forEach(([field, file]) => {
                    if (file instanceof File) {
                        formData.append(field, file);
                    }
                });
            } else if (key === "list") {
                newProduct.list.forEach((item, index) => {
                    if (item) formData.append(`list${index + 1}`, item);
                });
            } else if (newProduct[key]) {
                formData.append(key, newProduct[key]);
            }
        });

        console.log("📤 FormData перед отправкой:", [...formData.entries()]);

        if (typeof onSave === "function") {
            onSave(formData);
        } else {
            console.error("onSave не является функцией", onSave);
        }
    };

    return (
        <div className="add-product-form">
            <p className="product__form-subtitle">Основне фото</p>
            <EditableImageField
                currentImage={newProduct.images.imgSrc}
                onSave={(file) => handleImageChange("imgSrc", file)}
            />

            {Array.from({ length: 9 }).map((_, index) => (
                <div key={index}>
                    <p className="product__form-subtitle">Додаткове фото {index + 1}</p>
                    <EditableImageField
                        currentImage={newProduct.images[`img${index + 2}`]}
                        onSave={(file) => handleImageChange(`img${index + 2}`, file)}
                    />
                </div>
            ))}

            <p className="product__form-subtitle">Назва товару</p>
            <EditableField value={newProduct.name} onSave={(value) => handleFieldChange("name", value)} />

            <p className="product__form-subtitle">Опис товару (не обов'язково)</p>
            <EditableField value={newProduct.description} onSave={(value) => handleFieldChange("description", value)} />

            {Array.from({ length: 20 }).map((_, index) => (
                <div key={index}>
                    <p className="product__form-subtitle">Опис товару у вигляді списку пункт {index + 1} (не обов'язково)</p>
                    <EditableField value={listMemo[index]} onSave={(value) => handleListChange(index, value)} />
                </div>
            ))}

            <p className="product__form-subtitle">Ціна товару</p>
            <EditableField value={newProduct.price} onSave={(value) => handleFieldChange("price", value)} />

            <div className="add__product-btns-block">
                <button onClick={handleSaveClick} className="add__product-btn-ok">Зберегти</button>
                <button onClick={onCancel} className="add__product-cancellation">Скасувати</button>
            </div>
        </div>
    );
};

export default AddProductForm;
