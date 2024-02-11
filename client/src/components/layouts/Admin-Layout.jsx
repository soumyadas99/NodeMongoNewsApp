import { NavLink, Outlet } from "react-router-dom"
import './Admin-Layout.css'

export const AdminLayout=()=>{
    return  <>
    <div className="container">
        <header className="hd">
        <nav className="vertical">
        <div className="inside">
            
            <ul >
                
                <li><NavLink to='/admin/users'>Users</NavLink></li>
                <li><NavLink to='/admin/addnews'>Add News</NavLink></li>
                <li><NavLink to='/admin/viewnews'>View News</NavLink></li>
                
            </ul>
        </div>
            
        </nav>
        </header>
        <Outlet />

        
    </div>
    </>
    
}