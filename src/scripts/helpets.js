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
    } else return '/hello';
}

export const getImageHeightAndWeight = (image, context) => {
    if (context === 'height') {
        return image.data.at(0).attributes.height
    } else return image.data.at(0).attributes.width
}

export const getCategorySEOmeta = (data) => {
    return {
        title: tansation(data, 'title'),
        description: data.description,
        keywords: data.keywords,
        image: showImage(data.image),
        slug: data.slug
    };
}

export const getPostSEOMeta = (data, slug) => {
    return {
        title: tansation(data, 'title'),
        description: data.description,
        keywords: data.keywords,
        image: showImage(data.image),
        slug: slug
    }
}