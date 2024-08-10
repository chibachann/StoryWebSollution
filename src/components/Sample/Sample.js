import React from "react";
import * as styles from "./Sample.module.css";

const Sample = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <h1>SAMPLE</h1>
                    <h2>完成後のイメージ</h2>
                </div>
            </div>
        </section>
    );
}

export default Sample;
