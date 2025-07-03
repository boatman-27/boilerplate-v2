import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <Outlet />
    </div>
  );
};

export default AppLayout;
