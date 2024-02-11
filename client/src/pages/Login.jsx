import "./Login.css"
import { useState } from "react"
import { useMatch, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Login=()=>
{
    const[user,setUser]=useState({

        email:"",
        password:""

    });


    //handling the input values
    const navigate=useNavigate();
    const  {storeTokenInLS}=useAuth()

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ... user,
            [name]:value,
        });
    };
    //handling the submission of the form
    const handleSubmit=async (e)=>
    {
        e.preventDefault();
        try{

            const response=await fetch(`http://localhost:5000/api/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),

        })
        //clearing the data after submit
        console.log(response)
        if(response.ok)
        {
            alert("User logged in")
            const res_data=await response.json();
            console.log(res_data.token)
            storeTokenInLS(res_data.token);
            setUser({email:"",password:""})
            navigate("/")
        }
        else{
            alert("Invalid credentials")
        }
        
        
        }
        catch(error)
        {
            console.error(error);
        }

    }

    return <>
     <section>
            <main>
                <div className="section-login">
                    <div className="login-form">
                        <h1 className="main-heading">Login</h1>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <div className="email">
                                <label htmlfor="email">Email</label>
                                <input 
                                type="text"  
                                name="email" 
                                placeholder="email"
                                id="email"
                                required
                                autoComplete="false"
                                value={user.email}
                                onChange={handleInput}
                                />
                            </div>
                            <div className="pass">
                                <label htmlfor="password">Password</label>
                                <input 
                                type="text"  
                                name="password" 
                                placeholder="password"
                                id="password"
                                required
                                autoComplete="false"
                                value={user.password}
                                onChange={handleInput}
                                />
                            </div>
                            <button type="submit">Login</button>
                            

                            
                        </form>
                    </div>
                </div>
            </main>
        </section></>
}