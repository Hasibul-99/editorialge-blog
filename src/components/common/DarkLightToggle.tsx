import React from 'react'

type Props = {}

export default function DarkLightToggle({ }: Props) {
    return (
        <div className="darkmode-trigger">
            <label className="modeSwitch">
                <input type="checkbox" />
                <span className="icon" />
            </label>
        </div>
    )
}