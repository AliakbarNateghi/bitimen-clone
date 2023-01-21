import React from "react";
import styles from "./purchases.module.css";

const Purchases = ({ lastTransaction, exchange }) => {

    return (
        <div className={styles.container}>
            <table className={styles.table}>

                <div className={styles.title}>
                    <p className={styles.child}>{exchange.map((item) => item.symbol1 === "BTC" && item.symbol2 === "USD" ? item.lprice : '')} : قیمت آخرین معامله</p>
                </div>
                <br /><br />

                {lastTransaction.map((item) => item.type === "buy" ?
                    <tr>
                        <th>{item.price*item.amount}</th>
                        <th style={{color: "green"}}>{item.price}</th>
                        <th>{item.amount}</th>
                    </tr>
                : "")}
                
            </table>
        </div>
    )

}

export default Purchases