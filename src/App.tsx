// src/App.tsx
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-[200vh] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
      <Header />
      <main className="pt-16">{/* content */}</main>
    </div>
  );
}
