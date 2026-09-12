import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
      <h2>My Dashboard</h2>

      <nav>
       <NavLink to="/">Dashboard</NavLink>
<NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}