import * as React from 'react';
import * as styles from './Section02.module.css';
import useIntersectionObserver from '../useIntersectionObserver';
import LeftImageRightText from '../LeftImageRightText/LeftImageRightText';


const Section02 = () => {
    const [containerRef, isContainerVisible] = useIntersectionObserver({
        threshold: 0.3,
      });

    return ( 
        <section className={`${styles.section02} ${isContainerVisible ? styles.animate : ""}`} ref={containerRef}>
            <LeftImageRightText
                imageSrc="/images/about.jpg"
                imageAlt="section02-image01"
                subTitle="About Us"
                titleLine1="ビジネスを成功に導く"
                titleLine2="Webソリューション"
                text="Story Web Solutionsは、使いやすく分かりやすいウェブサイトとウェブサービスを制作する会社です。私たちは、ユーザーにとって魅力的で理解しやすいWebページを提供しています。"
            />
            
            
        </section>
        
        
    );
};

export default Section02;
