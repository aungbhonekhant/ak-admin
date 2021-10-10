import './userList.css';
import {DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import {userRows} from '../../dummyDatas';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { motion } from "framer-motion";
import Layout from '../../components/layout/Layout';
import { useMediaQuery } from 'react-responsive';

export default function UserList() {
    const [data, setData] = useState(userRows);
    const md = useMediaQuery({ query: '(max-width: 1224px)' })
    const s = useMediaQuery({ query: '(max-width: 991px)' })
    const xs = useMediaQuery({ query: '(max-width: 725px)' })
    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id));
    }
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: md ? 50 : 90
        },
        {
            field: 'username',
            headerName: 'User',
            width: xs ? 150 : s ? 170 : md ? 200 : 300,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={
                                params.row.avatar
                            }
                            alt=""
                            className="userListImg"/> {
                        params.row.username
                    } </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: xs ? 150 : s ? 170 : md ? 200 : 250,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: xs ? 70 : s ? 90 : md ? 100 : 120,
        }, {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: xs ? 130 : s ? 150 : md ? 180 : 200,
        }, {
            field: 'action',
            headerName: 'Action',
            width: xs ? 130 : s ? 150 : md ? 180 : 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={
                            `/user/${
                                params.row.id
                            }`
                        }>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete text-danger" onClick={() =>  handleDelete(params.row.id)}/>
                    </>

                )
            }
        },
    ];
    return (
        <Layout>
            <div className="userList">
                <div className="userListTitleContainer">
                    <motion.h1
                        initial={{y: -35}}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="userListTitle"
                    >
                        User List
                    </motion.h1>{/* Page title */}
                    <motion.div
                        initial={{y: -25}}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Link to="/newUser">
                            <button  className="userAddButton">Create</button>{/* User Create */} 
                        </Link>
                    </motion.div>
                    
                    
                </div>
                <motion.div
                    initial={{y: 30}}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                    className="userListShow"
                >
                    <DataGrid rows={data}
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
