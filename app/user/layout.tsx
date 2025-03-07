import LeftSidebar from "../_components/Sidebar/LeftSidebar";
import Navbar from "../_components/header/Navbar";
import RightSidebar from "../_components/Sidebar/RightSidebar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative grid grid-cols-12 bg-background h-screen">
      <div className="col-span-2 sticky top-0 h-screen overflow-hidden">
        <LeftSidebar />
      </div>
      <div className="col-span-10 flex flex-col h-screen">
        <Navbar />
        <div className="grid grid-cols-12 flex-grow overflow-y-auto">
          <div className="col-span-9">{children}</div>
          <div className="col-span-3 sticky top-0 h-[calc(100vh-96px)]">
            <RightSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
