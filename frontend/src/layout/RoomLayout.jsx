import { Outlet } from "react-router";

import { RoomSidebar } from "../components";

const RoomLayout = () => {
  return (
    <>
      <main className="relative flex h-screen">
        <RoomSidebar />
        <div className="w-[calc(100%_-_300px)] overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RoomLayout;
