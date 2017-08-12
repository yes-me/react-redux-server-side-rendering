import Home from "./Home";
import News from "./News";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/video",
    component: News
  }
];

export default routes;
