import * as React from 'react';
import * as styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.Grid}>
                <div className={styles.FooterLogo}>
                    <img src="/images/logo.png" alt="Story Web Solutions" />
                </div>
                <div className={styles.FooterNav}>
                    <ul>
                        <li><a href="/" className={styles.Parent}>ホーム</a></li>
                        <li><a href="/service" className={styles.Parent}>サービス</a></li>
                        <li><a 
                        href="https://www.instagram.com/story_web_solutions?igsh=MWdzeWI0bXV3dndsdQ%3D%3D&utm_source=qr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.Parent}>お問い合わせ</a></li>
                    </ul>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;
