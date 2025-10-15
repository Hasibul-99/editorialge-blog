export const postList = (locale = 'en') => {
    return `
        query {
            posts(filters: { is_active: { eq: true } }, pagination: { limit: -1 }, locale: "${locale}") {
                slug
            }
        }
    `
}

export const postDetails = (slug, locale = 'en') => {
    return `
        query {
            posts(filters: { slug: { eq: "${slug}" }, is_active: { eq: true } }, locale: "${locale}") {
                slug
                title
                content_sec
                content_first
                category{
                    title
                    slug
                }
                image{
                    url
                    height
                    width
                }
                cover_image{
                    url
                    height
                    width
                }
                createdBy {
                    firstname
                    lastname
                }
                createdAt
                updatedAt
                tags{
                    title
                }
            }
        }
    `
}

export const home = (locale = 'en') => {
    return `
        query {
            topPost:posts(sort: "createdAt:desc", pagination: { limit: 3 }, filters: {top_post: {eq: true}, is_active: {eq: true}}) {
                slug
                title
                category{
                    title
                    slug
                }
                image{
                    url
                    height
                    width
                }
                createdBy {
                    firstname
                    lastname
                }
                createdAt
                content_first
            }
            justInRecent:posts(sort: "createdAt:desc", pagination: { limit: 4 }, filters: {is_active: {eq: true}}) {
                slug
                title
                category{
                    title
                    slug
                }
                image {
                    url
                    width
                    height
                }
                createdAt
            }
            hotCategories:categories(sort: "rating:desc", pagination: { limit: 8 }, filters: {is_active: {eq: true}}) {
                title
                slug
                posts(sort: "createdAt:desc", pagination: { limit: 5 }, filters: {is_active: {eq: true}}) {
                    slug
                    title
                    image{
                        url                                        
                        width
                        height
                    }
                    cover_image{
                        url                                        
                        width
                        height
                    }
                    createdBy {
                        firstname
                        lastname
                    }
                    createdAt
                    content_first
                }
            }
            topRating:posts( sort: "createdAt:desc"
                pagination: { limit: 5 }, filters: { rating: { gte: 4 }, is_active: {eq: true} }) {
                title
                slug
                createdAt
            }
        }
    `
}

export const categoryList = (locale = 'en') => {
    return `
        query {
            categories(sort: "createdAt:desc", pagination: { limit: 10 }, filters: {is_active: {eq: true}}) {
                title
                slug
                description
                cover_image{
                    url
                    height
                    width
                }
                createdAt
            }
        }
    `
}

export const categoryDeatails = (slug, locale = 'en') => {
    return `
        query {
            categories(filters: { slug: { eq: "${slug}" }, is_active: { eq: true } }) {
                title
                slug
                description
                cover_image{
                    url
                    height
                    width
                }
                posts(sort: "createdAt:desc", pagination: { limit: 10 }, filters: {is_active: {eq: true}}) {
                    slug
                    title
                    image{
                        url
                        height
                        width
                    }
                    createdBy {
                        firstname
                        lastname
                    }
                    createdAt
                    content_first
                }
                createdAt
            }
        }
    `
}

export const categoryListWithRelation = (locale = 'en') => {
    return `
        query {
            categories(sort: "createdAt:desc", pagination: { limit: 10 }, filters: {is_active: {eq: true}}) {
                title
                slug
                description
                cover_image{
                    url
                    height
                    width
                }
                posts(sort: "createdAt:desc", pagination: { limit: 5 }, filters: {is_active: {eq: true}}) {
                    slug
                    title
                    image{
                        url
                        height
                        width
                    }
                    createdBy {
                        firstname
                        lastname
                    }
                    createdAt
                    content_first
                }
                createdAt
            }
        }
    `
}