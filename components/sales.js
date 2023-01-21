import React from "react";
import styles from "./sales.module.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const Sales = ({ lastTransaction }) => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <table className={styles.smallTable}>
                    <tr>
                        <th>(USD)مبلغ کل</th>
                        <th>(USD)قیمت واحد</th>
                        <th>(BTC) مقدار</th>
                    </tr>
                </table>
            </div>

            <table className={styles.table}>
                

                {lastTransaction.map((item) => item.type === "sell" ?
                    <tr>
                        <th>{item.price*item.amount}</th>
                        <th style={{color: "red"}}>{item.price}</th>
                        <th>{item.amount}</th>
                    </tr>
                : "")}
                
            </table>

        </div>
    )

}

export default Sales