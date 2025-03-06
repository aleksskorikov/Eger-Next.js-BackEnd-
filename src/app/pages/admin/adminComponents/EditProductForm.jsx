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
        imgSrc: '',  
        images: Array(9).fill(''),  
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
                imgSrc: product.imgSrc || '', 
                images: [
                    product.img2 || '', product.img3 || '', product.img4 || '', product.img5 || '',
                    product.img6 || '', product.img7 || '', product.img8 || '', product.img9 || '',
                    
                ], 
                lists: Array.from({ length: 20 }, (_, i) => product[`list${i + 1}`] || ''),
            });

            const previews = {};
            if (product.imgSrc) {
                previews.imgSrc = `http://localhost:5001/${product.imgSrc}`;
            }
            for (let i = 2; i <= 10; i++) {
                if (product[`img${i}`]) {
                    previews[`img${i}`] = `http://localhost:5001/${product[`img${i}`]}`;
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
        setFormData(prev => {
            const newImages = [...prev.images];
            newImages[index] = file;
            return { ...prev, images: newImages };
        });

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreviews(prev => ({
                ...prev,
                [`img${index + 2}`]: reader.result,  
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
            delete newPreviews[`img${index + 2}`]; 
            return newPreviews;
        });
    };

    const handleMainImageChange = (file) => {
        setFormData(prev => ({ ...prev, imgSrc: file }));

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreviews(prev => ({
                ...prev,
                imgSrc: reader.result,
            }));
        };
        if (file) reader.readAsDataURL(file);
    };

const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    for (const key in formData) {
        if (formData[key] && Array.isArray(formData[key])) {
            formData[key].forEach((item, index) => {
                formDataToSend.append(`${key}[${index}]`, item);
            });
        } else {
            formDataToSend.append(key, formData[key]);
        }
    }

    formData.images.forEach((image, index) => {
        if (image) {
            formDataToSend.append(`img${index + 2}`, image);
        }
    });

    if (formData.imgSrc) {
        formDataToSend.append('imgSrc', formData.imgSrc);
    }

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
            <h1 className='product__form-title'>{formData.name}</h1>

            {['name', 'description', 'price'].map(field => (
                <label key={field} className='product__form-field'>
                    {field}:
                    <textarea name={field} value={formData[field]} onChange={handleInputChange} />
                </label>
            ))}

            <div className="product__form-images">
                <div className="image-upload">
                    <p>Основное изображение</p>
                    <EditableImageField
                        currentImage={formData.imgSrc ? `http://localhost:5001/${formData.imgSrc}` : ''}
                        onSave={handleMainImageChange}
                    />
                    
                    {imagePreviews.imgSrc ? (
                        <div className="image-preview">
                            <img 
                                src={imagePreviews.imgSrc} 
                                alt="Основное изображение"
                                style={{ width: '200px', height: '200px' }}
                            />
                            <button 
                                type="button" 
                                onClick={() => handleDeleteImage(0)} 
                                className='product__clear-btn'>
                                Удалить
                            </button>
                        </div>
                    ) : (
                        <div style={{ width: '200px', height: '200px', border: '1px solid #ccc' }}></div>
                    )}
                </div>

                {formData.images.map((img, index) => {  
                    return (
                        <div key={index} className="image-upload">
                            <p>Фото {index + 2}</p> 

                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={(e) => handleImageChange(index, e.target.files[0])}
                            />

                            {imagePreviews[`img${index + 2}`] ? (  
                                <div className="image-preview">
                                    <img 
                                        src={imagePreviews[`img${index + 2}`]} 
                                        alt={`Изображение ${index + 2}`} 
                                        style={{ width: '200px', height: '200px' }}
                                    />
                                    <button 
                                        type="button" 
                                        onClick={() => handleDeleteImage(index)}  
                                        className='product__clear-btn'>
                                        Удалить
                                    </button>
                                </div>
                            ) : (
                                <div style={{ width: '200px', height: '200px', border: '1px solid #ccc' }}></div>
                            )}
                        </div>
                    );
                })}
            </div>

            {formData.lists.map((list, index) => (
                <label key={index} className='product__form-list'>
                    Список {index + 1}:
                    <textarea
                        value={list}
                        onChange={(e) => {
                            const newLists = [...formData.lists];
                            newLists[index] = e.target.value;
                            setFormData(prev => ({ ...prev, lists: newLists }));
                        }}
                    />
                </label>
            ))}

            <button type="submit" className='product__form-btn'>Сохранить изменения</button>
        </form>
    );
};

export default EditProductForm;








