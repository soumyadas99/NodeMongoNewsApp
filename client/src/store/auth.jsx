import {createContext, useContext, useEffect, useState} from "react"


export const AuthContext=createContext();


export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem('token'))
    
    const authorizationToken=`Bearer ${token}`;

    let isLoggedIn=!!token;

    const storeTokenInLS=(serverToken)=>{
        return localStorage.setItem("token",serverToken)
    }

    
    //tackling logout functionality

    const LogoutUser=()=>{
        setToken("")
        localStorage.removeItem("token")
         // Navigate to the login page
    }


    const userAuthentication=async ()=>{
        try{
               const response =await fetch('http://localhost:5000/api/auth/user'
               ) 
        }
        catch(error)
        {
            console.log("error during fetching users data")
        }
    }

    useEffect(()=>{
        userAuthentication();
    },[])



    return <AuthContext.Provider value={{isLoggedIn, LogoutUser,storeTokenInLS,authorizationToken}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth=()=>{
    return useContext(AuthContext);
}

