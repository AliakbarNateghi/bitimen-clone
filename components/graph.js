import React,{ useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./graph.module.css";
import axios from "axios";
// import TradingViewWidget, { Themes } from "react-tradingview-widget";
// import {AdvancedChart} from "react-tradingview-embed";
// import {TradeViewChart} from "react-crypto-chart";
// import { TradeViewChart } from "react-crypto-chart/lib/esm/utils/types";
const TradingViewWidget = dynamic(() => {
    return import("react-tradingview-widget");
    },
    {ssr: false}
)

const {AdvancedChart} = dynamic(() => {
    return import("react-tradingview-embed");
    },
    {ssr: false}
)

// const TradeViewChart = dynamic(() => {
//     return import("react-crypto-chart");
//     },
//     {ssr: false}
// )

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

            <TradingViewWidget 
                symbol="BITSTAMP:BTCUSD"
                // theme={Themes.Dark}
                lacale="fr"
                autosize
            />


            {/* <AdvancedChart widgetProps={{"theme": "dark"}} /> */}

            {/* <TradeViewChart pair="BTCBUSD" /> */}

        </div>
    )

}

export default Graph

// TradingViewWidget.js

// import React, { useEffect, useRef } from 'react';

// let tvScriptLoadingPromise;

// export default function TradingViewWidget() {
//   const onLoadScriptRef = useRef();

//   useEffect(
//     () => {
//       onLoadScriptRef.current = createWidget;

//       if (!tvScriptLoadingPromise) {
//         tvScriptLoadingPromise = new Promise((resolve) => {
//           const script = document.createElement('script');
//           script.id = 'tradingview-widget-loading-script';
//           script.src = 'https://s3.tradingview.com/tv.js';
//           script.type = 'text/javascript';
//           script.onload = resolve;

//           document.head.appendChild(script);
//         });
//       }

//       tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

//       return () => onLoadScriptRef.current = null;

//       function createWidget() {
//         if (document.getElementById('tradingview_04732') && 'TradingView' in window) {
//           new window.TradingView.widget({
//             autosize: true,
//             symbol: "BITSTAMP:BTCUSD",
//             interval: "D",
//             timezone: "Etc/UTC",
//             theme: "dark",
//             style: "1",
//             locale: "en",
//             toolbar_bg: "#f1f3f6",
//             enable_publishing: false,
//             allow_symbol_change: true,
//             container_id: "tradingview_04732"
//           });
//         }
//       }
//     },
//     []
//   );

//   return (
//     <div className='tradingview-widget-container'>
//       <div id='tradingview_04732' />
//       <div className="tradingview-widget-copyright">
//         <a href="https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span className="blue-text">Bitcoin chart</span></a> by TradingView
//       </div>
//     </div>
//   );
// }
