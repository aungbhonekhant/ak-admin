import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
import "./layout.css";

export default function Layout(props) {
    const[showSide, setShowSide] = useState(false);
    const handleShowSide = () => {
        setShowSide(prevShowSide => !prevShowSide)
        console.log(showSide)
    }
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <div>
            <TopBar show={showSide} onClickShow={handleShowSide}/> {/* Header bar  */}
            <div className='container'>
                {
                    isTabletOrMobile ? <SideBar show={showSide}/> : <SideBar show={true}/>
                }
                {props.children}
            </div>
        </div>
    )
}
