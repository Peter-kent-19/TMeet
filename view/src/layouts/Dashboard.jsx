import {Outlet, Navigate} from 'react-router-dom'

export default function Dashboard() {
    const id = '';
    
    return id 
        ? <Outlet />
        : <Navigate to="/auth" />;
    
}