import React, { useEffect, useState }  from 'react'
import ArticleCard from '../../pages/news/our_news/ArticleCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const FetchArticles = ({url, enableSwiper}) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const formatMonth = (date) => {
        const options = { month: 'short' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
      };

    useEffect (() => {
        const fetchData = async () => {
            setIsLoading(true)
            
            try {
                const response = await fetch(`${url}`)
                const articles = await response.json()

                articles.forEach((article) => {
                    const publishedDate = new Date(article.published)
                    const monthName = formatMonth(publishedDate)
                    article.month = monthName.charAt(0).toUpperCase() + monthName.slice(1)
                    article.day = publishedDate.getDate()
                })

                setArticles(articles)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            } 
        }
        fetchData()
    }, [url])
    
    
    if (isLoading) {
        return (
            <div className='container loading'>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        ) 
    }

    if (error) {
        return (
            <div>Try again</div>
        )
    }


    if (enableSwiper) {
        return (
            <div className='slider'>

                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation={{
                    nextEl: '.button-next-slide',
                    prevEl: '.button-prev-slide'
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: {
                      slidesPerView: 1.1,
                      slidesPerGroup: 1,
                      spaceBetween: 10,
                    },
                    576: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                      },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      slidesPerGroup: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                      slidesPerGroup: 3,
                    },
                  }}
                
                className='mySwiper'
                >
                    
                    {articles.map((article) => (
                        <SwiperSlide key={article.id}>
                        <ArticleCard
                        id={article.id}
                        title={article.title}
                        category={article.category}
                        content={article.content}
                        imageUrl={article.imageUrl}
                        month={article.month}
                        day={article.day}
                        />
                       
                        </SwiperSlide> 
                    ))}

                </Swiper>
               
                <i className='button-next-slide fa-solid fa-angle-right'></i>          
                <i className='button-prev-slide fa-solid fa-angle-left'></i>          
                
            
            </div>
        )
    }
    
    return (
        <div className='article-news-grid'>
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              content={article.content}
              imageUrl={article.imageUrl}
            />
          ))}
        </div>
    )
}

export default FetchArticles