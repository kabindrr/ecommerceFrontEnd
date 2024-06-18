import { apiProcessor } from "../../services/axios";

const userEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/users";

export const postNewUser = (data) => {
  const obj = {
    url: userEP,
    method: "post",
    data,
    // isPrivate: true,
  };
  return apiProcessor(obj);
};
export const verifyUserLink = (data) => {
  const obj = {
    url: userEP + "/user-verification",
    method: "post",
    data,
    // isPrivate: true,
  };
  return apiProcessor(data);
};
