import { Card } from 'antd';

const RecommendCard = ({ item }) => {
  return (
    <Card
      className='mx-20 text-center'
      hoverable
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src={item.image}
        />
      }
    >
        <h2 className='text-2xl font-semibold'>{item.name}</h2>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <button className='uppercase btn btn-outline border-b-[#BB8506] hover:text-[#BB8506] my-2'>add to cart</button>
    </Card>
  );
};

export default RecommendCard;
