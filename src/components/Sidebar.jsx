import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 bg-white shadow h-full p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Express Signage</h1>

      <nav className="flex-1 flex flex-col space-y-2 text-sm">
        <Link
          to="/dashboard"
          className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          Dashboard
        </Link>
        <Link
          to="/devices"
          className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          Devices
        </Link>
        <Link
          to="/devices/register"
          className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          Register Device
        </Link>
      </nav>
    </div>
  );
}
