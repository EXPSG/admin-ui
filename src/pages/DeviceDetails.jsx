import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDevice } from "../api/deviceApi";

export default function DeviceDetails() {
    const { id } = useParams();
    const [device, setDevice] = useState(null);

    useEffect(() => {
        getDevice(id).then((res) => setDevice(res.data));
    }, [id]);

    if (!device) return <div>Loading...</div>;

    return (
        <div>
            <h1 className="text-xl font-semibold mb-3">Device Details</h1>

            <div className="bg-white p-4 border shadow rounded">
                <p><b>ID:</b> {device.deviceId}</p>
                <p><b>Registered:</b> {device.registered ? "Yes" : "No"}</p>
                <p><b>Auth Key:</b> {device.authKey || "N/A"}</p>
                <p><b>Registered At:</b> {device.registeredAt || "N/A"}</p>
            </div>
        </div>
    );
}
