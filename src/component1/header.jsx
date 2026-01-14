import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(
        <div>
<a><Link to='/'>document</Link></a>
<a><Link to='/status'>status</Link></a>
<a><Link to='/support'>support</Link></a>
<a><Link to='/developer'>developer</Link></a>
<a><Link to='/agent'>agent</Link></a>
        </div>
    )
}
export default Header