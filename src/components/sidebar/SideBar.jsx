import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, HomeOutlined, MailOutline, PermIdentity, RestartAlt, Storefront, Timeline, TrendingUp, Login, AppRegistrationOutlined } from '@mui/icons-material';
import React from 'react';
import { motion } from "framer-motion";
import './sideBar.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

export default function SideBar({show}) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' })
    return (
        // sidebar start
        <div className={`sideBar ${ !show ? "hideSideBar" : "showSideBar"}`}> 
            <div className="sideBarWrapper">
                {/* sidebar menu start */}
                <div className="sideBarMenu"> 
                    <div className="sideBarTitle">
                        <span>Dashboard </span> 
                        {/* <ArrowDropDown />  */}
                    </div>
                    {/* sidebar list */}
                    <ul className="sideBarList">
                        <Link to="/" className="link">
                            <motion.li 
                                initial={{x: -10}}
                                animate={{ x: 0 }}
                                transition={{ duration: 1 }}
                                className="sideBarListItem active">
                                <HomeOutlined className="sideBarIcon" />
                                Home
                            </motion.li>
                        </Link>
                        
                        <motion.li
                            initial={{x: -10}}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }} 
                            className="sideBarListItem"
                        >
                            <Timeline className="sideBarIcon"/>
                            Analytics
                        </motion.li>
                        <motion.li
                            initial={{x: -10}}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }} 
                            className="sideBarListItem"
                        >
                            <TrendingUp className="sideBarIcon"/>
                            Sales
                        </motion.li>
                    </ul>
                    {/* sidebar list end */}
                </div>
                {/* sidebar menu end */}
                {/* sidebar menu start */}
                <div className="sideBarMenu"> 
                    <div className="sideBarTitle">
                        <span>Quick menu </span> 
                        {/* <ArrowDropDown />  */}
                    </div>
                    {/* sidebar list */}
                    <ul className="sideBarList">
                        <Link to="/users" className="link">
                            <motion.li 
                                initial={{x: -10}}
                                animate={{ x: 0 }}
                                transition={{ duration: 1 }}className="sideBarListItem"
                            >
                                <PermIdentity className="sideBarIcon" />
                                Users
                            </motion.li>
                        </Link>
                        
                        <Link to="/products" className="link">
                            <motion.li
                                initial={{x: -10}}
                                animate={{ x: 0 }}
                                transition={{ duration: 1 }}className="sideBarListItem"
                            >
                                <Storefront className="sideBarIcon"/>
                                Products
                            </motion.li>
                        </Link>
                        <motion.li
                            initial={{x: -10}}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}className="sideBarListItem"
                        >
                            <AttachMoney className="sideBarIcon"/>
                            Transations
                        </motion.li>
                        <motion.li
                            initial={{x: -10}}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}className="sideBarListItem"
                        >
                            <BarChart className="sideBarIcon"/>
                            Reports
                        </motion.li>
                    </ul>
                    {/* sidebar list end */}
                </div>
                {/* sidebar menu end */}
                {/* sidebar menu start */}
                <div className="sideBarMenu"> 
                    <div className="sideBarTitle">
                        <span>Notifications </span> 
                        {/* <ArrowDropDown />  */}
                    </div>
                    {/* sidebar list */}
                    <ul className="sideBarList">
                        <motion.li
                            initial={{x: -10}}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}className="sideBarListItem"
                        >
                            <MailOutline className="sideBarIcon" />
                            Mail
                        </motion.li>
                        <motion.li
                            initial={{x: -10}}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}className="sideBarListItem"
                        >
                            <DynamicFeed className="sideBarIcon"/>
                            Feedback
                        </motion.li>
                        <motion.li
                            initial={{x: -10}}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}className="sideBarListItem"
                        >
                            <ChatBubbleOutline className="sideBarIcon"/>
                            Messages
                        </motion.li>
                    </ul>
                    {/* sidebar list end */}
                </div>
                {/* sidebar menu end */}
                {/* sidebar menu start */}
                <div className="sideBarMenu"> 
                    <div className="sideBarTitle">
                        <span>Other Pages</span> 
                        {/* <ArrowDropDown />  */}
                    </div>
                    {/* sidebar list */}
                    <ul className="sideBarList">
                        <Link to="/login" className="link">
                            <motion.li
                                initial={{x: -10}}
                                animate={{ x: 0 }}
                                transition={{ duration: 1 }}className="sideBarListItem"
                            >
                                <Login className="sideBarIcon" />
                                Login
                            </motion.li>
                        </Link>
                        <Link to="/register" className="link">
                            <motion.li
                                initial={{x: -10}}
                                animate={{ x: 0 }}
                                transition={{ duration: 1 }}className="sideBarListItem"
                            >
                                <AppRegistrationOutlined className="sideBarIcon"/>
                                Register
                            </motion.li>
                        </Link>

                        <Link to="/recovery_pass" className="link">
                            <motion.li
                                initial={{x: -10}}
                                animate={{ x: 0 }}
                                transition={{ duration: 1 }}className="sideBarListItem"
                            >
                                <RestartAlt className="sideBarIcon"/>
                                Recovery Password
                            </motion.li>
                        </Link>
                    </ul>
                    {/* sidebar list end */}
                </div>
                {/* sidebar menu end */}
            </div>
        </div>
        // sidebar end
    )
}
