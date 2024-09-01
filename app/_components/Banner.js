import React from "react";
import Constant from "../_utils/Constant";

export default function Banner() {
  return (
    <>
      <section className="bg-slate-800 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-36 lg:flex lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-red-400 via-blue-100 to-green-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Upload, Save and Share
              <span className="sm:block"> your files, your way.</span>
            </h1>

            <p className="mx-auto text-slate-300 mt-4 max-w-xl sm:text-xl/relaxed">
              {Constant.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
