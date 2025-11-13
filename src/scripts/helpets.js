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
        title: data.title,
        description: data.description,
        keywords: data.keywords,
        image: showImage(data.image),
        imageWidth: getImageHeightAndWeight(data.image, 'width'),
        imageHeight: getImageHeightAndWeight(data.image, 'height'),
        imageAlt: data.title,
        slug: data.slug,
        type: 'collection'
    };
}

export const getTagTitles = (data) => {
    if (Array.isArray(data?.tags)) {
        return data.tags.map((t) => t.title).filter(Boolean);
    } else if (data?.tags?.data?.length) {
        return data.tags.data.map((t) => t.attributes?.title).filter(Boolean);
    }
    return [];
}

export const getCategoryTitle = (data) => {
    if (data?.category?.title || data?.category?.['title_en'] || data?.category?.['title_bn']) {
        return data.category.title;
    } else if (data?.category?.data?.attributes) {
        return data.category.title;
    }
    return '';
}

export const getPostSEOMeta = (data, slug) => {
    const tagTitles = getTagTitles(data);
    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords || tagTitles.join(', '),
        image: showImage(data.image),
        imageWidth: getImageHeightAndWeight(data.image, 'width'),
        imageHeight: getImageHeightAndWeight(data.image, 'height'),
        imageAlt: data.title,
        slug: slug,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        author: data?.createdBy ? `${data.createdBy.firstname || ''} ${data.createdBy.lastname || ''}`.trim() : undefined,
        articleSection: getCategoryTitle(data),
        type: 'article'
    }
}