import React from "react"
import styles from "./buy.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const Buy = ({prop}) => {

    const [ordinarySale, setOrdinarySale] = useState(true);
    const [bestBuyOffer, setBestBuyOffer] = useState(0);
    const [singleCost, setSingleCost] = useState(0);
    const [quantity, setQuantity] = useState(0);

    // supposed to get data from API 
    const fetchData = async () => {

    }

    useEffect(() => {
        fetchData();
    }, []);

    const ordinarySaleFunc = () => {
        setOrdinarySale(true);
        setQuantity(0);
    }

    const urgentSaleFunc = () => {
        setOrdinarySale(false);
        setQuantity(0);
    }

    if (ordinarySale === true) {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.ph}>فروش بیت کوین</p>
                </div>
                
                <button style={{backgroundColor: ordinarySale === true ? '#999900' : '#ffff00',
                                border: ordinarySale === true ? '#999900' : '#ffff00' }} 
                                className={styles.button} 
                                onClick={ordinarySaleFunc}>سفارش عادی</button>

                <button style={{backgroundColor: ordinarySale === true ? '#ffff00' : '#999900', 
                                border: ordinarySale === true ? '#999900' : '#ffff00'}} 
                                className={styles.button} 
                                onClick={urgentSaleFunc}>سفارش فوری</button>

                <br />

                <p className={styles.p}>۰:(USD)موجودی</p>
                <p className={styles.p}>{bestBuyOffer}:بهترین پیشنهاد برای خرید</p>
                
                <div className={styles.parentInput}>
                    <input className={styles.childInput} type='number' min='0' onChange={(e) => setSingleCost(e.target.value)}/>
                    <label className={styles.label}>(USD)قیمت واحد</label>
                </div>
                <br /><br /><br />
                <div className={styles.parentInput}>
                    <input className={styles.childInput} type='number' min='0' onChange={(e) => setQuantity(e.target.value)}/>
                    <label className={styles.label}>(BTC)مقدار</label>
                </div>
                <br />

                <input type='range' defaultValue='0' min='0' max='100'/>

                <br />

                <p className={styles.p}>{singleCost*quantity}:(IRT)مبلغ کل سفارش</p>


                <p className={styles.p}>{quantity}:(BTC)دریافتی شما</p>


                <p className={styles.p}>۰:(BTC)کارمزد</p>


                <Link href="#" className={styles.Link}>
                    <button className={styles.loginButton}>وارد شوید</button>
                </Link>   

            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.ph}>فروش بیت کوین</p>
                </div>

                <button style={{backgroundColor: ordinarySale === true ? '#999900' : '#ffff00',
                                border: ordinarySale === true ? '#999900' : '#ffff00' }} 
                                className={styles.button} 
                                onClick={ordinarySaleFunc}>سفارش عادی</button>

                <button style={{backgroundColor: ordinarySale === true ? '#ffff00' : '#999900', 
                                border: ordinarySale === true ? '#999900' : '#ffff00'}} 
                                className={styles.button} 
                                onClick={urgentSaleFunc}>سفارش فوری</button>

                <br />

                <p className={styles.p}>۰:(USD)موجودی</p>
                <p className={styles.p}>{bestBuyOffer}:بهترین پیشنهاد برای خرید</p>
                <div className={styles.parentInput}>
                    <input className={styles.childInput} type='number' min='0' placeholder="قیمت بازار" disabled/>
                    <label className={styles.label}>(USD)قیمت واحد</label>
                </div>
                <br /><br /><br />
                <div className={styles.parentInput}>
                    <input className={styles.childInput} type='number' min='0' onChange={(e) => setQuantity(e.target.value)}/>
                    <label className={styles.label}>مبلغ کل معامله</label>
                </div>
                <br />

                <input type='range' defaultValue='0' min='0' max='100'/>

                <br />

                <p className={styles.p}>{prop*quantity}:(IRT)مبلغ کل سفارش</p>


                <p className={styles.p}>{quantity}:(BTC)دریافتی شما</p>


                <p className={styles.p}>۰:(BTC)کارمزد</p>


                <Link href="#" className={styles.Link}>
                    <button className={styles.loginButton}>وارد شوید</button>
                </Link>   

            </div>
        )
    }

}

Buy.defaultProps = {
    prop : 0
}

export default Buy