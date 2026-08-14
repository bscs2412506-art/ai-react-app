import Sidebar from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
  onNavigate: (page: "dashboard" | "settings") => void;
};

export default function Layout({ children, onNavigate }: LayoutProps) {
  return (
    <div>
      <Sidebar onNavigate={onNavigate} />

      <main>{children}</main>
    </div>
  );
}