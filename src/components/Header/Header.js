import * as React from 'react';
import * as styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Logo}>
                <img src="/images/logo.png" alt="logo" />
            </div>
            <div></div>
            <div className={styles.Menu}>
                <p>MENU</p>
            </div>
        </header>
    );
}

export default Header;
