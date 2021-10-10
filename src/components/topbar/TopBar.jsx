import {Language, Menu, NotificationsNone, Settings} from '@mui/icons-material'
import {motion} from "framer-motion"
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './topbar.css'
import { Link } from 'react-router-dom';

export default function TopBar({show, onClickShow}) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div>
                        <span className="topbarLogo">AK</span>
                        <span className="topbarLogo topbarLogoRight">admin</span>
                    </div>
                    {
                        isTabletOrMobile && 
                        <div 
                            className="menuIcon"
                            onClick={onClickShow}
                        ><Menu/> </div>
                    }
                    
                    
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone className="topIconNoti"/>
                        <span className="topIconBadge"></span>
                    </div>
                    <div className="topbarIconContainer">
                        <motion.div 
                            whileHover={{ y: -5 }}
                            transition={{    duration: 0.5, ease: "easeOut"}}
                        >
                            <Language />
                        </motion.div>
                    </div>
                    <div className="topbarIconContainer">
                        <motion.div 
                            whileHover={{ rotate: [0, 360, 0] }} 
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <Settings />
                        </motion.div>
                    </div>
                    <Link to="/user/1" className="link">
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="topAvatar" alt="ProfileImg" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
