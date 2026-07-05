
// Import the common Header component
import Header from './../../components/Header.jsx';

// Define the Meetings component to show scheduled or past meetings
export default function Meetings() {
    // Mock data for meetings with tagged teachers
    const meetings = [
        { id: 1, title: 'Department Meeting', time: '10:00 AM', tags: ['Math Dept', 'Physics Dept'] },
        { id: 2, title: 'Staff Briefing', time: '2:00 PM', tags: ['All Teachers'] }
    ];

    // Return the JSX structure for the meetings page
    return (
        // Main container with light background and scrollability
        <div className="bg-slate-100 min-h-[100vh] overflow-auto">
            {/* Render the header */}
            <Header />
            
            {/* Main content area grid for meeting cards */}
            <div className="p-4 grid gap-4 md:grid-cols-2">
                {meetings.map(meeting => (
                    // Individual meeting card
                    <div key={meeting.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-xl font-bold text-slate-800">{meeting.title}</h2>
                        <p className="text-blue-500 font-semibold">{meeting.time}</p>
                        
                        {/* Tags section for teachers */}
                        <div className="mt-4 flex gap-2 flex-wrap">
                            {meeting.tags.map(tag => (
                                <span key={tag} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}