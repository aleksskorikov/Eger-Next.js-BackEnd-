import { useState, useEffect } from 'react';

const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/products'); 
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Ошибка при получении товаров:', error);
                setError(error);
            }
        };

        fetchProducts();
    }, []);



  return { products, error };
}







export default useFetchProducts;