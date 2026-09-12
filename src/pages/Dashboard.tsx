import StatsCard from "../components/StatsCard";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome back! Here's an overview of your account.</p>

      <div className="stats-grid">
        <StatsCard
          title="Users"
          value="1,240"
          description="+12% this month"
        />

        <StatsCard
          title="Revenue"
          value="$24,500"
          description="+8% this month"
        />

        <StatsCard
          title="Orders"
          value="320"
          description="+15% this month"
        />
      </div>
    </div>
  );
}