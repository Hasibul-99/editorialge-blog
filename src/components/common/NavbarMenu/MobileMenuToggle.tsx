import React, { Fragment } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import Logo from "../../../assets/img/logo/logo.png"
import WLogo from "../../../assets/img/logo/w_logo.png"
type Props = {}

export default function MobileMenuToggle({ }: Props) {
    return (
        <Fragment>
            <Sheet>
                <SheetTrigger asChild>
                    <FaBars />
                </SheetTrigger>

                <SheetContent side={"right"} className='mobile-menu'>
                    <nav className="menu-box">
                        {/* <div className="close-btn"><i className="fas fa-times" /></div> */}
                        <div className="nav-logo">
                            <a href="/"><img src={Logo.src} alt="Logo" /></a>
                        </div>
                        <div className="nav-logo d-none">
                            <a href="/"><img src={WLogo.src} alt="Logo" /></a>
                        </div>
                        <div className="mobile-search">
                            {/* <form action="#">
                                <input type="text" placeholder="Search here..." />
                                <button><i className="flaticon-search" /></button>
                            </form> */}
                        </div>
                        <div className="menu-outer">
                            <ul className="navigation">
                                <li className="active menu-item-has-children"><a href="#">Home</a>
                                    <ul className="sub-menu" style={{ display: 'block' }}>
                                        <li><a href="/">Home 01 - Default</a></li>
                                        <li><a href="/">Home 02 - Gaming</a></li>
                                        <li><a href="/">Home 03 - Technology</a></li>
                                        <li><a href="/">Home 04 - Travel</a></li>
                                        <li><a href="/">Home 05 - Crypto</a></li>
                                        <li className="active"><a href="/">Home 06 - Newspaper</a></li>
                                    </ul>
                                    <div className="dropdown-btn open"><span className="fas fa-angle-down" /></div></li>
                                <li><a href="/">About Us</a></li>
                                <li className="menu-item-has-children"><a href="#">Features</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item-has-children"><a href="#">Single Post Layout</a>
                                            <ul className="sub-menu">
                                                <li><a href="/">Single post 01</a></li>
                                                <li><a href="/">Single post 02</a></li>
                                            </ul>
                                            <div className="dropdown-btn"><span className="fas fa-angle-down" /></div></li>
                                        <li><a href="/">Author Details</a></li>
                                    </ul>
                                    <div className="dropdown-btn"><span className="fas fa-angle-down" /></div></li>
                                <li className="menu-item-has-children"><a href="#">Categories</a>
                                    <ul className="sub-menu">
                                        <li><a href="/">Blog Default</a></li>
                                        <li><a href="/">Blog Layout 02</a></li>
                                        <li><a href="/">Blog Layout 03</a></li>
                                    </ul>
                                    <div className="dropdown-btn"><span className="fas fa-angle-down" /></div></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>

                        </div>
                        <div className="social-links">
                            <ul className="clearfix list-wrap">
                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                <li><a href="#"><i className="fab fa-youtube" /></a></li>
                            </ul>
                        </div>
                    </nav>

                </SheetContent>
            </Sheet>
        </Fragment>
    )
}