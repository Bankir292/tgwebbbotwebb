import React from "react";
import './ProductList.css';
import ProductItem from "../ProductItem/PrductItem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
    {id: '1', title: "uran", price: 100, description: 'desc'},
    {id: '2', title: "silver", price: 10, description: 'desc'},
    {id: '3', title: "bronze", price: 50, description: 'desc'},
    {id: '4', title: "copper", price: 70, description: 'desc'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc,item) => {
        return acc +=item.price
    }, 0)
}

const ProductList = (props) => {
    const  [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item =>item.id ===product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems,product];
        }

        setAddedItems(newItems);

        if(newItems.length === 0){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Total price ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
        <div className={'list'}>
            {products.map(item =>(
                <ProductItem
                    product = {item}
                    onAdd = {onAdd}
                    className = {'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;