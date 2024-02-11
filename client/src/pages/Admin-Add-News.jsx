import "./Admin-Add-News.css"
import { useState } from "react"
import { useMatch, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";


export const AdminAddNews=()=>
{
    const {authorizationToken}=useAuth();
    const[news,setNews]=useState({

        headline:"",
        date:"",
        location:"",
        content:"",

    });


    //handling the input values
    const navigate=useNavigate();
    //const  {storeTokenInLS}=useAuth()

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setNews({
            ... news,
            [name]:value,
        });
    };
    //handling the submission of the form
    const handleSubmit=async (e)=>
    {
        e.preventDefault();
        try{

            const response=await fetch(`http://localhost:5000/api/admin/addnews`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:authorizationToken
            },
            body:JSON.stringify(news),

        })
        //clearing the data after submit
        console.log(response)
        if(response.ok)
        {
            alert("Data added in Database")
            const res_data=await response.json();
            //console.log(res_data.token)
            //storeTokenInLS(res_data.token);
            setNews({headline:"",date:"",location:"",content:""})
            navigate("/admin")
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
                        <h1 className="main-heading">Add News</h1>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            <div className="headline">
                                <label htmlfor="email">Headline</label>
                                <input 
                                type="text"  
                                name="headline" 
                                placeholder="headlinie"
                                id="headline"
                                required
                                autoComplete="false"
                                value={news.headline}
                                onChange={handleInput}
                                />
                            </div>
                            <div className="date">
                                <label htmlfor="password">Date</label>
                                <input 
                                type="text"  
                                name="date" 
                                placeholder="date"
                                id="date"
                                required
                                autoComplete="false"
                                value={news.date}
                                onChange={handleInput}
                                />
                            </div>
                            <div className="location">
                                <label htmlfor="location">Location</label>
                                <input 
                                type="text"  
                                name="location" 
                                placeholder="location"
                                id="location"
                                required
                                autoComplete="false"
                                value={news.location}
                                onChange={handleInput}
                                />
                            </div>
                            <div className="content">
                                <label htmlfor="content">Description</label>
                                <input 
                                type="text"  
                                name="content" 
                                placeholder="content"
                                id="content"
                                required
                                autoComplete="false"
                                value={news.content}
                                onChange={handleInput}
                                />
                            </div>
                            <button type="submit">Add</button>
                            

                            
                        </form>
                    </div>
                </div>
            </main>
        </section></>
}