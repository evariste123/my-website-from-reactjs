import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <div className='menu'>
    <div className='bar'>
   <a> <i className='far fa-home'></i><Link to='/'>home</Link></a>
    <a> <i className='fas fa-heart'></i><Link to='/about'>about</Link><i className='fas fa-caret-down'></i></a>
    <a> <i className='far fa-address-book'></i><Link to='/contact'>contact</Link></a>
    <a> <i className='fas fa-add'></i><Link to='/product'>product</Link></a>
    <a> <i className='fas fa-earth'></i><Link to='/service'>service</Link></a>
    <a> <i className='fas fa-blog'></i><Link to='/blogs'>blogs</Link></a>
    <a> <i className='far fa-user'></i><Link to='/login'>login</Link></a>
    <a> <i className='fas fa-user'></i><Link to='/join'>join</Link></a>
        </div>
        </div>
    )
}
export default Header