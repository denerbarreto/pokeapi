import { QueryClient } from "react-query";
import toast from "react-hot-toast";

export function queryErrorHandler(error) {
  const message =
    error instanceof Error
      ? error.toString().replace(/^Error|AxiosError:\s*/, "")
      : "Error connecting to the server";
  toast.error(message);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
    },
  },
});
