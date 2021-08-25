import Card from '../../../components/Card'
import Head from 'next/head'
import styles from '../../../styles/Layout.module.css'

const index = ({data}) => {

    return (
        <>

<       Head>
            <title> {'Avengers'} </title>
            <meta type="description" content={'List of all Avengers TV shows'}/>
        </Head>

        <div className={styles.container}>
        <div className={`${styles.grid} ${styles.mgrid}`}>
            {data.map(s => (
                <Card key={s.show.id} showData={s} />
            ))}
        </div>

    </div>
    </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=avengers`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {data}, // will be passed to the page component as props
    }
}

export default index
