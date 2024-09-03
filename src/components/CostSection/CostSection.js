import React from "react";
import * as styles from "./CostSection.module.css";

const CostSection = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>

                <div className={styles.Background}>
                    <img src="/images/dairi.jpg" alt="background" />
                </div>
                <div className={styles.Title}>
                    <h1>
                        Cost
                    </h1>
                    <h2>
                        月額5000円からのWebサイト制作
                    </h2>

                    <p>
                        より多くの方にWebサイトを持つ体験をしていただくため、月額5000円からのWebサイト制作を行っています。
                        詳しくは料金ページをご覧ください。
                    </p>
                </div>
                


            </div>
        </section>
    )
}

export default CostSection;
