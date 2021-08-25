import Link from 'next/link'
import Image from 'next/image'
import {format} from 'date-fns'
import {FaStar} from 'react-icons/fa'
import styles from '../styles/MovieList.module.css'

const Card = ({ showData }) => {

    // console.log(showData.show.image)

    return (
        <div className={styles.movieCard}>
        {/* {show} */}
        <img className={styles.movieThumbnail} src={showData.show.image ? showData.show.image.medium : 'https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?w=1200&ssl=1'} alt={showData.show.name}/>
        <div className={styles.movieDetails}>
            <h2> <Link className={styles.movieTtitle} href={`/tv-shows/details/${showData.show.id}`}><a> {showData.show.name} </a></Link>  </h2>

             <p className={styles.movieRating}> <FaStar /> {showData.show.rating.average ? showData.show.rating.average : "--"} / 10 </p> 
            <p className={styles.movieLanguage}> <b> Language </b> :  {showData.show.language} </p>
            <div className={styles.movieGenre}> <b> Genres </b> : <ul> {showData.show.genres.map(g => (
                <li key={g}> {g} </li>
            )) }</ul>
            </div>
            <p className={styles.movieRuntime}> <b> Runtime </b> :  {showData.show.runtime ? showData.show.runtime : "--"} min</p>
            <p className={styles.moviePremered}> <b> Premiered </b>  :  {
                format(new Date(showData.show.premiered), 'do MMM, yyyy')
            } </p>
            <p className={styles.movieCountry}> <b> Country </b> :  {showData.show.network !== null ? showData.show.network.country.name : ""} </p>

        </div>
    </div>
    )
}

export default Card
