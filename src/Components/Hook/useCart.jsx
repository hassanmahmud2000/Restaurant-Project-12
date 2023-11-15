import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../SheardItem/AuthProvider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/carts?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });
  return [cart, refetch];
};

export default useCart;
