// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function RouteProbe() {
  const loc = useLocation();
  console.log("[router] path:", loc.pathname);
  return null;
}
// then render <RouteProbe /> under <Header />


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
      <Header />
      <RouteProbe />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
