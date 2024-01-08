import React from 'react'

type Props = {}

export default function Preloader({ }: Props) {
    return (
        <div id="preloader">
            <div className="loader-inner">
                <div id="loader">
                    <h2 id="bg-loader">zaira<span>.</span></h2>
                    <h2 id="fg-loader">zaira<span>.</span></h2>
                </div>
            </div>
        </div>
    )
}