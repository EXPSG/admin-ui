import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {

  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-6 rounded-full bg-blue-600" />
          <div className="font-semibold text-lg text-gray-800">
            Admin Dashboard
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Logged in as 
           <span className="font-semibold">
            {user?.username ?? "Unknown..."}
          </span>
        </div>
      </div>
    </div>
  );
}
