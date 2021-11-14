import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {
  const [posts, setPosts] = useState([])
  const fetchPosts = async () => {
    const response = await axios('http://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  

  return (
    <div className="App">
      {posts.map((post, id) => (
        <h1 key={id}>{post.title}</h1>
      ))}
    </div>
  );
}

export default App;
