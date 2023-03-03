import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Home from "./pages/Home"
import App from "./App"
import { indexLoader} from "./loaders";
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home/>} loader={indexLoader}/>
      </Route>
    )
  );
  
  export default router