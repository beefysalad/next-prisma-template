// test.ts
import api from "@/lib/axios";
import { handleApiError } from "../error-handler";

interface testResponse {
  id: number;
  key: string;
  modifiedAt: string;
  message: string;
  value: number;
}
export const getTestdata = async (): Promise<testResponse> => {
  try {
    const response = await api.get("/test");
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const testMutationFn = async () => {
  try {
    const response = await api.post("/test");
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
