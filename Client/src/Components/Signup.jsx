import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // success ya error ke liye

  // input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const res = await axios.post(`${API_URL}/api/users/register`, formData);

      setMessage(`✅ Signup successful! Welcome ${res.data.fullName}`);
      setIsSuccess(true);
      setFormData({ email: "", fullName: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Something went wrong");
      setIsSuccess(false);
    }
  };

  return (
    <>
      <div className="flex w-[900px] rounded-4xl overflow-hidden">
        {/* left div */}
        <div className="w-1/3 bg-[#084B3E] p-10 flex flex-col justify-between">
          <div>
            <img
              src="/src/assets/text_logo.png"
              alt="Logo"
              className="mb-8 w-32"
            />
          </div>
          <div className="text-[#F9E2BA] text-2xl font-medium leading-relaxed">
            Say hello to global food and beverage producers and suppliers, all
            in one place
          </div>
        </div>

        {/* Right div */}
        <div className="w-2/3 bg-white p-10 space-y-15">
          <h2 className="text-2xl font-bold mb-6">
            Let’s get started <br />
            with a few simple steps
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter Your Email"
                className="border-b border-gray-400 focus:outline-none focus:border-green-600 py-2 w-full "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">FullName</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter Your Full Name"
                className="border-b border-gray-400 focus:outline-none focus:border-green-600 py-2 w-full "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter Your Password"
                className="border-b border-gray-400 focus:outline-none focus:border-green-600 py-2 w-full "
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white rounded-lg py-3 font-semibold cursor-pointer hover:bg-green-600"
            >
              Sign up
            </button>
          </form>

          {/* ✅ Yahan message show hoga */}
          {message && (
            <div
              className={`mt-4 text-sm font-medium ${
                isSuccess ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </div>
          )}

          <div className="mt-6 text-gray-500 text-sm">
            By signing up, you agree to our{" "}
            <span className="text-green-600 cursor-pointer underline">
              Terms of Service.
            </span>{" "}
            Already have an account?{" "}
            <span className="text-green-600 cursor-pointer underline font-semibold">
              Log in
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
