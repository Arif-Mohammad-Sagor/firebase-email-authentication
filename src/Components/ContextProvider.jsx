
import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const userContext = createContext(null);
const auth = getAuth(app);

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = () => {
    return signOut(auth);
  }

  // observe auth state changed
  useEffect(() => {
   const unsubsrcibe =  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
   })

    return () => {
      return unsubsrcibe()
    }
  },[])

    const userInfo = {user,createUser,signIn,logOut}


  return (
    <userContext.Provider value={userInfo}>{children}</userContext.Provider>
  );
}

export default ContextProvider