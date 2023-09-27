import Navbar from "./components/Navbar";
import Storeposts from "./components/Storeposts";
import Main from "./components/Main";
import Posts from "./components/Posts";
import { Route, Switch } from "react-router-dom";
import MissingPage from "./components/MissingPage";
import Books from "./components/Books";
import EditPage from "./components/EditPage";
import AddPost from "./components/AddPost";



const App = () => {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/posts">
          <Posts />
        </Route>

        <Route exact path="/posts/:id">
          <EditPage />
        </Route>

        <Route path="/books">
          <Books />
        </Route>

        <Route path="/addpost">
          <AddPost />
        </Route>

        <Route path="/Storeposts">
          <Storeposts/>
        </Route>

        <Route path="*" component={MissingPage} />
      </Switch>
    </main>
  );
};

export default App;
