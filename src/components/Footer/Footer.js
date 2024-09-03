import * as React from 'react';
import * as styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.Logo}>
                <img src="/images/logo.png" alt="logo" />
            </div>
        </footer>
    );
}

export default Footer;
