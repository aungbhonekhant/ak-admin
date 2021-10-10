import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { motion } from "framer-motion";

export default function FeaturedInfo() {
    return (
        // top feature card items start
        <div className="featured">
            <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{y: -10}}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="featuredItem"
            >
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney text-warning">200000 Kyat</span>
                    <span className="featuredMoneyRate">
                        -50040 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{y: -10}}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="featuredItem"
            >
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney  text-success">450000 Kyat</span>
                    <span className="featuredMoneyRate">
                        -134040 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </motion.div>

            <motion.div 
                whileHover={{ scale: 1.05 }}
                initial={{y: -10}}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="featuredItem"
            >
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney  text-danger">2500000 Kyat</span>
                    <span className="featuredMoneyRate">
                        +123300 <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </motion.div>
        </div>
        // top feature card items start
    )
}
