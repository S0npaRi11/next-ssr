import {useEffect} from 'react'
import { useRouter } from 'next/router'


export default function Home() {

  useEffect(() => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    router.push('/tv-shows/avengers')
    
  },[])

  return (
    <div>
      {/* <h1> Next Rocks!!! </h1> */}
    </div>
  )
}
