import { Card } from "antd";

const OrderCart = ({ item }) => {
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
      <button className="uppercase btn btn-outline border-t-0 border-l-0 border-r-0 bg-slate-50 border-2 border-b-[#BB8506] hover:text-[#BB8506] my-2">
        add to cart
      </button>
    </Card>
  );
};

export default OrderCart;
