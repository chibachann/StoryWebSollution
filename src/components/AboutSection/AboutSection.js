import React from "react";
import * as styles from "./AboutSection.module.css"

const AboutSection = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <img className={styles.Background} src="/images/kaku01.jpg" alt="background" />
                <div className={styles.Box1}>
                
                    <h1>これからのWebサイトは<br/>
                        信頼と安心を
                    </h1>
                    <img className={styles.Icon} src="/images/01.jpg" alt="background" />
                    <p>
                        「宣伝のために」<br/>
                        「情報を発信するために」<br/>
                        「商品を売るために」<br/><br/>
                        今までWebサイトを作るという選択肢は、こういった目的で使われることが多くありました。
                        しかし、SNSの普及によって<br/>
                        「宣伝のためならSNSのほうがいいよね」<br/>
                        「Webサイトは古いよね」<br/>
                        そういった声が聞こえてきます。<br/><br/>

                        ですが、実際のお客様の声を聞いてみると、 <br/>
                        「SNSだけだと信頼できない」<br/>
                        「メニューとか商品の情報はWebサイトで見たい」
                        という声が多くあります。<br/><br/>

                        今の時代、Webサイトは「信頼と安心」を提供するためのものとして
                        これまで以上に重要な役割を担っています。<br/><br/>

                        私たちはより信頼できる情報を<br/>
                        皆様に発信できるようにするために<br/>
                        低価格、高品質をモットーにWebサイト制作を行っています。<br/><br/>
                    </p>
                </div>
            </div>
            
        </section>
    )
}

export default AboutSection;
