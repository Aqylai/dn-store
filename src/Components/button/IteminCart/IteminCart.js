import React from 'react';
import './IteminCart.css'
import {RiDeleteBin5Line} from "react-icons/ri"
import { useDispatch } from 'react-redux';
import { deleteItemInCart } from '../../../redux/cart/reducer';

const ItemInCart = ({game}) => {
    const dispatch = useDispatch()
    return (
        <div className='item'>
            <img className='item-img' src={game.image} alt={game.title}/>
             <h5 className='item-title'>{game.title}</h5>
             <RiDeleteBin5Line onClick={() => dispatch(deleteItemInCart(game.id))} size={29}/>
            </div>
    );
}

export default ItemInCart;
