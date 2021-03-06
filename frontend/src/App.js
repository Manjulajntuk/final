import React from 'react';
import {BrowserRouter,Route, Link } from 'react-router-dom'; 
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import {useSelector} from 'react-redux';
function App() {
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const openMenu = () =>{
       document.querySelector(".sidebar").classList.add("open");
   
  }
   const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");

}
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header"> 
        <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/" >Amazona
            </Link>
        </div>
        <div className="header-links">
            <a href="cart.html">Cart </a>
            {
                userInfo ?  (<Link to="/profile">{userInfo.name}</Link>)
                :(<Link to="/signin"> Signin </Link>)
            }
            <Link to="/signin">Sign-in</Link>
            
        </div>
    </header>
   <aside className="sidebar">
       <h3> Shopping categories list</h3>
       <button className="sidebar-close-button" onClick={closeMenu}>X</button>
       <ul>
           <li>
               <a href="index.html">Pants</a>
           </li>
           <li>
            <a href="index.html">Shirts</a>
        </li>
       </ul>
   </aside>
    <main className="main">
        <div className="content">
        <Route path='/signin' component={SigninScreen} />
        <Route path='/products' component={ProductsScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen}/>
        <Route path="/" component={HomeScreen} exact={true}/>
        </div>
      
    </main>
    <footer className="footer">
        ALl right reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
