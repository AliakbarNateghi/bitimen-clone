import React from "react"
import styles from "./buy.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const Buy = () => {

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
                
                <p>فروش بیت کوین</p>
                <br />
                <button onClick={ordinarySaleFunc}>سفارش عادی</button>

                <button onClick={urgentSaleFunc}>سفارش فوری</button>
                <br />
                <p>۰:(IRT)موجودی</p>
                <p>{bestBuyOffer}:بهترین پیشنهاد برای خرید</p>
                <div>
                    <label className={styles.label}>(IRT)قیمت واحد</label>
                    <input type='number' min='0' onChange={(e) => setSingleCost(e.target.value)}/>
                </div>
                <br />
                <div>
                    <label className={styles.label}>(BTC)مقدار</label>
                    <input type='number' min='0' onChange={(e) => setQuantity(e.target.value)}/>
                </div>
                <br />

                <input type='range' defaultValue='0' min='0' max='100'/>

                <br />

                <p>{singleCost*quantity}:(IRT)مبلغ کل سفارش</p>


                <p>{quantity}:(BTC)دریافتی شما</p>


                <p>۰:(BTC)کارمزد</p>

                <br />

                <Link href="#" className={styles.Link}>
                    <div className={styles.button}>وارد شوید</div>
                </Link>   

            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <p>فروش بیت کوین</p>
                <br />
                <button onClick={ordinarySaleFunc}>سفارش عادی</button>

                <button onClick={urgentSaleFunc}>سفارش فوری</button>
                <br />
                <p>۰:(IRT)موجودی</p>
                <p>{bestBuyOffer}:بهترین پیشنهاد برای خرید</p>
                <div>
                    <label className={styles.label}>(IRT)قیمت واحد</label>
                    <input type='number' min='0' placeholder="قیمت بازار" disabled/>
                </div>
                <br />
                <div>
                    <label className={styles.label}>مبلغ کل معامله</label>
                    <input type='number' min='0' onChange={(e) => setQuantity(e.target.value)}/>
                </div>
                <br />

                <input type='range' defaultValue='0' min='0' max='100'/>

                <br />

                <p>{prop*quantity}:(IRT)مبلغ کل سفارش</p>


                <p>{quantity}:(BTC)دریافتی شما</p>


                <p>۰:(BTC)کارمزد</p>

                <br />

                <Link href="#" className={styles.Link}>
                    <div className={styles.button}>وارد شوید</div>
                </Link>   

            </div>
        )
    }

}

export default Buy