import React from "react";

export default function Form() {
  return (
    <section className="mt-16 flex items-center justify-center px-5 md:px-0">
      <div className="md:grid md:grid-rows-4 text-white content-center md:pt-16 pt-10  md:px-48 bg-[#233942]">
        <div className="row-span-2 flex flex-col items-center justify-center md:space-y-0 pb-8">
          <p className="md:text-[67px] text-[28px] font-cormorant text-center">
            Get more info other
          </p>
          <p className="md:text-[67px] text-[28px] font-cormorant text-center">
            discount prices
          </p>
        </div>
        <div className=" flex items-center justify-center row-span-1 text-center h-full">
          <form className="flex flex-col justify-center items-center md:w-full max-w-md">
            <div className="flex border-none rounded  gap-2 p-1 mx-5 md:mx-0 bg-white md:w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 flex-grow capitalize text-black md:w-full"
                required
              />
              <button
                type="submit"
                className="bg-[#233942] p-3 text-white rounded-r"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="flex row-span-1 items-center justify-center px-8 mt-5 md:mt-0 pb-8 md:text-[18px] text-[12px] font-lato text-center">
          * By clicking “Submit” button, you agree to our Terms and that you
          have read our Data Use Policy.
        </div>
      </div>
    </section>
  );
}
