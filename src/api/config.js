import { service } from "./service";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async getRequest(URL,PARAMS) {
    return await service({
      method: "GET",
      url: URL,
      params: PARAMS,
    });
  },
  async postRequest(URL,DATA,PARAMS) {
    return await service({
      method: "POST",
      url: URL,
      data: DATA,
      params: PARAMS,
    });
  },
  async putRequest(URL,DATA,PARAMS) {
    return await service({
      method: "PUT",
      url: URL,
      data: DATA,
      params: PARAMS,
    });
  },
  async deleteRequest(PARAMS) {
    console.log('!!!');
    console.log(PARAMS);
    return await service({
      method: "DELETE",
      url: `/${PARAMS}`,
    });
  },
};
