import Fylo from './Fylo';
import SocialDiv from './SocialDiv';
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" exact Component={Fylo}></Route>
            <Route path="/user"  Component={SocialDiv}></Route> 
        </Routes>
     </Router>
  );
}

export default App;
