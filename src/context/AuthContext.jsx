import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);   // <-- NEW

  const fetchUserDetails = async () => {
    try {
      const res = await fetch(
        "http://localhost:2223/expsg-admin-dashboard/api/clients",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Fetch user failed:", err);
      setUser(null);
    }

    setLoading(false); // <-- NEW
  };

  // Restore session on page refresh
  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, fetchUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
}
