
const apiKey = 'api_key=771fc8a7ddddd341e8e56061fe5a1457';
const base_URL = 'https://api.themoviedb.org/3';
const api_URL = base_URL+'/discover/movie?sort_by=popularity.desc&'+apiKey;


const data = fetch(api_URL).then( (res)=>{ return res.json } ).catch( (err)=>{console.log(err)} )


export default data;