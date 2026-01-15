import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <div className='menu'>
    <div className='bar'>
   <a><Link to='/'>home</Link></a>
    <a><Link to='/about'>about</Link></a>
    <a><Link to='/contact'>contact</Link></a>
    <a><Link to='/product'>product</Link></a>
    <a><Link to='/service'>service</Link></a>
    <a><Link to='/blogs'>blogs</Link></a>
    <a><Link to='/login'>login</Link></a>
    <a><Link to='/join'>join</Link></a>
        </div>
        </div>
    )
}
export default Header