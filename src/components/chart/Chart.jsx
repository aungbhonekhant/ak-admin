import "./chart.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive'

export default function Chart({title, data, dataKey, grid, height}) {
    const isMobile = useMediaQuery({ query: '(max-width: 725px)' })
    return (
        <motion.div 
            initial={{x: 30}}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="chart card"
        >
            <h3 className="chartTitle">{ title }</h3>
            <ResponsiveContainer width="90%" aspect={isMobile ? 4 / 3 : 4 / 1}>
                <LineChart
                    data={data}
                    width={500}
                    height={300}
                >
                    <XAxis dataKey="name" stroke="#888ea8"/>
                    <YAxis stroke="#888ea8"/>
                    <Tooltip />
                    <Legend />
                    {grid && <CartesianGrid stroke="#888ea83b" strokeDasharray="5 5"/>}
                    {   
                        Array.isArray(dataKey) ? 
                        dataKey.map(data => 
                            <Line type="monotone" dataKey={data.key} strokeWidth={2} stroke={data.color}/>
                        )
                        : 
                        <Line type="monotone" dataKey={dataKey} strokeWidth={2} />
                    }
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    )
}
