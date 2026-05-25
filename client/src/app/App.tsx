import { Routes, Route } from 'react-router';
import Header from "./Header";
import Home from "./Home";
import Posts from "./Posts";

function App() {
  return (
    <>
      <Header />

      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
      
    </>
  )
}

export default App
