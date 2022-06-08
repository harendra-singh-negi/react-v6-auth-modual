import { Route, Routes } from "react-router-dom";
import Auths from "./auth";
import MainPage from "./modual";
import NotFoundPage from './modual/NotFoundPage';
const App = () => {
  const curentRol = "ADMIN";
  // const curentRol = "MANAGER";
  // const curentRol = "AGENT";
  // const curentRol = "USER";
  const curentRolData = Auths.filter(auth => auth.role === curentRol)[0];
  const giveAccess = Auths.filter(auth => curentRolData.access.includes(auth.key));
  return (
    <Routes>
      <Route path="/" element={<MainPage />} >
        {
          giveAccess.map((list, i) => <Route path={`${(list.role).toLowerCase()}/*`} element={list.filePath} key={i} />
          )}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
