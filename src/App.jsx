import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Title from "./components/Title";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";
import Reply from "./components/Reply";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/configureStore';


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
  {
    path: "/post/:id/comments",
    element: <Reply />,
  },
]);

function App() {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
       </PersistGate>
    </Provider>
  );
}

export default App;
