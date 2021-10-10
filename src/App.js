import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import './App.css';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import RecoveryPassword from './pages/recoveryPassword/RecoveryPassword';
import ErrorPage404 from './pages/error/ErrorPage404';
import ErrorPage500 from './pages/error/ErrorPage500';
import ErrorPage503 from './pages/error/ErrorPage503';
import Maintenance from './pages/error/maintenance/Maintenance';

function App() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/"> {/* Home Page route  */}
                        <Home/> {/* Home Page Dashboard  */}
                    </Route>
                    <Route path="/users"> {/* User list route  */}
                        <UserList /> {/* User list Page  */} 
                    </Route>
                    <Route path="/user/:userId"> {/* User details route  */}
                        <User /> {/* User details and edit Page  */} 
                    </Route>
                    <Route path="/newUser"> {/* new User create route  */}
                        <NewUser /> {/* new User create Page  */} 
                    </Route>
                    <Route path="/products"> {/* User list route  */}
                        <ProductList /> {/* Product list table Page  */} 
                    </Route>
                    <Route path="/product/:productId"> {/* Product details route  */}
                        <Product /> {/* Product details and edit Page  */} 
                    </Route>
                    <Route path="/newProduct"> {/* Product details route  */}
                        <NewProduct /> {/* new Product create Page  */} 
                    </Route>

                    {/* auth routes */}
                    <Route path="/login"> {/* Login route  */}
                        <Login /> {/* Login Page  */} 
                    </Route>
                    <Route path="/register"> {/* Sign up route  */}
                        <SignUp /> {/* Sign up Page  */} 
                    </Route>
                    <Route path="/recovery_pass"> {/* forgot password route  */}
                        <RecoveryPassword /> {/* forgot password Page  */} 
                    </Route>

                    {/* error Routes */}
                    <Route path="/page_not_found"> {/* 404 erro route  */}
                        <ErrorPage404 /> {/* 404 error Page  */} 
                    </Route>
                    <Route path="/internal_server_error"> {/* Internal server error route  */}
                        <ErrorPage500 /> {/* Internal server error Page  */} 
                    </Route>
                    <Route path="/services_unavailable"> {/* services unavailable error route  */}
                        <ErrorPage503 /> {/* services unavailable error Page  */} 
                    </Route>
                    <Route path="/maintenance"> {/* maintenance route  */}
                        <Maintenance /> {/* maintenance Page  */} 
                    </Route>
                </Switch>
        </Router>
    );
}

export default App;
