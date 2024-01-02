import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



export default function TopHeader() {
    return (
        <div className="header-top-wrap-four">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="header-top-left-four">
                            <div className="trending-box">
                                <div className="icon">
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H2.66667L0 7.7H2.66667L1.33333 14L7.33333 4.9H4.00333L8 0Z" fill="white" />
                                    </svg>
                                </div>
                                <span>Trending</span>
                                <div className="shape">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 36" preserveAspectRatio="none" fill="none">
                                        <path d="M0 18C0 8.05888 8.05887 0 18 0H110L121.26 16.8906C121.708 17.5624 121.708 18.4376 121.26 19.1094L110 36H18C8.05888 36 0 27.9411 0 18Z" fill="url(#trending_shape)" />
                                        <defs>
                                            <linearGradient id="trending_shape" x1={12} y1={36} x2={132} y2={36} gradientUnits="userSpaceOnUse">
                                                <stop offset={0} stopColor="#3F6088" />
                                                <stop offset={1} stopColor="#2A4970" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            {/* <div className="swiper-container ta-trending-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="trending-content">
                                            <a href="blog-details.html">Here area brands and designers to look out for next year 2023</a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="trending-content">
                                            <a href="blog-details.html">Here area brands and designers to look out for next year 2023</a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="trending-content">
                                            <a href="blog-details.html">Here area brands and designers to look out for next year 2023</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <Carousel className="w-full max-w-xs">
                                <CarouselContent>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Card>
                                                    
                                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="header-top-social header-top-social-two">
                            <h5 className="title">Follow Us:</h5>
                            <ul className="list-wrap">
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaXTwitter /></a></li>
                                <li><a href="#"><FaInstagram /></a></li>
                                <li><a href="#"><FaLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
