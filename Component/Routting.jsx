import "./Component.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import withNavigate from "./UseNavigatess";
import ErrorComponent from "./ErrorComponent";
import ListComponent from "./List";

import withParams from "./useParamss";
import HomeComponent from "./HomeComponent";
import logoutt from "./logoutpage";

function TodoComponent() {
  const LoginwithNavigate = withNavigate(LoginComponent);
  // const HomewithNavigate = withNavigate(HomeComponent);
  const ErrorwithNavigate = withNavigate(ErrorComponent);
  const HomewithParams = withParams(HomeComponent);
  const LogoutwithNavigate = withNavigate(logoutt);

  return (
    <div className="todo">
      <Router>
        <div className="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <a class="navbar-brand" href="/">
                AK Esevai
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item"></li>
                </ul>
                <form class="d-flex">
                  <a className="btn btn-outline-primary logout" href="/logout">
                    LogOut
                  </a>
                </form>
              </div>
            </div>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<LoginwithNavigate />}></Route>
          <Route path="/login" element={<LoginwithNavigate />}></Route>
          <Route path="/home/:name" element={<HomewithParams />}></Route>
          <Route path="/list" element={<ListComponent />}></Route>
          <Route path="*" element={<ErrorwithNavigate />}></Route>
          <Route path="/logout" element={<LogoutwithNavigate />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default TodoComponent;
