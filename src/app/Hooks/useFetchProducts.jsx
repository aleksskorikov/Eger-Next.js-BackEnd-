import { useState, useEffect } from 'react';

const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products'); 

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Ошибка при получении товаров:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, error, loading };
};

export default useFetchProducts;
