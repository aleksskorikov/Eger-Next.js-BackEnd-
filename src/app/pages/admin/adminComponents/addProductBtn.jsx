import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddProductForm from './addProductForm';
import styles from "../../../../styles/scss/filteredProducts.module.scss"

const AddProductBtn = ({ onAddProduct, selectedCategory }) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleAddProduct = async (newProduct) => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            if (typeof onAddProduct === 'function') {
                await onAddProduct(newProduct);
            } else {
                console.error('onAddProduct не является функцией', onAddProduct);
            }
        } catch (error) {
            console.error('Ошибка при добавлении продукта:', error);
        } finally {
            setIsSubmitting(false);
            setShowAddForm(false);
        }
    };
  
    return (
        <div className="add-product-section">
            <button onClick={() => setShowAddForm(true)} className={styles.addProductsBtn}>
                додати новий товар
            </button>
            {showAddForm && (
                <AddProductForm
                    onSave={handleAddProduct}
                    onCancel={() => setShowAddForm(false)}
                    selectedCategory={selectedCategory}
                    isSubmitting={isSubmitting}
                />
            )}
        </div>
    );
};


AddProductBtn.propTypes = {
    onAddProduct: PropTypes.func.isRequired,
    selectedCategory: PropTypes.shape({
    category: PropTypes.string,
    pageName: PropTypes.string,
    product_category: PropTypes.string
    })
};

export default AddProductBtn;







