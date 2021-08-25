import { useRouter } from 'next/router'
import Head from 'next/head'
import {format} from 'date-fns'


import {FaStar} from 'react-icons/fa'

import styles from '../../../styles/MovieDetails.module.css'

const movieID = ({detail}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const {id }= router.query

    return (
        <>
        <Head>
            <title> {detail.name} </title>
            <meta type="description" content={detail.summery}/>
        </Head>

        <div className={`${styles.infoCard} ${styles.mgrid} ${styles.reverceGrid}`}>
           {/* <img src={detail.image.medium } alt={detail.name}/> */}
            <div className={styles.infoDetails}>
                <p className={styles.infoRating}> <FaStar /> {(detail.rating !== undefined && detail.rating.average !== null) ? detail.rating.average : "--"} / 10 </p>
                <h2 className={styles.infoTitle}>  {detail.name}  </h2>

                <p className={styles.infoLanguage}> <b> Language </b> :  {detail.language} </p>
                <div className={styles.infoGenre}> <b> Genres </b> : <ul> {detail.genres !== undefined && detail.genres.map(g => (
                    <li key={g}> {g} </li>
                    )) } </ul>
                </div>
                <p className={styles.infoRuntime}> <b> Runtime </b> :  {detail.runtime ? detail.runtime : "--"} min</p>
                <p className={styles.infoPremered}> <b> Premiered </b> :  {detail.premiered &&
                    format(new Date(detail.premiered), 'do MMM, yyyy')
                } </p>

                <p className={styles.infoCountry}> <b> Country </b> :  {(detail.network !== null && detail.network !== undefined) ? detail.network.country.name : ""} </p>


                <p className={styles.infoSummery}> <b> Summery </b> : <br /> {detail.summery} </p>
            </div>
                <img className={styles.infoThumbnail} src={ (detail.image !== null && detail.image !== undefined) ?  detail.image.medium : 'https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?w=1200&ssl=1'} alt={detail.name}/>

        </div> 
        </>
    )
}

export async function getServerSideProps(context) {
    const { params }  = context
    const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {detail : data}, // will be passed to the page component as props
    }
}

export default movieID
