import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe =auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }else {
        //logged out
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={user ? <HomeScreen /> : <LoginScreen />} />
        <Route path="/profile" element={user ? <ProfileScreen /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
