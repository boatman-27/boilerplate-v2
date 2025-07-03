import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    // <div className="overflow-hidden flex items-center justify-center h-screen  text-white backdrop-blur-lg">
    //   <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    //     <div className="text-center">
    //       <p className="text-base font-semibold text-amber-600">404</p>
    //       <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
    //         Page not found
    //       </h1>
    //       <p className="mt-6 text-pretty text-lg font-medium text-white sm:text-xl/8">
    //         Sorry, we couldn’t find the page you’re looking for.
    //       </p>
    //       <div className="mt-10 flex items-center justify-center gap-x-6">
    //         <NavLink
    //           to="/"
    //           className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-amber-600"
    //         >
    //           Go back home
    //         </NavLink>
    //         <NavLink to="/contact" className="text-sm font-semibold text-white">
    //           Contact support <span aria-hidden="true">&rarr;</span>
    //         </NavLink>
    //       </div>
    //     </div>
    //   </main>
    // </div>
    //
    <div className="flex flex-col items-center justify-center h-screen bg-black px-6 overflow-hidden">
      <div className="text-center">
        <h1 className="crt-text text-green-400 text-6xl font-mono font-extrabold mb-6 select-none">
          404
        </h1>
        <p className="crt-text text-green-400 text-2xl font-mono font-semibold select-none">
          Page Not Found
        </p>
        <p className="crt-text text-green-400 text-2xl font-mono font-semibold mb-6 select-none">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
      <NavLink
        to="/"
        className="crt-button rounded-md px-8 py-3 text-lg font-semibold select-none"
      >
        Go back home
      </NavLink>{" "}
    </div>
  );
};

export default NotFound;
