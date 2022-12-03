import React from "react";
import { createContext } from "react";
import {db} from '../Config/Config';

export const ProductsContext = createContext();
export class ProductsContextProvider extends React.Component{
    state={
        products:[] 
    }
    componentDidMount()
    {
        const prevProducts= this.state.products;
        db.collection('Products').onSnapshot(snapshot=>{
            let changes= snapshot.docChanges();
            changes.forEach(change=>{
                if(change.type==='added'){
                    prevProducts.push({
                        ItemID:change.doc.id,
                        ItemName: change.doc.data().Item,
                        Category: change.doc.data().Category,
                        Description:change.doc.data().Description,
                        ProductPrice:   change.doc.data().ProductPrice,
                        ProductImg: change.doc.data().ProductImg,

                    })
                }
                this.setState({
                    products: prevProducts
                })
            })
        })
    }
    render(){
        return(
            <ProductsContext.Provider value={{ products:[...this.state.products]}}>
                {this.props.children}
            </ProductsContext.Provider>

        )
    }
}