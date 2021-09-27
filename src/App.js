
import {Switch,Route} from "react-router-dom";
import Dashboard from './Componets/Dashboard';
import LinkPage from './Componets/LinkPage';
import PostPage from './Componets/PostPage';
import Navbar from "./Componets/Navbar";


function App() {
  return (
    <>
   <Navbar/>
    
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/Posts-Page" component={PostPage}/>
      <Route exact path="/Links-page" component={LinkPage}/>
    </Switch>

    </>
  );
}

export default App;
