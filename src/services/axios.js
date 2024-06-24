import axios from "axios";
import { toast } from "react-toastify";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshJWT,
  showToast,
}) => {
  try {
    const headers = isPrivate
      ? {
          Authorization: getAccessJWT(),
        }
      : null;
    const pending = axios({
      method,
      url,
      data,
      headers,
    });

    let response = {};

    if (showToast) {
      toast.promise(pending, {
        pending: "Please await",
      });

      response = await pending;
      toast[response.data.status](response.data.message);
    } else {
      response = await pending;
    }

    return response.data;
  } catch (error) {
    if (showToast && toast.error(error.message))
      return {
        status: "error",
        message: error.message,
      };
  }
};
const apiProcessWithToast = async (obj, func) => {
  const pending = func(obj);
  toast.promise(pending, {
    pending: "Please wait.....",
  });

  const respons = await pending;
  toast[respons.status](respons.message);
  return respons;
};
