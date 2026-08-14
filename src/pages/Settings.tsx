import SettingsForm from "../components/SettingsForm";

export default function Settings() {
  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <p>Manage your account settings and preferences.</p>

      <div className="settings-form">
        <SettingsForm />
      </div>
    </div>
  );
}