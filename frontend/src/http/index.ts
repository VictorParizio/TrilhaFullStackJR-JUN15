import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

export const http: AxiosInstance = axios.create({
  baseURL: "https://trilhafullstackjr-jun15-production.up.railway.app/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface APIError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

export const findByIdAPI = async (path: string, projectId: string) => {
  try {
    const response = await http.get(`${path}/${projectId}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    if (axiosError.response?.data?.message) {
      console.error(axiosError.response.data.message);
    } else {
      console.error("Erro do lado do servidor:", error);
    }
    throw axiosError;
  }
};

export const getAPI = async (path: string) => {
  try {
    const response = await http.get(path);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    if (axiosError.response?.data?.message) {
      console.error(axiosError.response.data.message);
    } else {
      console.error("Erro do lado do servidor:", error);
    }
    throw axiosError;
  }
};

export const postAPI = async <T>(
  path: string,
  objectData: object
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await http.post(path, objectData);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    if (axiosError.response?.data?.message) {
      throw new Error(axiosError.response.data.message);
    } else {
      console.error("Erro do lado do servidor:", error);
    }
    throw axiosError;
  }
};

export const updateByIdAPI = async (
  path: string,
  projectId: string,
  objectData: object
) => {
  try {
    const response = await http.put(`${path}/${projectId}`, objectData);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    if (axiosError.response?.data?.message) {
      console.error(axiosError.response.data.message);
    } else {
      console.error("Erro do lado do servidor:", error);
    }
    throw axiosError;
  }
};

export const deleteByIdAPI = async (path: string, projectId: string) => {
  try {
    const response = await http.delete(`${path}/${projectId}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    if (axiosError.response?.data?.message) {
      console.error(axiosError.response.data.message);
    } else {
      console.error("Erro do lado do servidor:", error);
    }
    throw axiosError;
  }
};
