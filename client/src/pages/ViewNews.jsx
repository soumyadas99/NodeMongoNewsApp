import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import './Admin-Users.css'

export const ViewNews=()=>
{
    const {authorizationToken}=useAuth();
    const [users,setUsers]=useState([]);
    const getAllUsersData=async ()=>{

        try{
            const response=await fetch('http://localhost:5000/api/admin/viewnews',{
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
        <h1>News Data</h1>
      </div>
      <div className="container admin-users">
        <table>
          <thead>
            <tr>
              <th>Headline</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
              <th>Actions</th> {/* New column for edit and delete buttons */}
            </tr>
          </thead>
          <tbody>
            {users.map((curUser, index) => {
              return (
                <tr key={index}>
                  <td>{curUser.headline}</td>
                  <td>{curUser.date}</td>
                  <td>{curUser.location}</td>
                  <td>{curUser.content}</td>
                  <td>
                    <button onClick={() => handleEdit(curUser.id)}>Edit</button>
                    <button onClick={() => handleDelete(curUser.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>




    
    </>
}