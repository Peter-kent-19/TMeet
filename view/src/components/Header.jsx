// Import Link for navigation
import { Link } from 'react-router-dom';

// Define the Header component for the dashboard
export default function Header() {
    // Retrieve the 'currentUser' from localStorage to display personalized info
    const currentUserRaw = localStorage.getItem('currentUser');
    // Parse the user data or default to an empty object if not found
    const currentUser = currentUserRaw ? JSON.parse(currentUserRaw) : {};

    // Return the JSX for the header
    return (
        // Main wrapper container
        <div>
            {/* Top section with logo and user profile info */}
            <div className="px-4 flex items-center justify-between h-[80px] bg-white">
                <div>
                    {/* Project logo with custom styling */}
                    <h1 className="text-3xl logo">
                        TMeet
                    </h1>
                    {/* Personalized welcome message using the user's fullname */}
                    <p className="text-blue-500 pl-[3px]">
                        Hi, {currentUser.fullname || 'Guest'}
                    </p>
                </div>
                {/* Profile icons section */}
                <div className="flex gap-4">
                    {/* Placeholder for notification icon */}
                    <div className="h-[40px] w-[40px] rounded-[50%] bg-slate-200"></div>
                    {/* Placeholder for user profile image */}
                    <div className="h-[40px] w-[40px] rounded-[50%] bg-slate-200"></div>
                </div>
            </div>
            {/* Bottom navigation section */}
            <div className="py-4 text-xl bg-slate-200 flex justify-evenly">
                {/* Link to the main announcements page (home) */}
                <Link to="/">
                    <div className="">Announcements</div>
                </Link>
                {/* Link to the meetings management page */}
                <Link to="/meets">
                    <div className="text-slate-500">Meetings</div>
                </Link>
            </div>
        </div>
    )
}