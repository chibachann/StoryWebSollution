import React from 'react';
import * as styles from './demo01.module.css';

const Demo01 = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>

                <div className={styles.Background}>
                    <img src="/images/smoke02.jpg" alt="background" />
                </div>
                <div className={styles.Title}>
                    <h1>
                        Good WebSite <br/>
                        Good Choice
                    </h1>
                    <h2>
                        Webサイトという選択肢を<br/>
                        もっと身近に
                    </h2>
                </div>
                
                
            </div>
        </section>
    );
};

export default Demo01;
