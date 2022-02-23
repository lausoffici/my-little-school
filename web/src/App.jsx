import React from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Students from "./pages/Students";
import CoursesList from "./pages/Courses";
import Cash from "./pages/Cash";
import ErrorPage from "./pages/ErrorPage";
import Student from "./pages/Student";

const routes = [
  { path: "/", element: <Students /> },
  { path: "/students/:id", element: <Student /> },
  { path: "/courses", element: <CoursesList /> },
  { path: "/cash", element: <Cash /> },
  { path: "*", element: <ErrorPage /> },
];

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="content">
        <Switch>
          {routes.map(({ path, element }, index) => (
            <Route key={index} exact path={path}>
              {element}
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default App;
