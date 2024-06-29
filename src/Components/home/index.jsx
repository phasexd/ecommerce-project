import React from "react";
import { useAuth } from "../authContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="text-2xl font-bold pt-14">
        Hello{" "}
        {currentUser.displayName ? currentUser.displayName : currentUser.email},
        you are now logged in.
      </div>
      <div className="text-2xl font-bold pt-14">
      <Link className='text-sm text-blue-600 underline' to={'/about'}>About</Link>
      </div>
    </>
  );
};

export default Home;
