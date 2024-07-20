import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to='/'><h1>Story Web Solutions</h1></Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                </ul>
            </nav>
            <div className={styles.contact}>
                <div className={styles.contactButton}>
                    <a 
                        href="https://www.instagram.com/story_web_solutions?igsh=MWdzeWI0bXV3dndsdQ%3D%3D&utm_source=qr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        お問い合わせ
                    </a>
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
