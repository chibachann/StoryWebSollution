import React from "react";
import * as styles from "./ServiceSection.module.css";

const ServiceSection = () => {
    return (
        <section className={styles.Section}>
                <div className={styles.Grid}>
                    <h1 className={styles.Title}>
                        Service
                    </h1>
                    <p>
                        私たちは企業理念として、信頼できるWebサイトを世の中に増やしていくことを心掛けています。
                        お客様がよりWebサイトを手軽に依頼できるよう、低価格、高品質をモットーにWebサイト制作を行っています。
                        価格を超えるデザインとSEO対策を中心とした 運用サポートによってビジネスを加速させるお手伝いをいたします。
                         マーケティングなど各種プロモーションを通して、より付加価値の高いWebサービスを提供していきます。
                    </p>
                </div>
               
               
               <div className={styles.Container}>
                    <div className={styles.Card}>
                        <img src="/images/seisaku.jpg" alt="icon" />
                        <h2>Webページ制作</h2>
                        <p>
                            お客様のビジネスに合わせたWebページを制作いたします。
                            デザイン、SEO対策などの基本的なサービスから、地域に特化した
                            マーケティング戦略である地域SEO対策まで幅広く対応いたします。
                        </p>
                    </div>
                    <div className={styles.Card}>
                        <img src="/images/sabsuku.jpg" alt="icon" />
                        <h2>サブスク型Webページ制作</h2>
                        <p>
                            より手軽にWebページを運用したいお客様に向けたサービスです。
                            月額制でWebページを運用することができ、希望に合わせたカスタマイズも可能です。
                            インターネット上のみでの手続きで完結するため、お客様の負担を軽減いたします。
                            是非一度、ご検討ください。
                        </p>
                    </div>
               </div>

               <div className={styles.Grid}>
                    <h1 className={styles.Title}>
                        Production Flow
                    </h1>
                    <h2 className={styles.SubTitle}>
                        Webページ制作の流れ
                    </h2>
                    <div className={styles.FlowContainer}>
                        <div className={styles.FlowCard}>
                            <img src="/images/toi.jpg" alt="icon" />
                            <div className={styles.FlowText}>
                                <h3>
                                    お問い合わせ
                                </h3>
                                <p>
                                    お問い合わせフォームに必要事項を入力していただき、送信してください。
                                </p>
                            </div>
                        </div>
                        <div className={styles.FlowCard}>
                            <img src="/images/mitu.jpg" alt="icon" />
                            <div className={styles.FlowText}>
                                <h3>
                                    お見積り、デザイン提案
                                </h3>
                                <p>
                                    お見積りに合わせてデザイン提案を行います。
                                </p>
                            </div>
                        </div>
                        <div className={styles.FlowCard}>
                            <img src="/images/kaihatu.jpg" alt="icon" />
                            <div className={styles.FlowText}>
                                <h3>
                                    制作、開発
                                </h3>
                                <p>
                                    デザイン提案を元にWebページを制作いたします。
                                </p>
                            </div>
                        </div>
                        <div className={styles.FlowCard}>
                            <img src="/images/nouhin.jpg" alt="icon" />
                            <div className={styles.FlowText}>
                                <h3>
                                    納品
                                </h3>
                                <p>
                                    制作したWebページを納品いたします。
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className={styles.SubTitle}>
                        サブスク型<br/>
                        Webページ制作の流れ
                    </h2>
                    <div className={styles.FlowContainer}>
                        <div className={styles.FlowCard}>
                            <img src="/images/sentaku.jpg" alt="icon" />
                            <div className={styles.FlowText}>
                                <h3>
                                    プラン選択
                                </h3>
                                <p>
                                    お好きなプランを選択してください。デザイン提案はプランによって異なります。
                                </p>
                            </div>
                        </div>
                        <div className={styles.FlowCard}>
                            <img src="/images/siharai.jpg" alt="icon" />
                            <div className={styles.FlowText}>
                                <h3>
                                    お支払い
                                </h3>
                                <p>
                                    プランを選択した後、お支払いをお願いいたします。
                                    お支払いが確認でき次第、制作を開始いたします。
                                </p>
                            </div>
                        </div>
                        <div className={styles.FlowCard}>
                            <img src="/images/unyou.jpg" alt="icon" />
                            <div className={styles.FlowText}>
                                <h3>
                                    運用
                                </h3>
                                <p>
                                    Webページの運用を開始いたします。運用に関するご相談もお気軽にどうぞ。
                                </p>
                            </div>
                        </div>
                      
                    </div>
               </div>
        </section>
    );
}

export default ServiceSection;
