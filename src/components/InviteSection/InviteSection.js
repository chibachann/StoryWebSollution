import React from "react";
import * as styles from "./InviteSection.module.css";

const InviteSection = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>

                <div className={styles.Background}>
                    <img src="/images/Brick.jpg" alt="background" />
                </div>
                <div className={styles.Title}>
                    <h1>
                        Enjoy Your Web Site
                    </h1>
                    <h2>
                        他社より優れたユーザー体験を
                    </h2>

                    <p>
                        モダンなデザインと使いやすさを兼ね備えたWebサイトを提供いたします。
                        是非、体験してみてください。
                    </p>
                </div>


            </div>
        </section>
    )
}

export default InviteSection;
