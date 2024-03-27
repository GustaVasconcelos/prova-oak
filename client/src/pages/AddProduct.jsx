import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';
import Alert from '../components/Alert'; 
import '../styles/index.css'; 

const AddProduct = ({ history }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        status: false,
    });
    const [alert, setAlert] = useState({ type: '', message: '' }); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/products/', product);
            setAlert({ type: 'success', message: 'Produto adicionado com sucesso!' }); 
            
            setProduct({
                name: '',
                description: '',
                price: 0,
                status: false,
            });
        } catch (error) {
            setAlert({ type: 'danger', message: error.response.data.error }); 
        }
    };

    return (
        <div className="container-center">
            <div className="col-md-6">
                <h1 className="text-center mb-4">Adicionar Novo Produto</h1>
                {alert && <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />}
                <form onSubmit={handleSubmit}>
                    <Input id="name" label="Nome do Produto" type="text" name="name" value={product.name} onChange={handleChange} />
                    <Input id="description" label="Descrição" type="text" name="description" value={product.description} onChange={handleChange} />
                    <Input id="value" label="Valor" type="number" name="price" value={product.price} onChange={handleChange} />
                    <div className="mb-3">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="status" name="status" checked={product.status} onChange={(e) => setProduct({ ...product, status: e.target.checked })} />
                            <label className="form-check-label" htmlFor="status">Disponível para Venda</label>
                        </div>
                    </div>
                    <Button type="submit" text="Adicionar Produto" color="#4CAF50" />
                    <Button type="button" text="Voltar" color="#4CAF50" onClick={() => window.location.href = '/'} /> 
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
