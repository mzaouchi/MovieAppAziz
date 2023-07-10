import CardMovie from "./CardMovie"

const ListMovie=({movies,setMovies})=>{
    return(
        <div className="aziz">
            {
                movies.map((el,i,t)=> <CardMovie key={el.id} el={el} movies={movies} setMovies={setMovies}/>)
            }
        </div>
    )
}

export default ListMovie