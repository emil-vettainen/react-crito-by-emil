import React from 'react'
import ArticleCard from '../ArticleCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './FetchArticles.css' 
import { useArticles } from '../../contexts/ArticlesContext'



const FetchArticles = ({enableSwiper}) => {
    const { articles, isLoading, error } = useArticles()
   
    
    if (isLoading) {
        return (
            <div className='container loading'>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className='mt-5 text-center'>Something went wrong, please refresh your browser and try agian</div>
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
                        <ArticleCard {...article}/>
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
            <ArticleCard key={article.id} {...article}/>
          ))}
        </div>
    )
}
export default FetchArticles