import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to='/'>
                    <img src="/images/logo.png" alt="Story Web Solutions" />
                </Link>
            </div>
            
            <div className={styles.contact}>
                
                <a 
                    href="https://www.instagram.com/story_web_solutions?igsh=MWdzeWI0bXV3dndsdQ%3D%3D&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    お問い合わせ
                </a>
                
            </div>

           
                
        </header>
    );
}

export default Header;
