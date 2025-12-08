import { useState } from "react";

export default function RegisterDevice() {
  const [deviceId, setDeviceId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const registerDevice = async (e) => {
    e.preventDefault();
    setResult(null);
    setError("");

    if (!deviceId.trim()) {
      setError("Device ID cannot be empty");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:2223/expsg-admin-dashboard/api/clients/v1/devices/register/${deviceId}`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (!res.ok) {
        setError("Failed to register device");
        return;
      }

      const data = await res.json();
      setResult(data);
      setDeviceId("")
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow border">
      <h2 className="text-xl font-bold mb-4">Register Device</h2>

      <form onSubmit={registerDevice}>
        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Enter Device ID"
          value={deviceId}
          onChange={(e) => setDeviceId(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Register
        </button>
      </form>

      {error && (
        <p className="text-red-600 mt-3">{error}</p>
      )}

      {result && (
        <div className="mt-5 p-3 border rounded bg-gray-50">
          <h3 className="font-bold">Device Registered Successfully</h3>
          <p><strong>Device ID:</strong> {result.deviceId}</p>
          <p><strong>Auth Key:</strong> {result.authKey}</p>
          <p><strong>Registered At:</strong> {result.registeredAt}</p>
          <p><strong>Registered By:</strong> {result.registeredBy}</p>
        </div>
      )}
    </div>
  );
}
