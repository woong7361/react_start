import PropType from "prop-types"

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <div class="movie" key={id}>
            <img src={poster} alt={title} title={title}/>
            <h3 class="movie__title">{title}</h3>
            <h3 class="movie__year">{year}</h3>
            <h3 class="movie__summary">{summary}</h3>
            <ul class="genres">
                {genres.map((genre, index)=> (
                    <li key={index} class="genres__genre">{genre}</li>
                ))}
            </ul>
        </div> 
        
        
    )
}

Movie.propType={
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary:PropType.string.isRequired,
    poster:PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired,
}

export default Movie;