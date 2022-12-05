import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {

  const [ismobile, setismobile] = useState(false)
  return (
     <header className="header">
          <h2>ReactStore</h2>

          <nav className= {ismobile ? "mobile-menu-nav" : "navbar-list-menu" }   onClick={() =>setismobile(false)}>
             <ul className='navbar-list'>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/product'>Products</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              <li><NavLink to='/login' className="login">Login</NavLink></li>
             </ul>
            <div className='cartitem'><i class="fa-solid fa-cart-shopping"></i></div>
        </nav>
        <div className="mobile-menu-icon" onClick={() => setismobile(!ismobile)}>
          {
             ismobile ? ( <i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)
          }
         
          
        </div>
     </header>
  );
}
