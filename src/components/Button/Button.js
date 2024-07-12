import * as React from 'react';
import * as styles from './Button.module.css';



const Button = ({ 
    text="ボタン",
    color="#FAFAFA",
    to = "/", 
    width = "12vw", 
    height="3vw",
    fontSize="1.2vw",
    fontWeight="500",
    borderRadius="2vw",
    border="0.2vw solid #FAFAFA",
    backgroundColor="#ff7125"
}) => {
    return (
        <div 
            className={styles.Button} 
            style={{
                color: color,
                width: width,
                height: height,
                fontSize: fontSize,
                fontWeight: fontWeight,
                borderRadius: borderRadius,
                border: border,
                backgroundColor: backgroundColor
            }}
            >
            <a href={to}>{text}</a>
        </div>
    );
}

export default Button;
