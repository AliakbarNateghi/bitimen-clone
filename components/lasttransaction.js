import React, { useState, useEffect, use } from "react";
import styles from "./lasttransaction.module.css";

// var myDate = new Date( your epoch date *1000);
// document.write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());

const LastTransaction = ({ lastTransaction }) => {

    // console.log('lastTransaction :', lastTransaction);

    let myDate = new Date()

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p className={styles.childOne}>بیت کوین/دلار</p>
                <p className={styles.childTwo}>آخرین معاملات</p>
                <table className={styles.smallTable}>
                    <tr>
                        <th>زمان</th>
                        <th>(USD)قیمت واحد</th>
                        <th>(BTC) مقدار</th>
                    </tr>
                </table>
            </div>
            <br /><br />
            <table className={styles.table}>

                {/* <tr>
                    <th>زمان</th>
                    <th>(USD)قیمت واحد</th>
                    <th>(BTC) مقدار</th>
                </tr> */}

                {lastTransaction.map((item) => 
                    <tr>
                        <th>{item.date}</th>
                        <th style={{color: item.type === "sell" ? "red" : "green"}}>{item.price}</th>
                        <th>{item.amount}</th>
                    </tr>
                )}
                
            </table>
        </div>
    )

}

export default LastTransaction
