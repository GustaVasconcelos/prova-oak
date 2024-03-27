import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '../components/Alert'; 
import '../styles/index.css'; 

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products/');
            setProducts(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            setAlert({ type: 'danger', message: error.response.data.error });
        }
    };


    const deleteProduct = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/products/${productId}`);
            fetchProducts();
            setAlert({ type: 'success', message: response.data.message });

        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            setAlert({ type: 'danger', message: error.response.data.error });
        }
    };

    const getStatusText = (status) => {
        return status ? 'Sim' : 'Não';
    };

    return (
        <div className="container-center">
            {alert && <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />}
            <h1 className="my-4">Lista de Produtos</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Status</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{getStatusText(product.status)}</td>
                                <td>
                                    <Link to={`/edit/${product._id}`} className="btn btn-primary me-2">Editar</Link>
                                    <button onClick={() => deleteProduct(product._id)} className="btn btn-danger">Excluir</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">Não há produtos cadastrados.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Link to="/add" className="btn btn-success">Cadastrar Novo Produto</Link>
        </div>
    );
};

export default ProductList;
