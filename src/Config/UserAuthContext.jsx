//Created by Nagaditya Sri Abhiram
import { useContext, createContext, useEffect, useState } from "react";

import { AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification } from 'firebase/auth';
import { auth,db } from "./Config";
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const userContext = createContext();
export const useAuth = () => { return useContext(userContext) }

const UserAuthContext = ({ children }) => {
    const [error, setError] = useState("")
    const [currentuser, setuser] = useState()
    useEffect(
      () => {
        onAuthStateChanged(auth, user => {
          console.log(user)
          if (user) {
            setuser(user)
            console.log("Did you login?")
          }
          else {
            // alert("u are logout")
          }
        })
      }, [currentuser]
    )

    const UserLogin = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logout = () => {
        return signOut(auth)
    }

    const SignUp = async (email, password, FullName) => {
        setError("");
        createUserWithEmailAndPassword(auth, email, password).then(
          async (result) => {
            console.log(result)
            try {
              // const docRef = await addDoc(collection(db, "users"), {
              //   FullName,
              //   userId: `${result.user.uid}`
              // });
              const ref = doc(db, "userinfo", result.user.uid)
              const docRef = await setDoc(ref, { FullName })
              
              await sendEmailVerification(result.user)
              alert("Wellcome new User create successfully")
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }
        ).catch(err => {
          if (err.code === "auth/email-already-in-use") {
    
            setInterval(() => {
              setError("")
            }, 5000)
            setError("Email ID has already been Registered")
          }
          else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
    
            setInterval(() => {
              setError("")
            }, 5000)
            setError("The password must contain atleast 6 characters")
          }
    
          else {
            setError(err.message)
          }
        })
      }
      const value = {
        SignUp,
        error,
        currentuser,
        UserLogin,
        logout
      }
      return (
        <userContext.Provider value={value}>{children}</userContext.Provider>
      )

}

export default UserAuthContext;