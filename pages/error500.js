import Head from 'next/head'

const error500 = () => {
    return (
        <>
        <Head>
            <title> Error : Page not found </title>
        </Head>
            <div style={{textAlign: 'center'}}>
                <h1> Error 500 </h1>
            </div>
        </>
    )
}

export default error500
