import { useEffect, useState } from "react";
import { useContext, createContext } from "react";


const ArticlesContext = createContext()

export const useArticles = () => useContext(ArticlesContext)
export const ArticlesProvider = ({children}) => {
    const apiUrl = 'https://win23-assignment.azurewebsites.net/api/articles'
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const formatMonth = (date) => {
        const options = { month: 'short' }
        return new Intl.DateTimeFormat('en-US', options).format(date)
    }

    const formatArticleDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
        
    };


    useEffect (() => {
        fetchArticles()
        
    }, [])


    const fetchArticles = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(apiUrl)
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
        }
        setIsLoading(false)
    }

  


    const fetchArticle = async (id) => {
        setIsLoading(true)
        
   
        try {
            const response = await fetch(`${apiUrl}/${id}`)
            const article = await response.json()

            const publishedDate = new Date(article.published);
            const formattedDate = formatArticleDate(publishedDate);
            article.formattedDate = formattedDate

            setArticle(article)
        } catch (error) {
            setError(error)
        }
        setIsLoading(false)
    }

    const clearArticle = () => {
        setArticle([])
    }

    return (
        <ArticlesContext.Provider value={{articles, article, isLoading, error, fetchArticles, fetchArticle, clearArticle}}>
            {children}
        </ArticlesContext.Provider>
    )
}