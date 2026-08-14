type SidebarProps = {
  onNavigate: (page: "dashboard" | "settings") => void;
};

export default function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside>
      <h2>My Dashboard</h2>

      <nav>
        <button onClick={() => onNavigate("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => onNavigate("settings")}>
          Settings
        </button>
      </nav>
    </aside>
  );
}