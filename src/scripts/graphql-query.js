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

export const postDetails = (slug) => {
    return `
    query {
      posts(
        filters: {
          slug: { eq: "${slug}" }
          status: { eq: true }
        }
      ) {
        data {
          id
          attributes {
            createdBy {
              id
              firstname
              lastname
            }
            title_en
            title_bn
            breadcrumb_en
            breadcrumb_bn
            content_first_en
            content_first_bn
            content_sec_en
            content_sec_bn
            rating
            category {
              data {
                attributes {
                  title_en
                  title_bn
                  slug
                }
              }
            }
            tags {
              data {
                attributes {
                  title_en
                  title_bn
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
            title_en
            title_bn
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
          title_en
          title_bn
          slug
          category {
            data {
                attributes {
                  title_en
                  title_bn
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

export const home = () => {
    return `{
    topPost:posts(sort: "createdAt:desc", pagination: { limit: 3 }, filters: {top_post: {eq: true}}) {
        data {
            attributes {
                slug
                title_en
                title_bn
                category{
                    data {
                        attributes {
                            title_en
                            title_bn
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
                publishedAt
                content_first_en
                content_first_bn 
            }
        }
    }
    justInRecent:posts(sort: "createdAt:desc", pagination: { limit: 4 }) {
        data{
            attributes {
                slug
                title_en
                title_bn
                category{
                    data {
                        attributes {
                            title_en
                            title_bn
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
                publishedAt
            }
        }
    }
    hotCategories:categories(sort: "createdAt:desc", pagination: { limit: 8 }) {
        data {
            attributes {
                title_en
                title_bn
                slug
                posts(sort: "createdAt:desc", pagination: { limit: 5 }) {
                    data {
                        attributes {
                            slug
                            title_en
                            title_bn
                            image{
                                data{
                                    attributes {
                                        url
                                    }
                                }
                            }
                            cover_image{
                                data{
                                    attributes {
                                        url
                                    }
                                }
                            }
                            createdBy {
                                firstname
                                lastname
                            }
                            publishedAt
                            description 
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
                title_en
                title_bn
                createdAt
            }
        }
    }
}`
}

export const categoryList = () => {
    return `
        query {
            categories(filters: {status: {eq: true}}){
                data {
                    attributes {
                        slug
                    }
                }
            }
        }
    `
}

export const categoryDeatails = (slug, page) => {
    return `
        query {
            category:categories(filters: {slug: {eq: "${slug}"}}) {
                data {
                    attributes {
                        title_en
                        title_bn
                        slug
                        breadcrumb_en
                        breadcrumb_bn
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
            ) {
                data {
                    attributes {
                        title_en
                        title_bn
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
                        content_first_en
                        content_first_bn
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
                        title_en
                        title_bn
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
                        title_en
                        title_bn
                        category{
                            data {
                                attributes {
                                    title_en
                                    title_bn
                                    slug
                                }
                            }
                        }
                        publishedAt
                    }
                }
            }
        }
    `
}