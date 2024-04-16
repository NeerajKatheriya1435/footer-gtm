import React from 'react'
import styles from "../footer/Gtmfooter.module.css"
import gtmLogo from "../img/gtmLogo.png"

const GtmFooter = () => {
    return (
        <main>
            <div className={styles.divSvg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity={1} d="M0,96L40,122.7C80,149,160,203,240,202.7C320,203,400,149,480,128C560,107,640,117,720,144C800,171,880,213,960,202.7C1040,192,1120,128,1200,117.3C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" /></svg>

            </div>
            <div className={styles.mainContainer}>
                <div className={`${styles.footerBox} ${styles.imageBox}`}>
                    <img className={styles.img} src={gtmLogo} alt="Error Loading" />
                </div>
                <div className={styles.footerBox}>
                    <h2 className={styles.footerService}>Services</h2>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; Point of Sale</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; ERP</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; E-Commerce Website builder</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; Point of Sale</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; Delevery as A Service</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; Search Engine optimization</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; Social Media Marketing</a>
                </div>
                <div className={`${styles.footerBox} ${styles.secondBox}`}>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; Pharmacy Management</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; Responsive Website</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; App Development</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; Dynamic Website</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; Lead Generation</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; Graphic Design</a>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; Social media marketing</a>
                </div>
                <div className={`${styles.footerBox} ${styles.thirdBox}`}>
                    <h2 className={styles.footerService}>Contact Info</h2>
                    <p className={styles.footerAnchor}>&gt;&gt; Mon - Sat 9:30 AM - 6:00 PM</p>
                    <p className={styles.footerAnchor}>&gt;&gt; +919319791129</p>
                    <a className={styles.footerAnchor} href='/'>&gt;&gt; besure@GoodTechMind.com</a>
                    <p className={styles.footerAnchor}>&gt;&gt; Piboco Complex, Punj Sons</p>
                    <p className={styles.footerAnchor}>&gt;&gt; 1, First Floor,Mandira Apartment, Duck Banglo, CKC Road, Sector G, Barsat, Kolkata, West Bengal 700124</p>
                    <div className={styles.icons}>
                        <img src="https://w7.pngwing.com/pngs/421/879/png-transparent-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf-media-thumbnail.png" alt="" />
                        <img src="https://img.freepik.com/premium-psd/3d-square-with-facebook-logo_901970-2.jpg" alt="" />
                        <img src="https://i.pinimg.com/736x/24/37/73/2437730f7e3a5705e205e67fa2cd1020.jpg" alt="" />
                        <img src="https://w7.pngwing.com/pngs/936/468/png-transparent-youtube-logo-youtube-logo-computer-icons-subscribe-angle-rectangle-airplane-thumbnail.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                <div className={styles.horizontalLine}></div>
                <div className={styles.floatDiv}>
                    <p className={`${styles.leftPara} ${styles.bothPara}`}>@copyright 2024 by GoodTechMind</p>
                    <p className={`${styles.rightPara} ${styles.bothPara}`}>Terms and condition privacy policy</p>
                </div>
            </div>
        </main>
    )
}

export default GtmFooter