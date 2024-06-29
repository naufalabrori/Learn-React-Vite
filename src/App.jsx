import { GlobalContext } from "./context/global-context";
import { router } from "./routers";
import { RouterProvider } from "react-router-dom";

function App() {
  const user = {
    username: "Naufal Abrori",
  };

  return (
    <>
      <div className="mt-2 ml-5">
        <GlobalContext.Provider value={user}>
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
