import { Link } from "react-router-dom";

export default function DeviceCard({ device }) {
    return (
        <div className="bg-white p-4 shadow rounded border flex justify-between">
            <div>
                <div className="text-lg font-semibold">{device.deviceId}</div>
                <div className="text-gray-600 text-sm">
                    Status: {device.registered ? "Registered" : "Unregistered"}
                </div>
            </div>

            <Link
                to={`/devices/${device.deviceId}`}
                className="text-blue-600"
            >
                Details →
            </Link>
        </div>
    );
}
