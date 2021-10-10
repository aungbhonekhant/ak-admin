import "./maintenance.css";
import {Link} from "react-router-dom";

export default function Maintenance() {
    return (
        <div className="maintenance">
            <div className="maintenanceContainer">
                <div className="">
                    <span className="maintenanceLogo">AK</span>
                </div>
                <h1 className="maintenanceTitle">Under Maintenance</h1>
                <p className="maintenanceSubTitle">Thank you for visiting us.</p>
                <p className="maintenanceDesc">
                    We are currently working on making some improvements
                    <br/>
                    to give you better user experience.
                </p>
                <p className="maintenanceThankU">Please visit us again shortly.</p>
                <Link to="/" className="maintenanceButton link">Home</Link>
            </div>
        </div>
    )
}
