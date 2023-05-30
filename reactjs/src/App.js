import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div class="container">
      Hello whats up
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
