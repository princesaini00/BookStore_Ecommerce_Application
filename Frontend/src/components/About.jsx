import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Ensure correct path
import Footer from "./Footer"; // Ensure correct path

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <main className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            About <span className="text-orange-600">Us! :)</span>
          </h1>
          <p className="mt-12 text-gray-700">
            Welcome to our platform! At [Your Company Name], we are dedicated to
            providing exceptional services and resources to our community. Our
            mission is to deliver high-quality content and experiences that
            inspire, educate, and empower our users. We offer a range of
            services, including [briefly describe key services or products],
            designed to meet the needs of individuals and organizations alike.
            Our team is passionate about [briefly describe team’s expertise or
            mission]. We believe in the power of [mention core values or
            principles], and we strive to uphold these values in everything we
            do. Thank you for being a part of our journey. We are excited to
            have you with us and look forward to helping you achieve your goals.
            If you have any questions or need assistance, please don’t hesitate
            to reach out to us. We’re here to support you every step of the way.
          </p>
          <Link to="/">
            <button className="mt-6 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition duration-300">
              Back
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
