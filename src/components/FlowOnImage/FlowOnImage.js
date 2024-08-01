import React from "react";
import * as styles from "./FlowOnImage.module.css";

const FlowOnImage = ({imageSrc, Title, subTitle}) => {
    return (
        <section 
            className={styles.Section}
            style={{
                backgroundImage: `url(${imageSrc})`
            }}
        >
            
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <h1>{Title}</h1>
                    <h2>{subTitle}</h2>
                </div>
                
            </div>
        </section>
    );
};

export default FlowOnImage;
