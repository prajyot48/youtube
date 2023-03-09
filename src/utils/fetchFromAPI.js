import axios from 'axios'
const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  
  params: {maxResults:'50'},
  headers: {
    'X-RapidAPI-Key': 'a3ab3f31bdmshe31cb831ece62f6p1668e3jsne9610cc70076',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
}).catch(function (error) {
	console.error(error);
});

export const fetchFromAPI = async (url) => {
    console.log("URL",`${BASE_URL}/${url}`);
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    console.log("DATA",data);
    return data
}