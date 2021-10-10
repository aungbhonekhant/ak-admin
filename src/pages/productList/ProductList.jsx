import './productList.css';
import {DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import {productRows} from '../../dummyDatas';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { motion } from "framer-motion";
import Layout from '../../components/layout/Layout';
import { useMediaQuery } from 'react-responsive';

export default function ProductList() {
    const [products, setProducts] = useState(productRows);
    const md = useMediaQuery({ query: '(max-width: 1224px)' })
    const s = useMediaQuery({ query: '(max-width: 991px)' })
    const xs = useMediaQuery({ query: '(max-width: 725px)' })
    const handleDelete = (id) => {
        setProducts(products.filter(item=>item.id !== id));
    }
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: md ? 50 : 90
        },
        {
            field: 'product',
            headerName: 'Product',
            width: xs ? 150 : s ? 170 : md ? 200 : 300,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img src={
                                params.row.img
                            }
                            alt=""
                            className="productListImg"/> {
                        params.row.name
                    } </div>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: xs ? 70 : s ? 90 : md ? 100 : 120,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: xs ? 70 : s ? 90 : md ? 100 : 120,
        }, {
            field: 'price',
            headerName: 'Price',
            width:  xs ? 130 : s ? 150 : md ? 180 : 200,
        }, {
            field: 'action',
            headerName: 'Action',
            width: xs ? 130 : s ? 150 : md ? 180 : 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={
                            `/product/${
                                params.row.id
                            }`
                        }>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete text-danger" onClick={() =>  handleDelete(params.row.id)}/>
                    </>

                )
            }
        },
    ];
    return (
        <Layout>
            <div className="productList"> {/* Product list show Page */}
                <div className="productListTitleContainer">
                    <motion.h1
                        initial={{y: -35}}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="productListTitle"
                    >
                        Product List
                    </motion.h1>{/* Page title */}
                    <motion.div
                        initial={{y: -25}}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Link to="/newProduct">
                            <button  className="productAddButton">Create</button>{/* User Create */} 
                        </Link>
                    </motion.div>
                    
                    
                </div>
                <motion.div
                    initial={{y: 30}}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                    className="productListShow"
                >
                    {/* product list table*/}
                    <DataGrid rows={products}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={
                                [10]
                            }
                            checkboxSelection
                            disableSelectionOnClick
                        />
                </motion.div>
            </div>
        </Layout>
        
    )
}
