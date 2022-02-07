import React from 'react';
import {Route, Routes} from "react-router-dom";
import UsersID from "../Pages/userID";
import Users from "../Pages/users";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Users/>}/>
      <Route exact path='/users/:id' element={<UsersID/>}/>
    </Routes>
  );
};

export default AppRouter;
