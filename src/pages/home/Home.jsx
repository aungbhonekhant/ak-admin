import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import {userData} from '../../dummyDatas';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import Layout from '../../components/layout/Layout';

export default function Home() {
    const dataKey = [
        {key:"This Year", color:"#e7515a"},
        {key:"Last Year", color:"#2196f3"}
    ];

    return (
        //main content start
        <Layout >
            <div className="home">
                <FeaturedInfo/> {/* top featured cards */}

                <Chart data={userData} title="User Analytics" grid dataKey={dataKey}/> {/* User Analytics chart */}

                <div className="homeWidgets">
                    <WidgetSm />
                    <WidgetLg />
                </div>
            </div> 
        </Layout>
        
        //main content end
    )
}
