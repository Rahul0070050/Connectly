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
    <section className="grid grid-cols-12 bg-background min-h-screen">
      <div className="col-span-2">
        <LeftSidebar />
      </div>
      <div className="col-span-10">
        <Navbar />
        <div className="grid grid-cols-12">
          <div className="col-span-9">{children}</div>
          <div className="col-span-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
