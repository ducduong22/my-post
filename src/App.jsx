import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Title from "./components/Title";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";
import Comment from "./components/Comment";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/configureStore";

const router = createBrowserRouter([
  {
    path: "/post",
    element: (
      <div id="posts-container">
        <Post />
      </div>
    ),
  },
  {
    path: "/post/:id",
    element: <PostDetail />,
  },
  {
    path: "/post/:id/comments",
    element: <Comment />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Title />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
