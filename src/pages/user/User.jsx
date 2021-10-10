import './user.css';
import {
    CalendarToday,
    EmailOutlined,
    Facebook,
    LinkedIn,
    LocationSearching,
    PermIdentity,
    PhoneAndroid,
    Publish,
    Twitter
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Layout from '../../components/layout/Layout';

export default function User() {
    return (
        <Layout>
            <div className="user">
            {/* User detail and update */}

                <div className="userTitleContainer">
                    <motion.h1 
                        initial={{y: -25}}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="userTitle">
                        Edit User
                    </motion.h1>{/* Page title */}
                    <motion.div
                        initial={{y: -25}}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Link to="/newUser">
                            <button className="userAddButton">Create</button>{/* User Create */} 
                        </Link>
                    </motion.div>
                    
                </div>
                <div className="userContainer">
                    <motion.div
                        initial={{y: 30}}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="userShow card"
                    >{/* User's detail */}
                        <div className="userShowTop">
                            <img src="https://images.pexels.com/photos/8992797/pexels-photo-8992797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="userShowImg"/> {/* user profile Image*/}
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Julia Sofia</span>{/* user name*/}
                                <span className="userShowUserTitle">Software Engineer</span>{/* user Job*/} 
                            </div>

                        </div>
                        <div className="userShowBottom">
                            <div className="detailSection">
                                <div>
                                    <span className="userShowTitle">Account Details</span>{/* user info title */}
                                    <div className="userShowInfo">{/* username */}
                                        <PermIdentity className="userShowIcon"/>
                                        <span className="userShowInfoTitle">julia99</span>
                                    </div>
                                    <div className="userShowInfo">{/* birthday */}
                                        <CalendarToday className="userShowIcon"/>
                                        <span className="userShowInfoTitle">26.5.1996</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="userShowTitle">Contact Details</span>{/* user info title */}
                                    <div className="userShowInfo">{/* phone number */}
                                        <PhoneAndroid className="userShowIcon"/>
                                        <span className="userShowInfoTitle">+959 793 421 456</span>
                                    </div>
                                    <div className="userShowInfo">{/* email */}
                                        <EmailOutlined className="userShowIcon"/>
                                        <span className="userShowInfoTitle email">julia99@gmail.com</span>
                                    </div>
                                    <div className="userShowInfo">{/* address */}
                                        <LocationSearching className="userShowIcon"/>
                                        <span className="userShowInfoTitle">Yangon | Myanmar
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="userShowInfo">{/* Social media links */}
                                <div className="userShowSocialContainer"> {/* facebook account link */}
                                    <Facebook className="userShowSocialIcon"/>
                                </div>
                                <div className="userShowSocialContainer">{/* Twitter account link */}
                                    <Twitter className="userShowSocialIcon"/>
                                </div>
                                <div className="userShowSocialContainer">{/* LinkedIn account link */}
                                    <LinkedIn className="userShowSocialIcon"/>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{y: 30}}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="userUpdate card"
                    >{/* User's update */}
                        <div className="userUpdateInner">
                            <span className="userUpdateTitle">Edit</span>
                            <form className="userUpdateForm">
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label>Username</label>
                                        <input type="text" placeholder="julia99" className="userUpdateInput"/>
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Julia Sofia" className="userUpdateInput"/>
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Email</label>
                                        <input type="text" placeholder="julia99@gmail.com" className="userUpdateInput"/>
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Username</label>
                                        <input type="text" placeholder="julia99" className="userUpdateInput"/>
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Birthday</label>
                                        <input type="text" placeholder="26.5.1996" className="userUpdateInput"/>
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Address</label>
                                        <input type="text" placeholder="Yangon | Myanmar" className="userUpdateInput"/>
                                    </div>
                                </div>
                                <div className="userUpdateRight">
                                    <div className="userUpdateUpload">
                                        <img src="https://images.pexels.com/photos/8992797/pexels-photo-8992797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="userUpdateImg"/>
                                        <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                        <input className="userUpdateFileInput" type="file" id="file"/>
                                    </div>
                                    <button className="userUpdateButton">Update</button>
                                </div>

                            </form>
                        </div>

                    </motion.div>
                </div>
            </div>
        </Layout>
        
    )
}
