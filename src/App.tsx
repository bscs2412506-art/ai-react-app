import { useState } from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

function App() {
  const [page, setPage] = useState<"dashboard" | "settings">("dashboard");

  return (
    <Layout onNavigate={setPage}>
      {page === "dashboard" ? <Dashboard /> : <Settings />}
    </Layout>
  );
}

export default App;