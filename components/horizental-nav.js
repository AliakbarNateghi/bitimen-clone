import React from "react";
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


    return (
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
                        <option disabled selected hidden>تومان</option>
                    </select>
                </div>

            </div>
            
            
            <Link href="#" className={styles.Link}>
                <div className={styles.button}>ورود/ثبت نام</div>
            </Link>   
            
        </div>
    )
}

export default HorizentalNav