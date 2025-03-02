import React from 'react';

const DeleteBtn = ({ productId, onDeleteSuccess, style }) => {

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
        <button onClick={handleDelete} className={`${style} delete-button`}>Удалить товар</button>
    );
};

export default DeleteBtn;








