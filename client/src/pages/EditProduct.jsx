import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';
import Alert from '../components/Alert';
import '../styles/index.css'; 

const EditProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        status: false,
    });
    const [alert, setAlert] = useState({ type: '', message: '' });

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/products/${id}`, product);
            setAlert({ type: 'success', message: 'Produto editado com sucesso!' });
        } catch (error) {
            console.error('Erro ao editar produto:', error);
            setAlert({ type: 'danger', message: error.response.data.error });
        }
    };

    return (
        <div className="container-center">
            <div className="col-md-6">
                <h1>Editar Produto</h1>
                {alert.message && <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />}
                <form onSubmit={handleSubmit}>
                    <Input id="name" label="Nome do Produto" type="text" name="name" value={product.name} onChange={handleChange} required />
                    <Input id="description" label="Descrição" type="text" name="description" value={product.description} onChange={handleChange} required />
                    <Input id="price" label="Valor" type="number" name="price" value={product.price} onChange={handleChange} required />
                    <div className="mb-3">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="status" name="status" checked={product.status} onChange={(e) => setProduct({ ...product, status: e.target.checked })} />
                            <label className="form-check-label" htmlFor="status">Disponível para Venda</label>
                        </div>
                    </div>
                    <Button type="submit" text="Salvar Alterações" color="#4CAF50" /> 
                    <Button type="submit" text="Voltar" color="#4CAF50" onClick={() => window.location.href = '/'} /> 
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
