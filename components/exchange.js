import React, { useEffect, useState } from "react";
import styles from "./exchange.module.css";
import axios from "axios";
import Image from "next/image";
import USD from "../assets/images/united-states.png";
import bitcoin from "../assets/images/bitcoin.png";

const Exchange = ({ exchange }) => {

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <div className={styles.usd}>
                    <Image
                        src={ USD }
                        alt="USD"
                        height={70}
                    />
                    <p className={styles.p}>دلار</p>
                </div>

                <span className={styles.span}>&#8646;</span>

                <div className={styles.bitcoin}>
                    <Image 
                        src={ bitcoin }
                        alt="bitcoin"
                        height={70}
                    />
                    <p className={styles.p}>بیت کوین</p>
                </div>
            </div>

            <div className={styles.lastPrice}>
                <p className={styles.p}>{exchange.map((item) => item.symbol1 === "BTC" && item.symbol2 === "USD" ? item.lprice : '')} $</p>
            </div>
            
        </div>
    )

}

export default Exchange