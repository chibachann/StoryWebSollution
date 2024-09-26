import * as React from 'react';
import * as styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.Header}>
            <img src="/logo/whiteWidelogo.svg" alt="logo" className={styles.Logo}/>
            
        </header>
    );
}

export default Header;
