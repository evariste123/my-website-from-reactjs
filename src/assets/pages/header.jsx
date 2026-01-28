import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <div className='menu'>
    <div className='bar'>
   <Link to='/'>home</Link>
    <Link to='/about'>about</Link>
    <Link to='/contact'>contact</Link>
    <Link to='/product'>product</Link>
    <Link to='/service'>service</Link>
<Link to='/blogs'>blogs</Link>
    <Link to='/login'>login</Link>
    <Link to='/join'>join</Link>
        </div>
        </div>
    )
}
export default Header