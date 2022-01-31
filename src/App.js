import { Container } from "@mui/material";
import Beauty from "./components/Beauty/Beauty";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import UniversityStudentDetail from "./components/UniversityStudentDetail/UniversityStudentDetail";
import ChairmenMessage from "./components/ChairmenMessage/ChairmenMessage";
import CricketPlayer from "./components/CricketPlayer/CricketPlayer";
import HelpMe from "./components/HelpMe/HelpMe";
import UniversityStudent from "./components/UniversityStudent/UniversityStudent";

function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/help-me">
            <HelpMe/>
          </Route>
          <Route path="/cricket">
            <CricketPlayer/>
          </Route>
          <Route path="/chairman-msg">
            <ChairmenMessage/>
          </Route>
          <Route path="/beauty">
            <Beauty/>
          </Route>
          <Route exact path="/university-student">
            <UniversityStudent/>
          </Route>
          <Route path="/university-student/:nickname">
            <UniversityStudentDetail/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
