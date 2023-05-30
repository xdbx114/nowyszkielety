import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link} from 'react-router-dom';
import Home from './menu/home';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Strona główna</Link>
        </li>

      </ul>

    </nav>
    <div class="container">
        Hello whats up
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div></>
  );
}

export default App;
