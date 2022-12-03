import React,{useState} from 'react'
import {storage, db} from '../Config/Config'


export const AddProducts = () => {

    const [category, setCategory] = useState('');
    const [Item, setItem] = useState('');
    const [Description, setdescription] = useState('');
    const [ProductPrice,setProductPrice] = useState(0);
    const [ProductImg,setProductImg] = useState(null);
    const [error,setError] = useState('');

    const types  = ['image/png', 'image/jpeg', 'image/jpg'];

    const productImgHandler = (e) =>{
        let selectedFile =e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('');
        }
        else{
            setProductImg(null);
            setError('Please select a valid image type');
        }
    }
  
const addProduct = (e) =>{
    e.preventDefault();
    //console.log(category,Item,Description,ProductPrice,ProductImg);
    const uploadTask = storage.ref(`product-images/${ProductImg.name}`).put(ProductImg);
    uploadTask.on('state_changed',snapshot=>{
        const progress =(snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        console.log(progress);
    },err=>{

    setError(err.message)
    },()=>{
        storage.ref('product-images').child(ProductImg.name).getDownloadURL().then(url => {
            db.collection('Products').add({
               Category:category,
                Item:Item,
                Description:Description,
                ProductPrice: Number(ProductPrice),
                ProductImg: url
            }).then(()=>{
               setCategory('');
                setItem('');
                setdescription('');
                setProductPrice(0);
                setError('');
                document.getElementById('file').value='';

                
            }).catch(err=> setError(err.message));
        })
    })
}
    return (
    <div className='container'>     
    <br />
    <h2>ADD PRODUCTS</h2>
    <hr />
    <form autoComplete='on' className='form-group' onSubmit={addProduct}>
        <label htmlFor='category'> Category</label>
        <br />
        <select className='form-control' required  
        onChange={(e)=>setCategory(e.target.value)} value={category}>
            <option value="Furniture">Furniture</option>
            <option value="Automobile & Bicycles">Automobile & Bicycles</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Computer Accessories">Computer Accessories</option>
    </select>
        <br />
        <label htmlFor='item'> Item</label>
        <br />
        <input type='text' className='form-control' required 
        onChange={(e)=>setItem(e.target.value)} value={Item}/>
        <br />
        <label htmlFor='Description'> Description</label>
        <br />
        <input type='textarea' className='form-control' required 
        onChange={(e)=>setdescription(e.target.value)} value={Description}/>
        <br />
        <label htmlFor='product-price'> Product Price</label>
        <input type='number' className='form-control' required 
        onChange={(e)=>setProductPrice(e.target.value)} value={ProductPrice}/>
        <br />
        <label htmlFor='product-img'>Product Image</label>
        <input type='file' className='form-control' onChange={productImgHandler} id='file'/>
        <br />
        <button className='btn btn-success btn-md mybtn'>ADD</button>  
        </form>
        {error && <span>{error}</span>}
        </div>
  )
}
