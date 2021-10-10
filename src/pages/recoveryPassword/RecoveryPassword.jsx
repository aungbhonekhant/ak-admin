import "./recoveryPassword.css";
import  {AlternateEmailOutlined } from '@mui/icons-material';

export default function RecoveryPassword() {
    return (
        <div className="recoveryPass">
            <div className="recoveryPassContainer">
                <div className="formWrap">
                    <div className="formContainer">
                        <div className="formContent">
                            <h1 className="formTitle">Password Recovery</h1>
                            <p className="formDescription">Enter your email and instructions will sent to you!</p>
                            <form className="recoveryPassForm">
                                    <div className="recoveryPassFormItem">
                                        <label htmlFor="email">EMAIL</label>
                                        <AlternateEmailOutlined className="emailIcon" />
                                        <input type="email" id="email" name="email" placeholder="Email"/>
                                    </div>

                                    <div className="recoveryPassButtonContainer">
                                        <div className="recoveryPassButtonWrapper">
                                            <button className="recoveryPassButton">Reset</button>
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
