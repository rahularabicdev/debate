import { Outlet } from "react-router";

import { RoomHeader, RoomSidebar } from "../components";

const RoomLayout = () => {
  return (
    <>
      <main className="relative flex h-screen bg-gray-900">
        <RoomSidebar />
        <div className="w-[calc(100%_-_300px)] overflow-y-auto overflow-x-hidden">
          <RoomHeader />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RoomLayout;
