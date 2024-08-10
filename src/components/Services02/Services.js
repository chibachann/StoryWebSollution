import React from "react";
import * as styles from "./Services.module.css";

const Services = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <h1>SERVICES</h1>
                </div>
                <div className={styles.Text}>
                    <p>
                        お客様に誠実に。Webサイトに情熱を。<br/>
                        お客様の満足よりも更に高い位置の喜びを感じて頂けるホームページ制作を目指します。
                        <span>価格を超えるデザインとSEO対策</span>を中心とした
                            運用サポートによってビジネスを加速させるお手伝いをいたします。
                        マーケティングなど各種プロモーションを通して、より付加価値の高いWebサービスを提供していきます。
                        <span>お客様の課題に取り組み、目に見える成果を生み出しています。</span>
                    </p>
                </div>
                <div className={styles.Services}>
                    
                    <div className={styles.Service}>
                        <h2>PRODUCTION</h2>
                        <img src="/images/services02/01.svg" alt="01"/>
                        <h3>新規製作・リニューアル</h3>
                        <p>作成するホームページは、スマートフォン対応のレスポンシブデザインが
                            標準仕様なので追加費用が発生しません。
                        </p>
                    </div>
                    <div className={styles.Service}>
                        <h2>DEVELOPMENT</h2>
                        <img src="/images/services02/02.svg" alt="02"/>
                        <h3>CMSの設置・カスタマイズ</h3>
                        <p>
                            お客様のご要望に合わせたカスタマイズ機能をご提供することも可能ですので、
                            ご希望の方はお気軽にご相談ください。
                        </p>
                    </div>
                    <div className={styles.Service}>
                        <h2>MANAGEMENT</h2>
                        <img src="/images/services02/03.svg" alt="03"/>
                        <h3>リスティング・SEO対策</h3>
                        <p>
                            検索広告やSNS広告などリスティング広告の活用、
                            検索エンジン対策（SEO）、Googleマップ対策（ローカルSEO）などの
                            ご提案・運営代行が可能です。
                        </p>
                    </div>
                    <div className={styles.Service}>
                        <h2>
                            CUSTOMERS
                        </h2>
                        <img src="/images/services02/04.svg" alt="04"/>
                        <h3>
                            Webサイト保守・運営
                        </h3>
                        <p>
                            ホームページ納品後の運用もしっかりとサポートし、コンテンツの更新・変更依頼、
                            集客等のアドバイスも相談できます。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
