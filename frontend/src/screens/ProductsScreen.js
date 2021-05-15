import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {saveProduct, listProducts } from '../actions/productActions';
import axios from 'axios';


function ProductsScreen (props){
    const [id, setId] =useState('');
   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [image, setImage] = useState('');
   const [brand, setBrand] = useState('');
   const [category, setCategory] = useState('');
   const [countInStock, setCountInStock] = useState('');
   const [description, setDescription] = useState('');
    const productList = useSelector((state )=> state.productList);
   const {loading, products, error} = productList;
   console.log();
   const productSave = useSelector((state)=> state.productSave);
   const {loading: loadingSave, success: successSave, error: errorSave} = productSave;
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(listProducts());
        return() =>{
            
        }
    }, []);
    
    const submitHandler = (e) =>
    {
        e.preventDefault();
        dispatch(saveProduct({
            _id: id,
            name, 
            price, 
            image, 
            brand, 
            category,
            countInStock,
             description
            })
        );
    };
    return (<div className="content content-margined">
        <div className="product-header">
            <h3>Products creation</h3> 
            <button>Create Products</button>
        </div>
        <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Create Product</h2>
                </li>
                <li>
                    {loadingSave && <div>Loading .....</div>}
                    {errorSave && <div>{errorSave}</div>}
                </li>
                <li>
                    <label htmlFor="name">
                        Name of product
                    </label>
                    <input type="text" name="name" value={name} id="name" onChange={ (e) => setName(e.target.value)}>
                    </input>
                </li>
                <li><label htmlFor="price">
                        Price
                    </label>
                    <input type="text" name="price" id="price" value={price} onChange={ (e) => setPrice(e.target.value)}>
                    </input>
                </li>
                <li><label htmlFor="image">
                        Image
                    </label>
                    <input  type="text" name="image" id="image" value={image} onChange={ (e) => setImage(e.target.value)}>
                    </input>
                </li>
                <li><label htmlFor="brand">
                        Brand
                    </label>
                    <input type="text" name="brand" id="brand" value={brand} onChange={ (e) => setBrand(e.target.value)}>
                    </input>
                </li>
                <li><label htmlFor="category">
                        Category
                    </label>
                    <input type="text" name="category" id="category" value={category} onChange={ (e) => setCategory(e.target.value)}>
                    </input>
                </li>
                <li><label htmlFor="countInStock">
                    Count in Stock
                    </label>
                    <input type="text" value={countInStock} name="countInStock" id="countInStock" onChange={ (e) => setCountInStock(e.target.value)}>
                    </input>
                </li>
                <li><label htmlFor="decsription">
                        Description
                    </label>
                    <textarea name="description" value={description} id="description" onChange={ (e) => setDescription(e.target.value)}>
                    </textarea>
                </li>
                <li>
                <button type="submit" className="button primary">
                    {id ? 'Update' : 'Create'}
                </button>
                </li>
            </ul>
        </form>
    </div>

        <div className="product-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>(
                    <tr>
                    
                    <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>

        </div>
    </div> 
    );
}
export default ProductsScreen;