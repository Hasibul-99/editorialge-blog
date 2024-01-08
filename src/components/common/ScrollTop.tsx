import React from 'react'

type Props = {}

export default function ScrollTop({ }: Props) {
    return (
        <button className="scroll-top scroll-to-target" data-target="html">
            <i className="fas fa-angle-up" />
        </button>
    )
}