import './product.css';
import { motion } from "framer-motion";
import Chart from '../../components/chart/Chart';
import { Link } from 'react-router-dom';
import { productData } from '../../dummyDatas';
import { Publish } from '@mui/icons-material';
import Layout from '../../components/layout/Layout';

export default function Product() {

    const dataKey = [
        {key:"Sales", color:"#2196f3"}
    ];
    return (
        <Layout>
            <div className="product">
                <div className="productTitleContainer">
                    <motion.h1
                        initial={{y: -35}}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="productTitle"
                    >
                        Product
                    </motion.h1>
                    <motion.div
                        initial={{y: -25}}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Link to="/newProduct">
                            <button className="productAddButton">Create</button>
                        </Link>
                    </motion.div>
                </div>
                <div className="productTop">
                    <div className="productTopLeft">
                        <Chart data={productData} dataKey={dataKey} name="Sales" height={170} />
                    </div>
                    <motion.div
                        initial={{x: 30}}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }} 
                        className="productTopRight card"
                    >
                        <div className="productInfoTop">
                            <img src="https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="productInfoImg" />
                            <span className="productName">iPhone 13 Pro</span>
                        </div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey">id:</span>
                                <span className="productInfoValue">123</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">sales:</span>
                                <span className="productInfoValue">43123</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">active:</span>
                                <span className="productInfoValue">yes</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">in stock:</span>
                                <span className="productInfoValue">no</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{y: 30}}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}  
                    className="productBottom card"
                >
                    <form className="productForm">
                        <div className="productFormLeft">
                            <label>Product Name</label>
                            <input type="text" placeholder="iPhone 13 Pro"/>
                            <label>in Stock</label>
                            <select name="inStock" id="inStock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <label>in Stock</label>
                            <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img src="https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="productUploadImg" />
                                <label htmlFor="file">
                                    <Publish />
                                </label>
                                <input type="file" id="file" className="productUploadImgInput" />
                            </div>

                            <motion.button 
                                initial={{x: 40, opacity:0}}
                                animate={{
                                    x: 0,
                                    opacity:1
                                }}
                                transition={{ delay: 1, duration: 1 }}
                                className="productButton"
                            >Update</motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </Layout>
        
    )
}
