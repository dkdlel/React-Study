import Axios from "axios";

const APIKEY = "devU01TX0FVVEgyMDIwMDkxMDE4MzExMzExMDE2OTk=";
const URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";

export const getAddr = async (searchText) => {
    const query = `${URL}?confmKey=${APIKEY}&currentPage=1&countPerPage=10&keyword=${searchText}&resultType=json`;
    const res = await Axios.get(query);
    return res.data.results.juso;
}