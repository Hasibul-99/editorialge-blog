import i18next from "i18next";

export const addActiveClass = (e, className="") => {
    if (e) {
        e.classList.add(className);
    }
}

export const removeActiveClass = (e, className = "") => {
    if (e ) {
        e.classList.remove(className);
    }
} 

export const tansation = (data, context) => {
    console.log("i18next.language", i18next.language);
    let lan = i18next.language;

    return data[`${context}_${lan}`] ? data[`${context}_${lan}`] : data[`${context}_en`];  
}