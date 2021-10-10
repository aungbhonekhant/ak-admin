import {motion} from "framer-motion";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import './widgetLg.css'

export default function WidgetLg() {
    const Button = ({type}) => {
        let cls;
        if (type === "Paid") {
            cls = 'bg-success';
        } else if (type === "Shipped") {
            cls = 'bg-primary';
        } else {
            cls = 'bg-danger';
        }

        return <button className={
            `widgetLgButton ${cls}`
        }>
            {type}</button>
    }
    return (
        <motion.div initial={
                {y: 30}
            }
            animate={
                {y: 0}
            }
            transition={
                {duration: 1}
            }
            className="widgetLg card">
            <h3 className="widgetLgTitle">Recent Orders</h3>
            <div className="table-responsive">
                <TableContainer component={Paper}>
                    <Table
                        aria-label="Recent Orders"
                        className="widgetLgTable"
                    >
                        <TableHead>
                            <TableRow className="widgetLgTr">
                                <TableCell className="widgetLgTh">Customer</TableCell>
                                <TableCell className="widgetLgTh">Date</TableCell>
                                <TableCell className="widgetLgTh amount">Amount</TableCell>
                                <TableCell className="widgetLgTh">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="widgetLgTr"
                            >
                                <TableCell component="th" scope="row" className="widgetLgUser">
                                    <img src="https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg"/>
                                    <span className="widgetLgName">Susan Carol</span>
                                </TableCell>
                                <TableCell align="left" className="widgetLgDate">2 Oct 2021</TableCell>
                                <TableCell align="left" className="widgetLgAmount amount">175000 Kyat</TableCell>
                                <TableCell align="left" className="widgetLgStatus"><Button type="Paid"/></TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="widgetLgTr"
                            >
                                <TableCell component="th" scope="row" className="widgetLgUser">
                                    <img src="https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg"/>
                                    <span className="widgetLgName">Susan Carol</span>
                                </TableCell>
                                <TableCell align="left" className="widgetLgDate">2 Oct 2021</TableCell>
                                <TableCell align="left" className="widgetLgAmount amount">175000 Kyat</TableCell>
                                <TableCell align="left" className="widgetLgStatus"><Button type="Paid"/></TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="widgetLgTr"
                            >
                                <TableCell component="th" scope="row" className="widgetLgUser">
                                    <img src="https://images.pexels.com/photos/2698935/pexels-photo-2698935.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg"/>
                                    <span className="widgetLgName">Susan Carol</span>
                                </TableCell>
                                <TableCell align="left" className="widgetLgDate">2 Oct 2021</TableCell>
                                <TableCell align="left" className="widgetLgAmount amount">175000 Kyat</TableCell>
                                <TableCell align="left" className="widgetLgStatus"><Button type="Paid"/></TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="widgetLgTr"
                            >
                                <TableCell component="th" scope="row" className="widgetLgUser">
                                    <img src="https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg"/>
                                    <span className="widgetLgName">Susan Carol</span>
                                </TableCell>
                                <TableCell align="left" className="widgetLgDate">2 Oct 2021</TableCell>
                                <TableCell align="left" className="widgetLgAmount amount">175000 Kyat</TableCell>
                                <TableCell align="left" className="widgetLgStatus"><Button type="Paid"/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </motion.div>

        
    )
}
