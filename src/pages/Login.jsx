import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(AuthContext);

    const login = async (e) => {
        e.preventDefault();
        setError("");

        const loginUrl = "http://localhost:2223/expsg-admin-dashboard/api/unauth/v1/login";

        const res = await fetch(loginUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include", // VERY IMPORTANT
            body: JSON.stringify({ usernameOrEmail, password }),
        });

        if (res.ok) {
            await fetchUserDetails(); // load user info into context
            navigate("/dashboard");
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={login}
                className="bg-white p-8 rounded-lg shadow-lg w-96 border"
            >
                <h2 className="text-2xl mb-4 font-bold text-center">Admin Login</h2>

                {error && (
                    <div className="mb-3 text-red-600 text-center">{error}</div>
                )}

                <input
                    className="w-full p-2 border rounded mb-3"
                    placeholder="Username or Email"
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                />

                <input
                    className="w-full p-2 border rounded mb-3"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full p-2 bg-blue-600 text-white rounded">
                    Login
                </button>
            </form>
        </div>
    );
}
