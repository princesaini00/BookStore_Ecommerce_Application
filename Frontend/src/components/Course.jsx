import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${backendUrl}/book`);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-orange-600"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Welcome back! By logging in, you've unlocked access to a special section of our bookstore dedicated to paid courses. Here, you can dive deeper into the world of literature, explore new skills, and enrich your reading experience with expert-led content. Whether you're looking to expand your knowledge or discover something new, these courses are tailored to enhance your journey. Explore and enjoy the exclusive content designed just for you!
          </p>
          <Link to="/">
            <button className="mt-6 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
