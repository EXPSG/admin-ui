import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  if (!user) return <h2 className="p-6 text-lg font-semibold">Loading...</h2>;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome, {user.username}
        </h2>
        <p className="text-sm text-gray-500">
          Overview of your admin account
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 max-w-lg">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Account details
        </h3>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-500">User ID</dt>
            <dd className="font-medium text-gray-900">{user.user_id}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Email</dt>
            <dd className="font-medium text-gray-900">{user.email}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
