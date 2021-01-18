import axios from 'axios';

export const getList = async (category) => {
    const query = category === 'all' ? '' : `&category=&{category}`;
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=da8b2e5b50cc41edb679702807761afd`);
    return res.data.articles;
}
// useEffect(() => {
//     // async를 사용하는 함수 따로 선언
//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             const query = category === 'all' ? '' : `&category=${category}`;
//             const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=da8b2e5b50cc41edb679702807761afd`);
//             console.log(response.data.articles);
//             setArticles(response.data.articles);
//         } catch (e) {
//             console.log(e);
//         }
//         setLoading(false);
//     }
//     fetchData();
// }, [category]);

// export const getAddr = async (searchText) => {
//     const query = `${URL}?confmKey=${APIKEY}&currentPage=1&countPerPage=10&keyword=${searchText}&resultType=json`;
//     const res = await Axios.get(query);
//     return res.data.results.juso;
// }