import React from 'react';
import styles from "../../../../styles/scss/filteredProducts.module.scss";

const DeleteBtn = ({ productId, onDeleteSuccess }) => {

const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
        try {
            const response = await fetch(`http://localhost:5001/api/products?id=${productId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Товар успешно удален.');
                onDeleteSuccess();
            } else {
                alert('Ошибка при удалении товара.');
            }
        } catch (error) {
            console.error('Ошибка при удалении товара:', error);
            alert('Ошибка при удалении товара.');
        }
    }
};
    return (
        <button onClick={handleDelete} className={styles.deleteButton}>Удалить товар</button>
    );
};

export default DeleteBtn;








