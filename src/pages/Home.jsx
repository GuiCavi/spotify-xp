import { useSelector } from "react-redux";

import { useToken } from "../redux/slices/Auth";

const Home = () => {
  const token = useToken();

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
