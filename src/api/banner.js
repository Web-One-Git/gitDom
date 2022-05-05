import request from "./request";

export async function getBanners() {
  console.log(await request.get("/api/banner"))
  return await request.get("/api/banner");
}

