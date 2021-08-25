import {useEffect} from 'react'
import { useRouter } from 'next/router'


export default function Home() {

  const router = useRouter()
  useEffect(() => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    router.push('/tv-shows/avengers')
    
  },[])

  return (
    <div>
      <p> Redirecting... </p>
    </div>
  )
}
