import Image from "next/image";
import Navbar from "./components/header/Navbar";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import RightSidebar from "./components/Sidebar/RightSidebar";

export default function Home() {
  return (
    <section className="grid grid-cols-12 bg-background min-h-screen">
      <div className="col-span-2">
        <LeftSidebar />
      </div>
      <div className="col-span-10">
        <Navbar />
        <div className="grid grid-cols-12">
          <div className="col-span-9"></div>
          <div className="col-span-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
