import React from 'react'
import "../footer/Gtmfooter.css"
const GtmFooter = () => {
    return (
        <main>
            <div className='divSvg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity={1} d="M0,96L40,122.7C80,149,160,203,240,202.7C320,203,400,149,480,128C560,107,640,117,720,144C800,171,880,213,960,202.7C1040,192,1120,128,1200,117.3C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" /></svg>

            </div>
            <div className="mainContainer">
                <div className="footerBox imageBox">
                    <img className='img' src="https://img.freepik.com/premium-vector/mind-tech-logo-design-template_145155-1646.jpg" alt="" />
                </div>
                <div className="footerBox">
                    <h2 className='footerService'>Services</h2>
                    <a className='footerAnchor' href='/'>&gt;&gt; Point of Sale</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; ERP</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; E-Commerce Website builder</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; Point of Sale</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; Delevery as A Service</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; Search Engine optimization</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; Social Media Marketing</a>
                </div>
                <div className="footerBox">
                    <a className='footerAnchor' href='/'>&gt;&gt; Pharmacy Management</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; Responsive Website</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; App Development</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; Dynamic Website</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; Lead Generation</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; Graphic Design</a>
                    <a className='footerAnchor' href='/'>&gt;&gt; Social media marketing</a>
                </div>
                <div className="footerBox">
                    <h2 className='footerService'>Contact Info</h2>
                    <p className='footerAnchor'>&gt;&gt; Mon - Sat 9:30 AM - 6:00 PM</p>
                    <p className='footerAnchor'>&gt;&gt; +919319791129</p>
                    <a className='footerAnchor' href='/'>&gt;&gt; besure@GoodTechMind.com</a>
                    <p className='footerAnchor'>&gt;&gt; Piboco Complex, Punj Sons</p>
                    <p className='footerAnchor'>&gt;&gt; 1, First Floor,Mandira Apartment, Duck Banglo, CKC Road, Sector G, Barsat, Kolkata, West Bengal 700124</p>
                    <div className="icons">
                        <img src="https://img.freepik.com/premium-psd/3d-square-with-facebook-logo_901970-2.jpg" alt="" />
                        <img src="https://img.freepik.com/premium-psd/3d-square-with-facebook-logo_901970-2.jpg" alt="" />
                        <img src="https://img.freepik.com/premium-psd/3d-square-with-facebook-logo_901970-2.jpg" alt="" />
                        <img src="https://img.freepik.com/premium-psd/3d-square-with-facebook-logo_901970-2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="bottomFooter">
                <div className="horizontalLine"></div>
                <div className="floatDiv">
                    <p className="leftPara bothPara">@copyright 2024 by GoodTechMind</p>
                    <p className="rightPara bothPara">Terms and condition privacy policy</p>
                </div>
            </div>
        </main>
    )
}

export default GtmFooter