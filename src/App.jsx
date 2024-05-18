import { useState, useEffect } from 'react'
import Form from './Form'
import Table from './Table'
import Content from './Content'
import './index.css'

function App() {
  const [items, setItem] = useState([])
  const [url, setUrl] = useState('users')
  const API = 'https://jsonplaceholder.typicode.com/'

  useEffect(()=>{
    const getRequest = async () => {
      try{
        const response = await fetch(`${API}${url}`)
        const data = await response.json()
        setItem(data)
      }
      catch(err){
        console.error(err)
      }
    }
    getRequest()

  }, [url])



  return (
    <div className='App'> 
      <Form 
        req = {url}
        setReq = {setUrl}
      />
      <Table 
        items = {items}
      />
      {/* <Content
        items={items}
      /> */}
    </div>
  )
}

export default App
