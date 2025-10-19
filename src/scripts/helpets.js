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
    // Handle new REST API format (direct array of image objects)
    if (data?.length && data[0]?.url) {
        return data[0].url; // Cloudinary URLs are absolute, no need to prepend baseurl
    }
    // Handle old GraphQL format (data.data[0].attributes.url)
    else if (data?.data?.length && data.data[0]?.attributes?.url) {
        return import.meta.env.PUBLIC_BASEURL + data.data[0].attributes.url;
    } 
    else return null;
}

export const getImageHeightAndWeight = (image, context) => {
    // Handle new REST API format (direct array of image objects)
    if (image?.length && image[0]) {
        if (context === 'height') {
            return image[0]?.height || 0;
        } else {
            return image[0]?.width || 0;
        }
    }
    // Handle old GraphQL format (image.data[0].attributes)
    else if (image?.data?.length) {
        if (context === 'height') {
            return image.data.at(0)?.attributes?.height || 0;
        } else {
            return image.data.at(0)?.attributes?.width || 0;
        }
    }
    return 0;
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