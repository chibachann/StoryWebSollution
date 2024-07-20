import * as React from 'react';
import * as styles from './LeftImageRightText.module.css';

const LeftImageRightText = ({ 
  imageSrc, 
  imageAlt, 
  subTitle, 
  titleLine1, 
  titleLine2, 
  text,
}) => {
  return (
    <div className={styles.LeftImageRightTextConteiner}>
      <div className={styles.ImageArea}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className={styles.TextArea}>
        <div className={styles.SubTitle}>
          <h2>{subTitle}</h2>
        </div>
        <div className={styles.Title}>
          <h1>{titleLine1}<br/>{titleLine2}</h1>
        </div>
        <div className={styles.Text}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftImageRightText;
