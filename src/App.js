import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export default function App() {
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700", children: [_jsx(Header, {}), _jsx(RouteProbe, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/privacy", element: _jsx(Privacy, {}) }), _jsx(Route, { path: "/terms", element: _jsx(Terms, {}) }), _jsx(Route, { path: "/cookies", element: _jsx(Cookies, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }), _jsx(Footer, {})] }));
}
