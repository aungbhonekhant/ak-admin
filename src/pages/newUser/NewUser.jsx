import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";
import './newUser.css';

export default function NewUser() {
    return (
        <Layout>
            <motion.div
                initial={{scale: 0.8}}
                animate={{
                    scale: 1,
                }}
                transition={{ duration: 1 }}
                className="newUser card"
            > {/* New User Create Page */}
                <h1 className="newUserTitle">New User</h1> {/* page title} */}
                <form className="newUserForm"> {/* create form */}
                    <div className="newUserItem"> 
                        <label>Username</label>
                        <input type="text" placeholder="john" />
                    </div>
                    <div className="newUserItem">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Snow" />
                    </div>
                    <div className="newUserItem">
                        <label>Email</label>
                        <input type="email" placeholder="john@gmail.com" />
                    </div>
                    <div className="newUserItem">
                        <label>Password</label>
                        <input type="password" placeholder="password" />
                    </div>
                    <div className="newUserItem">
                        <label>Phone</label>
                        <input type="text" placeholder="+95 9123 456 789" />
                    </div>
                    <div className="newUserItem">
                        <label>Address</label>
                        <input type="text" placeholder="Yangon | Myanmar" />
                    </div>
                    <div className="newUserItem">
                        <label>Gender</label>
                        <div className="newUserGender">
                            <div>
                                <input type="radio" name="gender" id="male" value="male"/>
                                <label htmlFor="male">Male</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" id="female" value="female"/>
                                <label htmlFor="female">Female</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" id="other" value="other"/>
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>
                    <div className="newUserItem">
                        <label>Active</label>
                        <select className="newUserSelect" name="active" id="active" >
                            <option className="newUserOption" value="yes">Yes</option>
                            <option className="newUserOption" value="no">No</option>
                        </select>
                    </div>
                    <motion.button 
                        initial={{y: 30}}
                        animate={{
                            y: 0,
                        }}
                        transition={{ delay: 1, duration: 1 }}
                        className="newUserButton"
                    >Create</motion.button>
                </form>
            </motion.div>
        </Layout>
        
    )
}
