import React ,{useState, useEffect}  from 'react'
import '../style/Card.css'

const Card =  (searchText) => {
 
    const [movies, setMovies] = useState([])   
   
 
    const apiKey = 'api_key=771fc8a7ddddd341e8e56061fe5a1457';
    const base_URL = 'https://api.themoviedb.org/3';
    const api_URL = base_URL+'/discover/movie?sort_by=popularity.desc&'+apiKey;
    const imgAPi = 'https://image.tmdb.org/t/p/w1280'

    const Search_API = "https://api.themoviedb.org/3/search/movie?api_key=771fc8a7ddddd341e8e56061fe5a1457&query="

    const setRatingColor = (vote)=>{

            if(vote <= 5 ){
                return "ratingGreen";
            }

            else if(vote > 5 && vote <=7.5 ){
                return "ratingOrange";
            }

            if(vote > 7.5 ){
                return "ratingRed";
            }

    }

    useEffect(  () => {
        
      
        fetch(api_URL)
            .then((res)=> res.json())
            .then((data)=> {
                // console.log(data.results)
                setMovies(data.results);
            });
  

    }, []);

    // console.log(searchText.searchValue)
    // console.log(searchText.searchButton)
   
    if(searchText.searchButton === "On"){
      
        
        
            fetch(Search_API+searchText.searchValue)
                .then((res)=> res.json())
                .then((data)=> {
                    // console.log(data.results)
                    setMovies(data.results);
                });
      
    
    }

    


    return (
     <>              
         {
            movies.length > 0 && movies.map((movie)=>{
                return (
                    <div className="cardContainer" id={movie.id} key={movie.id} >

                    <div className="upperCardContainer">
                        <img src={imgAPi+movie.poster_path} alt="" />
                    </div>
    
                    <div className="lowerCardContainer">
                        <div className="title"> {movie.original_title} </div>
                        <div className="rating"> <span className={ setRatingColor(movie.vote_average) } > {movie.vote_average} </span> </div>
                    </div>
    
                    <div className="overview">
                        <h3>Overview</h3>
                        <p>
                       {movie.overview}
                        </p>
                    </div>
    
    
                </div>
                )
            })
         }

     
     </>
    )
}

export default Card;
