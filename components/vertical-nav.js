import React from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import styles from "./vertical-nav.module.css";
import mainLogo from "../assets/images/main-logo.png";
import dashboard from "../assets/images/dashboard.png";
import wallet from "../assets/images/wallet.png";
import basket from "../assets/images/basket.png";
import contact from "../assets/images/contact.png";
import contactplus from "../assets/images/contactplus.png";
import hours from "../assets/images/24hours.png";
import shield from "../assets/images/shield.png";
import Image from "next/image";

const VerticalNav = () => {
     return (
        <>
    
            <Nav className={styles.container}>

                <br /><br />
                <Nav.Item>
                    <Nav.Link href="#">
                        <Image 
                            src={ mainLogo }
                            alt="bitimen logo"
                            height={85} />
                    </Nav.Link>
                </Nav.Item>
                <br /><br /><br /><br /><br />
                <Nav.Link href="#">
                    <Nav.Item className={styles.button}>
                        <Image 
                            className={styles.sublogo}
                            src={ dashboard }
                            alt="dashboard"
                            height={25} />
                    </Nav.Item>
                </Nav.Link>
                <br /><br />
                <Nav.Link href="#">
                    <Nav.Item className={styles.button}>
                        <Image 
                            className={styles.sublogo}
                            src={ wallet }
                            alt="wallet"
                            height={25} />
                    </Nav.Item>
                </Nav.Link>
                <br /><br />
                <Nav.Link href="#">
                    <Nav.Item className={styles.button}>
                        <Image 
                            className={styles.sublogo}
                            src={ basket }
                            alt="basket"
                            height={25} />
                    </Nav.Item>
                </Nav.Link>
                <br /><br />
                <Nav.Link href="#">
                    <Nav.Item className={styles.button}>
                        <Image 
                            className={styles.sublogo}
                            src={ contact }
                            alt="contact"
                            height={25} />
                    </Nav.Item>
                </Nav.Link>
                <br /><br />
                <Nav.Link href="#">
                    <Nav.Item className={styles.button}>
                        <Image 
                            className={styles.sublogo}
                            src={ contactplus }
                            alt="contactpluss"
                            height={25} />
                    </Nav.Item>
                </Nav.Link>
                <br /><br />
                <Nav.Link href="#">
                    <Nav.Item className={styles.button}>
                        <Image 
                            className={styles.sublogo}
                            src={ hours }
                            alt="hours"
                            height={25} />
                    </Nav.Item>
                </Nav.Link>
                <br /><br />
                <Nav.Link href="#">
                    <Nav.Item className={styles.button}>
                        <Image 
                            className={styles.sublogo}
                            src={ shield }
                            alt="shield"
                            height={25} />
                    </Nav.Item>
                </Nav.Link>
                <br /><br />

            </Nav>
          
        </>
    );
}

export default VerticalNav