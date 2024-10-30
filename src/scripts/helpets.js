import i18next from "i18next";

export const addActiveClass = (e, className = "") => {
    if (e) {
        e.classList.add(className);
    }
}

export const removeActiveClass = (e, className = "") => {
    if (e) {
        e.classList.remove(className);
    }
}

export const tansation = (data, context) => {
    if (data) {
        let lan = i18next.language;
        return data[`${context}_${lan}`] ? data[`${context}_${lan}`] : data[`${context}_en`];
    } else return '';
}

export const showImage = (data) => {
    if (data) {
        return import.meta.env.PUBLIC_BASEURL + data.data.at(0).attributes.url;
    } else return '';
}

export const getImageHeightAndWeight = (image, context) => {
    if (context === 'height') {
        return image.data.at(0).attributes.height
    } else return image.data.at(0).attributes.width
}