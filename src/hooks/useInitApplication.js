import requester from "../infra/http/Requester";
import { useToken } from "../redux/slices/Auth";

export const useInitApplication = () => {
  const token = useToken();
  requester.setToken(token);
};
