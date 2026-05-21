import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Notes from "./pages/Notes";
import Pyq from "./pages/Pyq";
import Profile from "./pages/Profile";
/* Company Pages */
import About from "./pages/company/About";
import Contact from "./pages/company/Contact";
import Career from "./pages/company/Career";
import Blog from "./pages/company/Blog";
/* Legal Pages */
import Privacy from "./pages/legal/Privacy";
import TermsConditions from "./pages/legal/TermsConditions";
import Cookie from "./pages/legal/Cookie";
import Security from "./pages/legal/Security";
/* Support Pages */
import Support from "./pages/support/Support";
import Sitemap from "./pages/support/Sitemap";
import SystemStatus from "./pages/support/SystemStatus";

import { Toaster } from "sonner";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import OAuthSuccess from "./pages/OAuthSuccess";

function App() {
  return (
    <>
      {/* Toast */}
      <Toaster position="top-right" richColors closeButton expand />

      <ScrollToTop />

      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/pyq" element={<Pyq />} />
          <Route path="/profile" element={<Profile />} />

          {/* Protected Route */}
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />

          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          {/* Legal */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/cookies" element={<Cookie />} />
          <Route path="/security" element={<Security />} />
          {/* Support */}
          <Route path="/support" element={<Support />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/status" element={<SystemStatus />} />
        </Route>

        {/* Auth Pages Without Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
      </Routes>
    </>
  );
}

export default App;
