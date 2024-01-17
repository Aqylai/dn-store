import React from 'react';
import Button from '../../button/button';
import './Cart-Menu.css'
import ItemInCart from '../../button/IteminCart/IteminCart';

const CartMenu = ({items, onClick}) =>{
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0)
    return (
        <div className='cart-menu'>
            <div className='cart-menu__game-list'>
              {
                items.length > 0 ? items.map(game => <ItemInCart key={game.id} game={game} />) : 'Корзина пуста'
            }
            </div>
            {
                items.length > 0 ?
                <div className='cart-menu__arrange'>
                <div className='cart-menu__total-price'>
                 <span>Итого:</span>
                 <span>{totalPrice } сом</span>
                </div>
                <Button type='primary' size='m'>Оформить заказ</Button>
                </div>
        : null
    }
    </div>
    );
}

export default CartMenu;