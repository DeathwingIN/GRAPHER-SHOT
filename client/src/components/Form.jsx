import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/submit-email", { email });
      alert("Email sent successfully!");
    } catch (error) {
      alert("Error sending email.");
    }
  };

  return (
    <section className=" mt-16 flex items-center justify-center px-5 md:px-0">
      <div className="md:grid md:grid-rows-4 text-white content-center md:pt-16 pt-10 px-10 bg-[#233942]">
        <div className="row-span-2 flex flex-col items-center justify-center md:space-y-0">
          <p className="md:text-[67px] text-[40px] font-cormorant text-center">
            Get more info other
          </p>
          <p className="md:text-[67px] text-[40px] font-cormorant text-center">
            discount prices
          </p>
        </div>

        <div className="md:grid md:grid-cols-3 flex items-center row-span-1 justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
            <div className="flex items-center border rounded mb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="p-2 flex-grow capitalize text-black"
                required
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-r"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex row-span-1 items-center justify-center">4545</div>
      </div>
    </section>
  );
}
