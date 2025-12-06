export default function Header() {
    return (
        <div className="bg-white shadow p-4 flex justify-between">
            <div className="font-semibold text-lg">Admin Dashboard</div>

            <div className="text-gray-600">
                Logged in as <b>Client</b>
            </div>
        </div>
    );
}
