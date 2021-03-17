// API를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링 해주는 컴포넌트
import React, { useState, useEffect } from 'react';
import styled from './styled-components';
import NewsItem from './NewsItem';
import axios from './axios'

// const NewsListBlock = styled.div`
//     box-sizing: border-box;
//     padding-bottom: 3rem;
//     width: 768px;
//     margin: 0 auto;
//     margin-top: 2rem;
//     @media screen and (max-width: 768px){
//         width: 100%;
//         padding-left: 1rem;
//         padding-right: 1rem;
//     }
// `;

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160',
// };

// export default ({ }) => {

//     return (
//         <NewsListBlock>
//             <NewsItem article={sampleArticle} />
//             <NewsItem article={sampleArticle} />
//             <NewsItem article={sampleArticle} />
//             <NewsItem article={sampleArticle} />
//             <NewsItem article={sampleArticle} />
//             <NewsItem article={sampleArticle} />
//         </NewsListBlock>
//     )
// }

/* 14.5 데이터 연동하기 */

// const NewsListBlock = styled.div`
//     box-sizing: border-box;
//     padding-bottom: 3rem;
//     width: 768px;
//     margin: 0 auto;
//     margin-top: 2rem;
//     @media screen and (max-width: 768px){
//         width: 100%;
//         padding-left: 1rem;
//         padding-right: 1rem;
//     }
// `;

// export default ({ }) => {

//     const [articles, setArticles] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         // async를 사용하는 함수 따로 선언
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=da8b2e5b50cc41edb679702807761afd');
//                 setArticles(response.data.articles);
//             } catch (e) {
//                 console.log(e);
//             }
//             setLoading(false);
//         }
//         fetchData();
//     }, []);

//     // 대기 중일 때
//     if (loading) {
//         return <NewsListBlock>대기 중...</NewsListBlock>
//     }
//     // 아직 articles 값이 설정되지 않았을 때
//     if (!articles) {
//         return null;
//     }
//     // articles 값이 유효할 때
//     return (
//         <NewsListBlock>
//             {articles.map(article => (
//                 <NewsItem key={article.url} article={article} />
//             ))}
//         </NewsListBlock>
//     )
// }

/* 14.6 카테고리 기능 구현하기 */
// 14.6.2 API를 호출할 때 카테고리 지정하기 

// const NewsListBlock = styled.div`
//     box-sizing: border-box;
//     padding-bottom: 3rem;
//     width: 768px;
//     margin: 0 auto;
//     margin-top: 2rem;
//     @media screen and (max-width: 768px){
//         width: 100%;
//         padding-left: 1rem;
//         padding-right: 1rem;
//     }
// `;

// export default ({ category }) => {

//     const [articles, setArticles] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         // async를 사용하는 함수 따로 선언
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const query = category === 'all' ? '' : `&category=${category}`;
//                 const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=da8b2e5b50cc41edb679702807761afd`);
//                 console.log(response);
//                 setArticles(response.data.articles);
//             } catch (e) {
//                 console.log(e);
//             }
//             setLoading(false);
//         }
//         fetchData();
//     }, [category]);

//     // 대기 중일 때
//     if (loading) {
//         return <NewsListBlock>대기 중...</NewsListBlock>
//     }
//     // 아직 articles 값이 설정되지 않았을 때
//     if (!articles) {
//         return null;
//     }
//     // articles 값이 유효할 때
//     return (
//         <NewsListBlock>
//             {articles.map(article => (
//                 <NewsItem key={article.url} article={article} />
//             ))}
//         </NewsListBlock>
//     )
// }

/* 14.8 usePromise 커스텀 Hook 만들기 */
const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export default ({ category }) => {

    const [loading, response, error] = usePromise(() => {
        const query = (category === 'all' ? '' : `&category=${category}`);
        return axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=da8b2e5b50cc41edb679702807761afd`);
    }, [category])

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }
    // 아직 response 값이 설정되지 않았을 때
    if (!response) {
        return null;
    }
    // 에러가 발생했을 때
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }
    // articles 값이 유효할 때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}