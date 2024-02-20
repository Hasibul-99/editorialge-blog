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
    let lan = i18next.language;
    return data[`${context}_${lan}`] ? data[`${context}_${lan}`] : data[`${context}_en`];  
}

export const showImage = (data) => {

    return "http://localhost:1337" + data.data.at(0).attributes.url;
}