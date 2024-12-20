import { RouterProvider } from "react-router-dom";
import { routers } from "./routing/routing";

const App = () => {
  return <RouterProvider router={routers}></RouterProvider>;
};

export default App;
