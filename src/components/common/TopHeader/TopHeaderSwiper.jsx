import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { latestPostsList } from "@/scripts/graphql-query"

export default function TopHeaderSwiper() {
    const [posts, setPosts] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        let isMounted = true
        const fetchPosts = async () => {
            try {
                setIsLoading(true)
                setError('')
                const locale = (typeof window !== 'undefined' && window.location.pathname.split('/')[1] === 'bn') ? 'bn' : 'en'
                const res = await fetch(`${import.meta.env.PUBLIC_BASEURL}/graphql`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: latestPostsList(8, locale) })
                })
                const json = await res.json()
                let arr = []
                const raw = json?.data?.latestPosts
                if (Array.isArray(raw)) {
                    arr = raw
                } else if (raw?.data?.length) {
                    arr = raw.data.map((item) => item.attributes)
                }
                if (isMounted) setPosts(arr || [])
            } catch (e) {
                console.error('Failed to load latest posts', e)
                setError('Failed to load latest posts')
            } finally {
                if (isMounted) setIsLoading(false)
            }
        }
        fetchPosts()
        return () => { isMounted = false }
    }, [])

    return (
        <Carousel className="w-full max-w-xs"
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true
                }),
            ]}>
            <CarouselContent>
                {isLoading && (
                    <CarouselItem>
                        <div className="p-1">
                            <div className="swiper-slide">
                                <div className="trending-content">
                                    <span>Loading latest posts...</span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                )}
                {!isLoading && posts?.length ? (
                    posts.slice(0, 8).map((post, index) => (
                        <CarouselItem key={post?.slug || index}>
                            <div className="p-1">
                                <div className="swiper-slide">
                                    <div className="trending-content">
                                        <a href={"/" + post?.slug}>{post?.title}</a>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))
                ) : !isLoading ? (
                    Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <div className="swiper-slide">
                                    <div className="trending-content">
                                        <a href="#">No trending posts available</a>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))
                ) : null}
            </CarouselContent>
        </Carousel>

    )
}
