import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Title from "./components/Title";
import Post from "./components/Post1";
import PostDetail from "./components/PostDetail";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/store'

const router = createBrowserRouter([
  {
    path: "/post",
    element: (
      <div id="posts-container">
      <Title />
      <Post />
    </div>
    ),
  },
  {
    path: "/post/:id",
    element: <PostDetail />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
