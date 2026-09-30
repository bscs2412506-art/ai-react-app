import { useRef, useState } from "react";
import { Modal } from "./Modal";
import { Tabs } from "./Tabs";
import { Disclosure } from "./Disclosure";

export function Playground() {
  const [modalOpen, setModalOpen] = useState(false);

  const modalTriggerRef =
    useRef<HTMLButtonElement>(null);

  return (
    <main>
      <h1>Accessible Component Playground</h1>

      <section>
        <h2>Modal Dialog</h2>

        <button
          ref={modalTriggerRef}
          type="button"
          onClick={() => setModalOpen(true)}
        >
          Open modal
        </button>

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          triggerRef={modalTriggerRef}
        />
      </section>

      <section>
        <Tabs />
      </section>

      <section>
        <Disclosure />
      </section>
    </main>
  );
}