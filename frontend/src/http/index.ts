import axios from "axios";

export const http = axios.create({
  baseURL: "https://trilhafullstackjr-jun15-production.up.railway.app/",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

type PostAPIProps = {
  path: string;
  objectData: object
};

export const postAPI = async ({ path, objectData }: PostAPIProps) => {
  try {
    const response = await http.post(path, objectData);
    return response.data;
  } catch (error: any) {
    if (error?.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      console.log("Erro do lado do servidor: " + error);
    }
    throw error;
  }
};
