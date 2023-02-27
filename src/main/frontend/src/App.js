import React, {useEffect, useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import axios from 'axios';
import Home from './pages/Home';
import About from "./pages/About";
import Counter from "./pages/Counter"

function App() {
  const [hello, setHello] = useState('')
  useEffect(() => {
      console.log('useEffect 호출됨.');
    axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);
  

    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            백엔드에서 가져온 데이터입니다 : {hello}
            <Counter/>
        </div>
    );
}

export default App;






// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
