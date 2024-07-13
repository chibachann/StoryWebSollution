import * as React from 'react';
import * as styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.Logo}>
                <h1>Story Web Solutions</h1>
            </div>
            <div className={styles.FooterMenu}>
                <h2>Menu</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Service</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className={styles.SNS}>
                <h2>SNS</h2>
                <ul>
                    <li><a href="/">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
