import React from 'react'

type Props = {}

export default function ScrollTop({ }: Props) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button onClick={() => scrollToTop()} id="scroll-to-target" className="scroll-top scroll-to-target" data-target="html">
            <i className="fas fa-angle-up" />
        </button>
    )
}