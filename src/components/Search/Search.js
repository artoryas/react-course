import { useSearchParams } from "react-router-dom"

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const message = searchParams.get('message');

  function updateQueryString() {
    setSearchParams({
      message,
      page: 8
    })
  }

  return (
    <section> 
    <h1>
      Searching for {message}...
    </h1>
    <button onClick={updateQueryString}>
      Update url query string
    </button>
    </section>
    
  )
}