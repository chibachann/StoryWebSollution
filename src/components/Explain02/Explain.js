import React from "react";
import * as styles from "./Explain.module.css";

const Explain = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <span className={styles.bar}/>
                    <h3>Web制作が初めての方へ</h3>
                    <h2>
                        <span className={styles.marker}>Web制作をご検討中の方は</span> 
                            <br/>
                        <span className={styles.marker}>どうぞ参考になさってください。</span>
                    </h2>
                </div>
                <p className={styles.Text}>
                    ホームページ制作を発注しようとする際、ホームページをリニューアルする際に、
                    何から取り組めばよいか迷うことも多いと思います。
                    Web制作会社ならではの視点を交え、
                    <span>効果的なホームページを作るために必要な発注までのステップや押さえておきたいポイントをご紹介します。</span>
                </p>
                <div className={styles.TextCards}>
                    <p>他のWeb制作会社<br/>との違い・選び方</p>
                    <p>
                        Web制作で失敗しない<br/>ために必要なこと
                    </p>
                    <p>
                        Web制作にかかる<br/>費用の考え方
                        </p>
                    <p>
                        Web制作に関する<br/>よくある質問
                        </p>
                </div>
            </div>
        </section>
    )
}

export default Explain;
