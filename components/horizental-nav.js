import React, { useEffect, useState } from "react";
import axios from "axios";
// import { FormControl, Nav } from "react-bootstrap";
import Link from "next/link";
import styles from "./horizental-nav.module.css";
import {Select, FormControl, InputLabel, MenuItem} from 'react-select';


const HorizentalNav = () => {

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    // ];

    // const [lastPrice, setLastPrice] = useState(0);

    // const fetchData = async () => {
    //     try {
    //         const lastPrice = await axios.get('https://cex.io/api/last_prices/BTC/USD', {
                
    //         });

    //         if (lastPrice.status === 200) {
    //             setLastPrice(lastPrice.data)
    //         } else {
    //             alert('fetching last price data went wrong!!!');
    //         }
    //     } catch (err) {
    //         console.log('err :', err);
    //     }
    // }

    // console.log('lastPrice :', lastPrice);

    // useEffect(() => {
    //     fetchData();
    // }, []);


    return (
        <div>
            <div className={styles.container}>
                <p className={styles.p}>:بازارها</p>
                <br />
                <div className={styles.selects}>

                    <div>
                        <select className={styles.select}>
                            <option disabled selected hidden>USDT</option>
                        </select>
                    </div>

                    <div>
                        <select className={styles.select} style={{right: '30px'}}>
                            <option disabled selected hidden>دلار</option>
                        </select>
                    </div>

                </div>
                
                
                <Link href="#" className={styles.Link}>
                    <div className={styles.button}>ورود/ثبت نام</div>
                </Link>   
                
            </div>


            {/* <div className={styles.emptyNav}></div> */}
        </div>
    )
}

export default HorizentalNav