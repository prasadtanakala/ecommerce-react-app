import React from 'react'
import './HeaderComponent.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaHome ,FaShoppingCart ,FaSignOutAlt} from 'react-icons/fa';
const HeaderComponent = () => {
    const navigate =useNavigate();
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/'); 
    };
  return (
    <>
    <header className="ecommerce-header">
     <div className="header-container">
       <Link to="/home" className="logo">
         Shopping
       </Link>
       
       <nav className="nav-links">
         <Link to="/home" className="nav-link">
           <FaHome className="nav-icon" />
           <span>Home</span>
         </Link>
         
         <Link to="/cart" className="nav-link cart-link">
           <FaShoppingCart className="nav-icon" />
           <span>cart</span>
         </Link>
         
         <button  onClick={handleLogout} className="nav-link logout-btn">
           <FaSignOutAlt  className="nav-icon" />
           <span>Logout</span>
         </button>
       </nav>
     </div>
   </header>
  </>
  )
}

export default HeaderComponent