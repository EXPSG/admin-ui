import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="w-60 bg-white shadow h-full p-4">
            <h1 className="text-2xl font-bold mb-6">Signage Admin</h1>

            <nav className="flex flex-col space-y-3">
                <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
                <Link to="/devices" className="hover:text-blue-600">Devices</Link>
                <Link to="/devices/register" className="hover:text-blue-600">Register Device</Link>
            </nav>
        </div>
    );
}
