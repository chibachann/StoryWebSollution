import * as React from 'react';
import * as styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href='/'><h1>Story Web Solutions</h1></a>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Service</a></li>
                    <li><a href="/">Catalog</a></li>
                </ul>
            </nav>
            <div className={styles.contact}>
                <div className={styles.contactButton}>
                    <a href="/">お問い合わせ</a>
                </div>
            </div>

            <div className={styles.hamburgerArea}>
                <div className={styles.hamburger}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
                
        </header>
    );
}

export default Header;
