import React from "react";
import { useAuth } from "../authContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="min-h-screen">
        <div className="h-screen w-full bg-custom-bg bg-cover bg-center pt-5 mt-12">
          <div className="text-2xl font-bold p-5 mt-5 ml-5 rounded-xl bg-slate-50 m-3 w-1/2">
            Hello{" "}
            {currentUser.displayName
              ? currentUser.displayName
              : currentUser.email}
            , you are now logged in.
          </div>
          <div className="text-2xl font-bold pt-14">
            <Link className="text-sm text-blue-600 underline" to={"/about"}>
              About
            </Link>
          </div>
        </div>
        <div className="h-screen w-full bg-custom-bg2 bg-cover bg-center mt-4">
          next
        </div>
      </div>
    </>
  );
};

export default Home;
