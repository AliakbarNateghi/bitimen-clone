import { useState, useEffect } from "react";
import styles from "./graph.module.css";
import axios from "axios";
// import TradingViewWidget, { Themes } from "react-tradingview-widget";
import AdvancedChart from "react-tradingview-embed";
// import { TradeViewChart } from "react-crypto-chart/lib/esm/utils/types";

const Graph = () => {

    const [trending, setTrending] = useState([]);

    const fetchData = async () => {
        try {
            const trendingResult = await axios.get('https://rest.coinapi.io/v1/trades/latest/', {
                headers: {
                    'X-CoinAPI-Key': '0045EFC9-26DF-4D48-A243-2DF5CB91FAD1'
                }    
            });
            if (trendingResult.status === 200) {
                setTrending(trendingResult.data);
            } else {
                alert('sth went wrong!!!');
            }            
        } catch (err) {
            console.log('err :', err);
        }
    } 

    console.log('Trending Result :', trending);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles.container}>

            {/* <p>Graph</p> */}

            {/* <TradingViewWidget 
                symbol="NASDAQ:AAPL"
                theme={Themes.Dark}
                lacale="fr"
                autosize
            /> */}


            <div className={styles.chart}>
                <AdvancedChart widgetProps={{"theme": "dark"}} />
            </div>

            {/* <TradeViewChart pair="BTCBUSD" /> */}

        </div>
    )

}

export default Graph