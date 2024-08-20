import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${backendUrl}/user/signup`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
        <div className="relative w-full max-w-lg p-8 bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg glass">
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            &times;
          </button>

          <h3 className="text-2xl font-bold text-center text-orange-600 mb-8">
            Signup
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your fullname"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white bg-opacity-70 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500 block mt-2">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white bg-opacity-70 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500 block mt-2">
                  This field is required
                </span>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white bg-opacity-70 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500 block mt-2">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Signup
              </button>
              <p className="text-sm text-gray-600">
                Have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="underline text-blue-500 hover:text-blue-600"
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
