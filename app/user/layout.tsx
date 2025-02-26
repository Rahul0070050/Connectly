import type { Metadata } from "next";
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
      {/* Left Sidebar - Stays Fixed */}
      <div className="col-span-2 sticky top-0 h-screen overflow-hidden">
        <LeftSidebar />
      </div>

      {/* Main Content - Scrolls */}
      <div className="col-span-10 flex flex-col h-screen">
        <Navbar />

        {/* Scrollable Content */}
        <div className="grid grid-cols-12 flex-grow overflow-y-auto">
          <div className="col-span-9">{children}</div>

          {/* Right Sidebar - Stays Fixed */}
          <div className="col-span-3 sticky top-0 h-[calc(100vh-96px)]">
            <RightSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
