import * as React from 'react';
import * as styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.FooterContainer}>
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
                        <li><a 
                            href="https://www.instagram.com/story_web_solutions?igsh=MWdzeWI0bXV3dndsdQ%3D%3D&utm_source=qr" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >Instagram</a></li>
                    </ul>
                </div>
                <div className={styles.CopyRight}>
                    <p>2024 Story Web Solutions</p>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;
