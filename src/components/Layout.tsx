import Sidebar from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Sidebar />

      <main>{children}</main>
    </div>
  );
}