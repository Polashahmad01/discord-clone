import React, { useEffect } from 'react';

import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Chat from './component/Chat/Chat';
import Login from './component/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './component/features/userSlice';
import { login, logout } from './component/features/userSlice';
import { auth } from './component/firebase/firebase';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
        {user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : (
          <>
            <Login />
          </>
        )}
    </div>
  );
}

export default App;
