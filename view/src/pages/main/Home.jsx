
// Import common components
import Header from './../../components/Header.jsx';
import { useState } from 'react';

// Define the Home component
export default function Home() {
    // Retrieve current user
    const currentUserRaw = localStorage.getItem('currentUser');
    const currentUser = currentUserRaw ? JSON.parse(currentUserRaw) : {};
    
    // Manage announcements in state
    const [announcements, setAnnouncements] = useState([
        { id: 1, title: 'School Assembly', content: 'Assembly at 8 AM sharp.' },
        { id: 2, title: 'Holiday Notice', content: 'School closed on Friday.' }
    ]);
    const [newAnn, setNewAnn] = useState('');

    // Handle Principal adding a new announcement
    //const addAnnouncement = () => {
    //    if (newAnn.trim()) {
    //        setAnnouncements([...announcements, { id: Date.now(), title: 'New Announcement', content: newAnn }]);
    //        setNewAnn('');
    //    }
    //};

    return (
        <div className="bg-slate-100 min-h-[100vh] overflow-auto">
            
            {/* Render the header */}
            {currentUser.isPrincipal 
                ? <Header isPrincippal="true" />
                : <Header isPrincippal="false" />
            }

            {/* Announcements grid */}
            <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {announcements.map(ann => (
                    <div key={ann.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-lg font-bold text-slate-700">{ann.title}</h2>
                        <p className="text-slate-500 mt-2">{ann.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}