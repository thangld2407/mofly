import request from "./config";
const url = "https://course-api.com/react-store-products";
export function getProduct() {
  return request.getRequest(url);
}
