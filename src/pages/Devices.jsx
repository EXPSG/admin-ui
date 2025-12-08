import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Devices() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDevices = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:2223/expsg-admin-dashboard/api/clients/devices/v1",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (res.ok) {
        const data = await res.json();
        setDevices(data);
      }
    } catch (err) {
      console.error("Failed to fetch devices:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadDevices();
  }, []);

  return (
    <div className="bg-white p-5 rounded shadow border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Registered Devices</h2>
        <button
          onClick={loadDevices}
          className="px-3 py-1 bg-orange-400 text-white rounded"
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <p>Loading devices...</p>
      ) : devices.length === 0 ? (
        <p>No devices found.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Device ID</th>
              <th className="border p-2">Association ID</th>
              <th className="border p-2">Registered At</th>
              <th className="border p-2">Registered By</th>
              <th className="border p-2">Auth Key</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((d, index) => (
              <tr key={index}>
                <td className="border p-2">
                  <Link to="/devices" 
                    className="block px-3 py-2 rounded-md text-blue-700 hover:bg-gray-300 hover:text-blue-400">
                    {d.device_id}
                  </Link>                 
                  </td>
                <td className="border p-2">{d.association_id}</td>
                <td className="border p-2">{d.registered_at}</td>
                <td className="border p-2">{d.registered_by}</td>
                <td className="border p-2">{d.keys[0].auth_key}</td>
                <td className="border p-2">
                {/* <button
                  onClick={loadDevices}
                  className="px-2 py-1 bg-blue-400 text-white rounded"
                >
                  Activate
                </button> */}
                 <label>
                  <input
                    type="checkbox"
                    className="block px-3 py-2 rounded-md text-blue-700"
                    checked={d.keys[0].active}
                    readOnly 
                  />
                </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
