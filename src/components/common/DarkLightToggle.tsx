import React, { useEffect } from 'react'

type Props = {}

export default function DarkLightToggle({ }: Props) {
    const handelModeChange = () => {
        console.log("hello");
        
        if (localStorage.getItem('tg_theme_scheme') === 'dark') {
            tg_set_scheme('light');
        } else {
            tg_set_scheme('dark');
        }
    }; 

    const tg_set_scheme = (tg_theme: string) => {
        localStorage.setItem('tg_theme_scheme', tg_theme);
        document.documentElement.setAttribute("tg-theme", tg_theme);
    }

    const tg_init_theme = () => {
        let element : HTMLInputElement | null = document.querySelector('.modeSwitch');

        if (element) {
            if (localStorage.getItem('tg_theme_scheme') === 'dark') {
                tg_set_scheme('dark');
                element.checked = true;
            } else {
                tg_set_scheme('light');
                element.checked = false;
            }
        }
    }
    useEffect(() => {
        tg_init_theme();
    },[])

    return (
        <div className="darkmode-trigger">
            <label className="modeSwitch" >
                <input type="checkbox" onChange={() => handelModeChange()}/>
                <span className="icon" />
            </label>
        </div>
    )
}