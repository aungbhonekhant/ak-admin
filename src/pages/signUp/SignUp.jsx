import "./signUp.css";
import  {AlternateEmailOutlined, Facebook, GitHub, LockOutlined, PersonOutline, VisibilityOffOutlined, VisibilityOutlined} from '@mui/icons-material';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
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
        <div className="signUp">
            <div className="signUpContainer">
                <div className="formWrap">
                    <div className="formContainer">
                        <div className="formContent">
                            <h1 className="formTitle">Register</h1>
                            <p className="signUpLink">
                                Already have an account?
                                <Link to="login" className="goSignUp link"> Log in</Link>
                            </p>
                            <form className="signUpForm">
                                <div className="form">
                                    <div className="signUpFormItem">
                                        <label for="username">USERNAME</label>
                                        <PersonOutline className="userIcon" />
                                        <input type="text" id="username" name="username" placeholder="Username"/>
                                    </div>
                                    <div className="signUpFormItem">
                                        <label for="email">EMAIL</label>
                                        <AlternateEmailOutlined className="emailIcon" />
                                        <input type="email" id="email" name="email" placeholder="Email"/>
                                    </div>
                                    <div className="signUpFormItem">
                                        <label for="password">PASSWORD</label>
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

                                    <div className="termsCondition">
                                        <div className="termsConditionContainer">
                                            <label className="termsConditionLabel">
                                                <input type="checkbox" className="termsConditionCheck" />
                                                <span className="termsConditionAgree">
                                                    I agree to the 
                                                    <Link to="#" className="termsConditionAgreeLink"> terms and conditions</Link>
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="signUpButtonContainer">
                                        <div className="signUpButtonWrapper">
                                            <button className="signUpButton">Get Started!</button>
                                        </div>
                                    </div>
                                    <div className="signUpFormDivision">
                                        <span>OR</span>
                                    </div>
                                    <div className="signUpFormSocial">
                                        <Link to="#" className="socialButton link">
                                            <Facebook className="fbIcon"/>
                                            <span className="signUpFormSocialNameFb"> Facebook</span>
                                        </Link>
                                        <Link to="#" className="socialButton link">
                                            <GitHub className="gitHubIcon"/>
                                            <span className="signUpFormSocialName"> Github</span>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
