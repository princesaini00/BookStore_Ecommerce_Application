import axios from "axios";
import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Subscribe(email) {
  axios
    .post(`${backendUrl}/user/subscribe`, { email })
    .then((response) => {
      if (response.status === 200) {
        toast.success("Thank you! You've been subscribed.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    })
    .catch((error) => {
      console.error(error);
      toast.error("Failed to submit. Please check your network connection.");
    });
}

export default Subscribe;
