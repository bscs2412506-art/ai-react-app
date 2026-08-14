import { useState } from "react";

export default function SettingsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!name.trim()) {
    alert("Please enter your name");
    return;
  }

  if (!email.trim()) {
    alert("Please enter your email");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email");
    return;
  }

  if (!password) {
    alert("Please enter a password");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  alert("Settings saved successfully!");
};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <br />

      <label>
     <input
  type="checkbox"
  checked={darkMode}
  onChange={(e) => {
    const enabled = e.target.checked;
    setDarkMode(enabled);
    document.body.classList.toggle("dark-mode", enabled);
  }}
/>
        Dark Mode
      </label>

      <br />
      <br />

      <button type="submit">Save Settings</button>
    </form>
  );
}