import './App.css';
import { useEffect, useState } from 'react';
import Quotes from './components/Quotes';

function App() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        setQuotes(data)
        setLoading(false)
      })
  }, [])



  if (loading) {
    return '<p> Loading .... </p>'
  }



  return (
    <>
      <div className='h-screen flex items-center mx-auto justify-center bg-black  ' >

        <div className="w-1/2">
          <Quotes quotes={quotes} key={quotes.id}></Quotes>
        </div>

      </div >
    </>
  );
}

export default App;
