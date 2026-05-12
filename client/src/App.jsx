import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Notes from "./pages/Notes";
import Pyq from "./pages/Pyq";
import { Toaster } from "sonner";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      {/* Toast */}
      <Toaster position="top-right" richColors closeButton expand />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
          <Route path="/notes" element={<Notes />} />
          <Route path="/pyq" element={<Pyq />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Auth Pages Without Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
