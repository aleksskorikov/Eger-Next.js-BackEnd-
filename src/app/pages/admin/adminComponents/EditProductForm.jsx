"use client";

import { useState, useEffect } from 'react';
import EditableImageField from "./editableImageField";
import styles from "../../../../styles/scss/addProducts.module.scss";

const EditProductForm = ({ product, onSave }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        price: '',
        description: '',
        category: '',
        page_name: '',
        product_category: '',
        images: Array(10).fill(''),  
        lists: Array(20).fill(''),
    });

    const [imagePreviews, setImagePreviews] = useState({});

    useEffect(() => {
        if (product) {
            setFormData({
                id: product.id || '',
                name: product.name || '',
                price: product.price || '',
                description: product.description || '',
                category: product.category || '',
                page_name: product.page_name || '',
                product_category: product.product_category || '',
                images: [
                    product.imgSrc || '', product.img2 || '', product.img3 || '', product.img4 || '', product.img5 || '',
                    product.img6 || '', product.img7 || '', product.img8 || '', product.img9 || '', product.img10 || ''
                ], 
                lists: Array.from({ length: 20 }, (_, i) => product[`list${i + 1}`] || ''),
            });

            const previews = {};
            if (product.imgSrc) previews["img0"] = `http://localhost:5001/${product.imgSrc}`;
            for (let i = 1; i <= 9; i++) { 
                const imageKey = `img${i + 1}`;
                if (product[imageKey]) {
                    previews[`img${i}`] = `http://localhost:5001/${product[imageKey]}`;
                }
            }
            setImagePreviews(previews);
        }
    }, [product]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (index, file) => {
        console.log(`Изображение ${index} изменено:`, file);
        setFormData(prev => {
            const newImages = [...prev.images];
            newImages[index] = file;
            return { ...prev, images: newImages };
        });

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreviews(prev => ({
                ...prev,
                [`img${index}`]: reader.result,
            }));
        };
        if (file) reader.readAsDataURL(file);
    };

    const handleDeleteImage = (index) => {
        setFormData(prev => {
            const newImages = [...prev.images];
            newImages[index] = '';  
            return { ...prev, images: newImages };
        });

        setImagePreviews(prev => {
            const newPreviews = { ...prev };
            delete newPreviews[`img${index}`]; 
            return newPreviews;
        });
    };
    
const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    for (const key in formData) {
        if (key !== 'images' && key !== 'lists') {
            formDataToSend.append(key, formData[key]);
        }
    }

    formData.images.forEach((image, index) => {
        if (image instanceof File) {
            const fieldName = index === 0 ? 'imgSrc' : `img${index + 1}`;
            formDataToSend.append(fieldName, image);
        }
    });

    formData.lists.forEach((list, index) => {
        formDataToSend.append(`list${index + 1}`, list);
    });

    try {
        const response = await fetch(`/api/products?id=${formData.id}`, {
            method: 'PUT',
            body: formDataToSend,
        });

        if (!response.ok) throw new Error("Ошибка сохранения");

        const updatedProduct = await response.json();
        onSave(updatedProduct);

        alert("Изменения сохранены!");
    } catch (error) {
        console.error("Ошибка при сохранении:", error);
        alert("Ошибка при сохранении данных");
    }
};

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.formTitle}>{formData.name}</h1>

            <div className={styles.formImages}>
                {formData.images.map((img, index) => (
                    <div key={index} className={styles.imageUpload}>
                        <p className={styles.subTitle}>{index === 0 ? "Основное изображение" : `Фото ${index}`}</p>
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => handleImageChange(index, e.target.files[0])}
                        />
                        {imagePreviews[`img${index}`] ? (  
                            <div className={styles.imagePreview}>
                                <img 
                                    src={imagePreviews[`img${index}`]} 
                                    alt={`Изображение ${index}`} 
                                    style={{ width: '200px', height: '200px' }}
                                />
                                <button 
                                    type="button"
                                    onClick={() => handleDeleteImage(index)}
                                    className={styles.clearBtn}>
                                    Удалить
                                </button>
                            </div>
                        ) : (
                            <div style={{ width: '200px', height: '200px', border: '1px solid #ccc' }}></div>
                        )}
                    </div>
                ))}
            </div>

            <div>
                <label className={styles.formField}>
                    Назва товару:
                    <textarea
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.editableInput}
                    />
                </label>
            </div>

            <div>
                <label className={styles.formField}>
                    Опис товару:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className={styles.editableInput}
                    />
                </label>
            </div>

            <div>
                <label className={styles.formField}>
                    Ціна товару:
                    <textarea
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className={styles.editableInput}
                    />
                </label>
            </div>

            <p className={styles.formSubtitle}>Опис товару у вигляді списку (не обов'язково)</p>
            {formData.lists.map((list, index) => (
                <label key={index} className={styles.formField}>
                    Пункт {index + 1}:
                    <textarea
                        value={list}
                        onChange={(e) => {
                            const newLists = [...formData.lists];
                            newLists[index] = e.target.value;
                            setFormData(prev => ({ ...prev, lists: newLists }));
                            
                        }}
                        className={styles.editableInput}
                    />
                </label>
            ))}

            <button type="submit" className='product__form-btn'>Сохранить изменения</button>
        </form>
    );
};

export default EditProductForm;








