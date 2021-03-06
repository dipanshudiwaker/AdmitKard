import Add from './Component/Add';
import Search from './Component/Search';
import New from './New';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <New />
    <Routes>
        <Route exact path='/' element={<Add openAdd={true}/>} />
        <Route path='/Search' element={<Search/>} />
    </Routes>
    </Router>
  );
}

export default App;
