import { Card } from "antd";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../SheardItem/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../../Hook/useCart";

const OrderCart = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [,refetch] = useCart()
  const navigate = useNavigate();

  const orderHandler = (food) => {
    if (user && user.email) {
      // User thakle data send korbo to DB
      console.log(user, user.email);
      const cartItem = {
        menuId: food._id,
        name:food.name,
        email: user.email,
        image: food.image,
        price: food.price,
      };

      // useEffect(() => {
      //   fetch("http://localhost:5000/carts", {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(cartItem),
      //   })
      //     .then((res) => {
      //       console.log(res);
      //     })
      //     .then((data) => {
      //       console.log(data);
      //     });
      // }, []);
      axios.post('http://localhost:5000/carts' ,cartItem )
        .then(res=>{
          const data =res.data
          console.log(data);
          if(data.acknowledged){
            Swal.fire({
              title: `${food.name}`,
              text: "Successfully Add to Cart",
              icon: "success"
            });
            // Refetch dia Data aber fetching kora hoy
            refetch();
            
          }
        })
    } else {
      Swal.fire({
        title: "Please Log in",
        text: "Then You Can Add to Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signup", { state: { from: location } });
        }
      });
    }
  };
  return (
    <Card
      className=" text-center"
      hoverable
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={item.image} />}
    >
      <p className="bg-black text-white absolute right-0 top-0 px-4 py-1 mt-2 rounded-l-2xl shadow-lg">
        $ {item.price}
      </p>
      <h2 className="text-2xl font-semibold">{item.name}</h2>
      <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
      <button
        onClick={() => orderHandler(item)}
        className="uppercase btn btn-outline border-t-0 border-l-0 border-r-0 bg-slate-50 border-2 border-b-[#BB8506] hover:text-[#BB8506] my-2"
      >
        add to cart
      </button>
    </Card>
  );
};

export default OrderCart;
