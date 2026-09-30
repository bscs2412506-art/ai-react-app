import { useRef, useState } from "react";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    content: "This is the overview content.",
  },
  {
    id: "analytics",
    label: "Analytics",
    content: "This is the analytics content.",
  },
  {
    id: "settings",
    label: "Settings",
    content: "This is the settings content.",
  },
];

export function Tabs() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const moveFocus = (index: number) => {
    const nextIndex =
      (index + tabs.length) % tabs.length;

    tabRefs.current[nextIndex]?.focus();

    setActiveTab(tabs[nextIndex].id);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        moveFocus(index + 1);
        break;

      case "ArrowLeft":
        event.preventDefault();
        moveFocus(index - 1);
        break;

      case "Home":
        event.preventDefault();
        moveFocus(0);
        break;

      case "End":
        event.preventDefault();
        moveFocus(tabs.length - 1);
        break;
    }
  };

  return (
    <section>
      <h2>Tabs</h2>

      <div
        role="tablist"
        aria-label="Example tabs"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={
              activeTab === tab.id ? 0 : -1
            }
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(event) =>
              handleKeyDown(event, index)
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          tabIndex={
            activeTab === tab.id ? 0 : -1
          }
        >
          <p>{tab.content}</p>
        </div>
      ))}
    </section>
  );
}