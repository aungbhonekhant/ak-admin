import './error.css';
import {Link, useHistory } from 'react-router-dom'

export default function Error({errorNumber, errorMessage}) {
    const history = useHistory();
    return (
        <div className="errorPage">
            <div className="errorTop">
                <div className="row">
                    <div className="errorTopContainer">
                        <Link to='/' className="logo">AK</Link>
                    </div>
                </div>
                
            </div>
            <div className="errorBody">
                <div className="errorItem">
                    <h1 className="errorNumber">{errorNumber}</h1>
                    <p className="errorText">Ooops!</p>
                    <p className="errorDesc">{errorMessage}</p>
                    <button onClick={history.goBack} className="errorButton">Go Back</button>
                </div>
            </div>
        </div>
    )
}
