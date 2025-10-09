export const postList = () => {
    return `
        query {
            posts(filters: { status: { eq: true } }, pagination: { limit: -1 }) {
                data {
                    attributes {
                        slug
                    }
                }
            }
        }
    `
}

export const postDetails = (slug, locale = 'en') => {
    return `
    query {
      posts(
        filters: {
          slug: { eq: "${slug}" }
          status: { eq: true }
        }
        locale: "${locale}"
      ) {
        data {
          id
          attributes {
            createdBy {
              id
              firstname
              lastname
            }
            title
            breadcrumb
            content_first
            content_sec
            rating
            category {
              data {
                attributes {
                  title
                  slug
                }
              }
            }
            tags {
              data {
                attributes {
                  title
                }
              }
            }
            createdAt
            updatedAt
            description
            keywords
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      categories(filters: { is_hot: { eq: true } }
      sort: ["createdAt:desc"]
      pagination: { limit: 5 }) {
        data {
          id
          attributes {
            title
            cover_image {
              data {
                attributes {
                  url
                }
              }
            }
            slug
          }
        }
      }
      latestPosts: posts(
      sort: ["createdAt:desc"]
      pagination: { limit: 5 }
    ) {
      data {
        attributes {
          title
          slug
          category {
            data {
                attributes {
                  title
                  slug
                }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    }
  `
}

export const home = (locale = 'en') => {
    return `{
    topPost:posts(sort: "createdAt:desc", pagination: { limit: 3 }, filters: {top_post: {eq: true}}) {
        data {
            attributes {
                slug
                title
                category{
                    data {
                        attributes {
                            title
                            slug
                        }
                    }
                }
                image{
                    data{
                        attributes {
                            url
                            height
                            width
                        }
                    }
                }
                createdBy {
                    firstname
                    lastname
                }
                createdAt
                content_first
            }
        }
    }
    justInRecent:posts(sort: "createdAt:desc", pagination: { limit: 4 }) {
        data{
            attributes {
                slug
                title
                category{
                    data {
                        attributes {
                            title
                            slug
                        }
                    }
                }
                image {
                    data {
                        attributes{
                            url
                            width
                            height
                        }
                    }
                }
                createdAt
            }
        }
    }
    hotCategories:categories(sort: "rating:desc", pagination: { limit: 8 }) {
        data {
            attributes {
                title
                slug
                posts(sort: "createdAt:desc", pagination: { limit: 5 }) {
                    data {
                        attributes {
                            slug
                            title
                            image{
                                data{
                                    attributes {
                                        url                                        
                                        width
                                        height
                                    }
                                }
                            }
                            cover_image{
                                data{
                                    attributes {
                                        url                                        
                                        width
                                        height
                                    }
                                }
                            }
                            createdBy {
                                firstname
                                lastname
                            }
                            createdAt
                            content_first
                        }
                    }
                }
            }
        }
    }
    topRating:posts( sort: "createdAt:desc"
        pagination: { limit: 5 }, filters: { rating: { gte: 4 } }) {
        data {
            attributes {
                title
                slug
                createdAt
            }
        }
    }
}`
}

export const categoryList = () => {
    return `
        query {
            categories(filters: {status: {eq: true}}, pagination: { limit: -1 }){
                data {
                    attributes {
                        slug
                    }
                }
            }
        }
    `
}

export const categoryDeatails = (slug, page, locale = 'en') => {
    return `
        query {
            category:categories(filters: {slug: {eq: "${slug}"}}, locale: "${locale}") {
                data {
                    attributes {
                        title
                        slug
                        breadcrumb
                        description
                        keywords
                        image {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                }
            }
            categoryPost:posts(
                filters: { status: { eq: true }, category: { slug: { eq: "${slug}" } } }
                sort: "createdAt:desc"
                pagination: { page: ${page}, pageSize: 12 }
                locale: "${locale}"
            ) {
                data {
                    attributes {
                        title
                        slug
                        image {
                            data {
                                attributes {
                                    url
                                    width
                                    height
                                }
                            }
                        }
                        content_first
                        createdAt
                    }
                }
                meta {
                    pagination {
                        total         
                        page          
                        pageSize      
                        pageCount     
                    }
                }
            }
            hotCategories:categories(filters: {is_hot: {eq: true}}, pagination: { limit: 8 } ) {
                data{
                    attributes {
                        title
                        slug
                        cover_image {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        image {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                }
            }
            justInRecent:posts(sort: "createdAt:desc", pagination: { limit: 4 }) {
                data{
                    attributes {
                        slug
                        title
                        category{
                            data {
                                attributes {
                                    title
                                    slug
                                }
                            }
                        }
                        createdAt
                    }
                }
            }
        }
    `
}

export const categoryListWithRelation = () => {
    return `
        query {
            categories(filters: {
                status: { eq: true },
                category: { id: { null: true } }
            }) {
                data {
                    attributes {
                        slug
                        title
                        categories {
                            data {
                                attributes {
                                    slug
                                    title
                                }
                            }
                        }
                    }
                }
            }
        }`
}