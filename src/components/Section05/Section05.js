import * as React from 'react';
import * as styles from './Section05.module.css';
import useIntersectionObserver from '../useIntersectionObserver';

const Section05 = () => {
    const [containerRef, isContainerVisible] = useIntersectionObserver({
        threshold: 0.4,
      });

    return ( 
        <section className={`${styles.section05} ${isContainerVisible ? styles.animate : ""}`} ref={containerRef}>
            <div className={styles.ImageCardArea}>
                <div className={styles.ImageCard}>
                    <div className={styles.ImageCardImage}></div>
                    <div className={styles.ImageCardTextArea}>
                        <div className={styles.ImageCardTitle}>
                            <h2>Story Web Solutions</h2>
                        </div>
                        <div className={styles.ImageCardText}>
                            <p>Story Web Solutions is a web production company that 
                                creates websites and web services that are easy to use 
                                and easy to understand. 
                            </p>
                            </div>
                    </div>
                </div>
                <div className={styles.ImageCard}>
                    <div className={styles.ImageCardImage}></div>
                    <div className={styles.ImageCardTextArea}>
                        <div className={styles.ImageCardTitle}>
                            <h2>Story Web Solutions</h2>
                        </div>
                        <div className={styles.ImageCardText}>
                            <p>Story Web Solutions is a web production company that 
                                creates websites and web services that are easy to use 
                                and easy to understand. 
                            </p>
                            </div>
                    </div>
                </div>
                <div className={styles.ImageCard}>
                    <div className={styles.ImageCardImage}></div>
                    <div className={styles.ImageCardTextArea}>
                        <div className={styles.ImageCardTitle}>
                            <h2>Story Web Solutions</h2>
                        </div>
                        <div className={styles.ImageCardText}>
                            <p>Story Web Solutions is a web production company that 
                                creates websites and web services that are easy to use 
                                and easy to understand. 
                            </p>
                            </div>
                    </div>
                </div>
                <div className={styles.ImageCard}>
                    <div className={styles.ImageCardImage}></div>
                    <div className={styles.ImageCardTextArea}>
                        <div className={styles.ImageCardTitle}>
                            <h2>Story Web Solutions</h2>
                        </div>
                        <div className={styles.ImageCardText}>
                            <p>Story Web Solutions is a web production company that 
                                creates websites and web services that are easy to use 
                                and easy to understand. 
                            </p>
                            </div>
                    </div>
                </div>
                
            </div>
            <div className={styles.TextArea}>
                <div className={styles.SubTitle}>
                    <h2>About Us</h2>
                </div>
                <div className={styles.Title}>
                    <h1>Investigate All Corners of</h1>
                </div>
                <div className={styles.Text}>
                    <p>Story Web Solutions is a web production company that 
                        creates websites and web services that are easy to use 
                        and easy to understand. 
                    </p>
                </div>
            </div>
            
        </section>
    );
};

export default Section05;
