import { useState } from "react";

export function Disclosure() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <h2>Disclosure</h2>

      <button
        type="button"
        aria-expanded={open}
        aria-controls="disclosure-content"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Hide details" : "Show details"}
      </button>

      <div
        id="disclosure-content"
        hidden={!open}
      >
        <p>
          This content can be expanded and collapsed
          with the keyboard.
        </p>
      </div>
    </section>
  );
}