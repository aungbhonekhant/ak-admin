import "./newProduct.css";
import { motion } from "framer-motion";
import Layout from "../../components/layout/Layout";

export default function NewProduct() {
    return (
        <Layout>
            <motion.div 
                initial={{scale: 0.8}}
                animate={{
                    scale: 1,
                }}
                transition={{ duration: 1 }}
                className="newProduct card"
            >
                <h1 className="addProductTitle">New Product</h1>
                <form className="addProductForm">
                    <div className="addProductItem">
                        <label>Image</label>
                        <input type="file" className="addProductImg" name="" id="file" />
                    </div>
                    <div className="addProductItem">
                        <label>Name</label>
                        <input type="text" className="addProductInput" placeholder="iPhone 13 Pro" />
                    </div>
                    <div className="addProductItem">
                        <label>Stock</label>
                        <input type="text" className="addProductInput" placeholder="123" />
                    </div>
                    <div className="addProductItem">
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button className="addProductButton">Create</button>
                </form>
            </motion.div>
        </Layout>
        
    )
}
