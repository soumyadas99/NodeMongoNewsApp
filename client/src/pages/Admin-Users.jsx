import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import './Admin-Users.css'
export const AdminUsers=()=>
{
    const {authorizationToken}=useAuth();
    const [users,setUsers]=useState([]);
    const getAllUsersData=async ()=>{

        try{
            const response=await fetch('http://localhost:5000/api/admin/users',{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                    
                }
            })
            const data=await response.json();
            setUsers(data);
        }
        catch(error){
            console.log(error)
        }
    }
        
    useEffect(()=>{
        getAllUsersData()
    })
    return <>
    <section className='admin-users-sections'>
        <div className="container">
            <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((curUser,index)=>{
                    return <tr>
                        <td>{curUser.username}</td>
                        <td>{curUser.email}</td>
                        <td>{curUser.password}</td>
                    </tr>
                })}
                </tbody>
            </table>
            
        </div>

    </section>




    
    </>
}