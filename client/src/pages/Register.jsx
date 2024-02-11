import { useState } from "react";

import "./Register.css"
import { useAuth } from "../store/auth";

export const Register=()=>
{
    const[user,setUser]=useState({

        username:"",
        email:"",
        password:""

    });
    const  {storeTokenInLS}=useAuth()
    //handling the input values
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ... user,
            [name]:value,
        });
    };
    //handling the submission of the form
    const handleSubmit= async (e)=>
    {
        e.preventDefault();
        console.log(user)
        try{

            const response=await fetch(`http://localhost:5000/api/auth/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),

        })
        //clearing the data after submit
        if(response.ok)
        {
            const res_data=await response.json();
            storeTokenInLS(res_data.token);
            setUser({username:"",
            email:"",
            password:""});
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
                <div className="section-registration">
                    <div className="registration-form">
                        <h1 className="main-heading">Registration</h1>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <div className="user">
                                <label htmlfor="username">Username</label>
                                <input 
                                type="text"  
                                name="username" 
                                placeholder="username"
                                id="username"
                                required
                                autoComplete="off"
                                value={user.username}
                                onChange={handleInput}
                                />
                            </div>
                            <div className="email">
                                <label htmlfor="email">Email</label>
                                <input 
                                type="text"  
                                name="email" 
                                placeholder="email"
                                id="email"
                                required
                                autoComplete="off"
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
                            <button type="submit">Register</button>
                            

                            
                        </form>
                    </div>
                </div>
            </main>
        </section>
    </>
}