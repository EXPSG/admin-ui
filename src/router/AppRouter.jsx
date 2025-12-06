import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Devices from "../pages/Devices";
import RegisterDevice from "../pages/RegisterDevice";
import DeviceDetails from "../pages/DeviceDetails";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "../routes/ProtectedRoute";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Route */}
                <Route path="/login" element={<Login />} />

                {/* Redirect root to login */}
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Protected: Dashboard */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <MainLayout>
                                <Dashboard />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

                {/* Protected: Devices List */}
                <Route
                    path="/devices"
                    element={
                        <ProtectedRoute>
                            <MainLayout>
                                <Devices />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

                {/* Protected: Register Device */}
                <Route
                    path="/devices/register"
                    element={
                        <ProtectedRoute>
                            <MainLayout>
                                <RegisterDevice />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

                {/* Protected: Device Details */}
                <Route
                    path="/devices/:id"
                    element={
                        <ProtectedRoute>
                            <MainLayout>
                                <DeviceDetails />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}
