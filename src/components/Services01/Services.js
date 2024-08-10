import React from "react";
import * as styles from "./Services.module.css";

const Services = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <h2>お客様の期待以上のモノを提供し続ける</h2>
                    <h1>大切な人に紹介したくなる<br/>ホームページ制作会社を目指しています</h1>
                </div>
                <div className={styles.Services}>
                    <div className={styles.Service}>
                        <img src="/images/services01/homepage.svg" alt="settings" className={styles.Image}/>
                        <h3>1. ホームページ制作</h3>
                        <p className={styles.Text}>
                            お客様のビジネスに合わせたホームページを制作します。<br/>
                            デザインからコーディングまで一貫して対応し、お客様の要望に応じたホームページを制作します。
                        </p>
                    </div>
                    <div className={styles.Service}>
                        <img src="/images/services01/setting.svg" alt="settings" className={styles.Image}/>
                        <h3>2. ホームページ改修</h3>
                        <p className={styles.Text}>
                            古くなったホームページや、集客につながらないホームページを改修します。<br/>
                            お客様のビジネスに合ったホームページにリニューアルします。
                        </p>
                    </div>
                    <div className={styles.Service}>
                        <img src="/images/services01/picture.svg" alt="settings" className={styles.Image}/>
                        <h3>3. ブログサイト制作</h3>
                        <p className={styles.Text}>
                            お客様の魅力を伝えるブログサイトを制作します。<br/>
                            より信頼されるお店になるためのブログサイト作りをサポートします。
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Services;
