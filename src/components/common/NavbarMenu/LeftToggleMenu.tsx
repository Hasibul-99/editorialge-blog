import React, { useEffect } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "../../../assets/img/logo/logo.png"
import WLogo from "../../../assets/img/logo/w_logo.png"
import demoImg from "../../../assets/img/blog/hr_post01.jpg";
import { addActiveClass, removeActiveClass } from '@/scripts/helpets';

type Props = {}

export default function LeftToggleMenu({ }: Props) {
    const handleScroll = () => {
        const scroll = window.pageYOffset;

        if (scroll < 245) {
            removeActiveClass(document.getElementById('sticky-header'), "sticky-menu");
            removeActiveClass(document.getElementById('header-fixed-height'), "active-height");
            removeActiveClass(document.getElementById('scroll-to-target'), "open");
    
        } else {
            addActiveClass(document.getElementById('sticky-header'), 'sticky-menu');
            addActiveClass(document.getElementById('header-fixed-height'), 'active-height');
            addActiveClass(document.getElementById('scroll-to-target'), 'open');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, [])
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <a href="#!" className="menu-tigger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </SheetTrigger>

                <SheetContent side={"left"} className='offCanvas-sheet'>
                    <div className="offCanvas-wrap">
                        <div className="offCanvas-body">
                            <SheetClose asChild>
                                <div className="offCanvas-toggle">
                                    <span />
                                    <span />
                                </div>
                            </SheetClose>

                            <div className="offCanvas-content">
                                <div className="offCanvas-logo logo">
                                    <a href="/" className="logo-dark"><img src={Logo.src} alt="Logo" /></a>
                                    <a href="/" className="logo-light"><img src={WLogo.src} alt="Logo" /></a>
                                </div>
                                <p>The argument in favor of using filler text goes something like this: If you use any real content in the Consulting Process anytime you reach.</p>
                                <ul className="offCanvas-instagram list-wrap">
                                    <li><a href="#" className="popup-image"><img src={demoImg.src} alt="img" /></a></li>
                                    <li><a href="#" className="popup-image"><img src={demoImg.src} alt="img" /></a></li>
                                    <li><a href="#" className="popup-image"><img src={demoImg.src} alt="img" /></a></li>
                                    <li><a href="#" className="popup-image"><img src={demoImg.src} alt="img" /></a></li>
                                    <li><a href="#" className="popup-image"><img src={demoImg.src} alt="img" /></a></li>
                                    <li><a href="#" className="popup-image"><img src={demoImg.src} alt="img" /></a></li>
                                </ul>
                            </div>
                            <div className="offCanvas-contact">
                                <h4 className="title">Get In Touch</h4>
                                <ul className="offCanvas-contact-list list-wrap">
                                    <li><i className="fas fa-envelope-open" /><a href="mailto:info@webmail.com">info@webmail.com</a></li>
                                    <li><i className="fas fa-phone" /><a href="tel:88899988877">888 999 888 77</a></li>
                                    <li><i className="fas fa-map-marker-alt" /> 12/A, New Booston, NYC</li>
                                </ul>
                                <ul className="offCanvas-social list-wrap">
                                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                    <li><a href="#"><i className="fab fa-youtube" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </SheetContent>
            </Sheet>
        </>
    )
}