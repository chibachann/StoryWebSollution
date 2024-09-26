import React from "react";
import * as style from "./test.module.css";

const Test = () => {
    const text = ["AAA", "BBB", "CCC"];

    // 表示する要素数を増やす
    const repeatedText = [...text, ...text, ...text, ...text];

    return (
        <div className={style.test}>
            <div className={style.textContainer}>
                <div className={style.slidingText}>
                    {repeatedText.map((item, index) => (
                        <span key={index} className={style.textItem}>
                            {item}
                        </span>
                    ))}
                </div>
                <div className={style.slidingText}>
                    {repeatedText.map((item, index) => (
                        <span key={`clone-${index}`} className={style.textItem}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Test;
