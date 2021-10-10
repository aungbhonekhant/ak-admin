import "./login.css";
import  {Facebook, GitHub, LockOutlined, PersonOutline, VisibilityOffOutlined, VisibilityOutlined} from '@mui/icons-material';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const[type, setType] = useState('password');
    const showPass = () => {
        if(type === 'password')
        {
            setType('text');
        }

        if(type === 'text')
        {
            setType('password');
        }
    }
    return (
        <div className="login">
            <div className="loginContainer">
                <div className="formWrap">
                    <div className="formContainer">
                        <div className="formContent">
                            <h1 className="formTitle">Sign In</h1>
                            <p className="formDescription">Log in to your account to continue</p>
                            <form className="loginForm">
                                <div className="form">
                                    <div className="loginFormItem">
                                        <label for="username">USERNAME</label>
                                        <PersonOutline className="userIcon" />
                                        <input type="text" id="username" name="username" placeholder="e.g John_Snow"/>
                                    </div>
                                    <div className="loginFormItem">
                                        <div className="loginLabelContainer">
                                            <label for="password">PASSWORD</label>
                                            <Link to="/recovery_pass" className="loginForgotPass link">Forgot Password?</Link>
                                        </div>
                                        
                                        <LockOutlined className="passwordIcon" />
                                        <input type={type} id="password" name="password" placeholder="Password"/>
                                        <span onClick={showPass}>
                                            {
                                                type === "password" ? <VisibilityOutlined className="eyeIcon" />
                                                : type === "text" ?<VisibilityOffOutlined className="eyeIcon"/>
                                                :null
                                            }
                                            
                                        </span>
                                        
                                    </div>
                                    <div className="loginButtonContainer">
                                        <div className="loginButtonWrapper">
                                            <button className="loginButton">Log In</button>
                                        </div>
                                    </div>
                                    <div className="loginFormDivision">
                                        <span>OR</span>
                                    </div>
                                    <div className="loginFormSocial">
                                        <Link to="#" className="socialButton link">
                                            <Facebook className="fbIcon"/>
                                            <span className="loginFormSocialNameFb"> Facebook</span>
                                        </Link>
                                        <Link to="#" className="socialButton link">
                                            <GitHub className="gitHubIcon"/>
                                            <span className="loginFormSocialName"> Github</span>
                                        </Link>
                                    </div>
                                    <p className="signUpLink">
                                        Not registered ? 
                                        <Link to="/register" className="goSignUp link"> Create an account</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
