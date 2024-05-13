import React, { useState } from "react";
import Logo from "../assets/logo.webp";

const Login = () => {

return (
    <>
    <section className="image-section">
        <div className="flex items-center justify-center bg-neutral-800 h-screen ">
          <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-lg bg-neutral-900 rounded-lg overflow-hidden px-8 pt-6 pb-8 mb-4">
          <img src={Logo} alt="Logo" className="h-14 w-auto " />
            <form>
              <div className="mb-4">
                <label
                  className="block text-white  text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Your Username"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Your Password"
                  required
                />
              </div>
              <div className="flex items-center justify-between text-center">
                <button
                  className="ml-40 rounded-lg text-white bg-black font-bold py-2 px-4 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
    </section>
    </>
  );
};

export default Login;