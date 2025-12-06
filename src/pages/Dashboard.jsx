import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  if (!user) return <h2 style={{ padding: 20 }}>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user.username}</h2>

      <div style={{ marginTop: "10px" }}>
        <p><strong>User ID:</strong> {user.user_id}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}
