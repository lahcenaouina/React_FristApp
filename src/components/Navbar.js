import {FaMeta} from "react-icons/fa6";
import {Link} from "react-router-dom";
import '../assets/styles/Navbar.css'
import useWindowSize from "../hooks/useWindowSize";
import {FaLaptopCode, FaTablet} from "react-icons/fa";
import {useStoreActions, useStoreState} from 'easy-peasy';

const Navbar = () => {

  const { width  } = useWindowSize();
  const Posts = useStoreState((state) => state.Posts)
  return (
    <nav id='Navbar13'  className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link  className="navbar-brand" to="/">
        <FaMeta style={{fontSize: "40px" , color:'dodgerblue'}}  />
        {Posts.length}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/posts">
            Posts
          </Link>
          <Link className="nav-link active" aria-current="page" to="/books">
            Books
          </Link>
          <Link className="nav-link active" aria-current="page" to="/storeposts">
            Posts Store API
          </Link>
          <Link className="nav-link active" aria-current="page" to="/addpost">
            Add Post
          </Link>
          <Link className="nav-link active" aria-current="page" to="/books">
            {width > 1000 ? <FaLaptopCode/> : <FaTablet/>}
          </Link>
        </div>
      </div>
    </div>
  </nav>
  )
};

export default Navbar;
