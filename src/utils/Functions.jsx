const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";
import toast from "react-hot-toast";

export const signUp = async (data) => {
  const toastId = toast.loading("Signing up...");
  await axios
    .post(`${baseUrl}/users`, data)
    .then((res) => {
      toast.success(res.data.message, { id: toastId });
      localStorage.setItem("user", JSON.stringify(res.data.user));

      location = "/";
    })
    .catch((err) => {
      toast.error(err.response.data.message, { id: toastId });
    });
};

export const login = async (data) => {
  const toastId = toast.loading("Loging in...");
  await axios
    .post(`${baseUrl}/users/login`, data)
    .then((res) => {
      toast.success(res.data.message, { id: toastId });
      localStorage.setItem("user", JSON.stringify(res.data.user));

      location = "/";
    })
    .catch((err) => {
      toast.error(err.response.data.message, { id: toastId });
    });
};

export const createPin = async (pinData) => {
  const toastId = toast.loading("Creating pin...");
  await axios
    .post(`${baseUrl}/api/pins`, pinData)
    .then((res) => {
      toast.success(res.data.message, { id: toastId });
    })
    .catch((err) => {
      toast.error(err.response.data.message, { id: toastId });
    });
};

export const fetchUserPins = async (userId) => {
  await axios
    .get(`${baseUrl}/api/pins/user/${userId}`)
    .then((res) => {
      return res.data.pins;
    })
    .catch((err) => {
      console.log(err);
    });
};
