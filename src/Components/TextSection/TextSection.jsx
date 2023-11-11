import cef from "../../assets/home/chef-service.jpg";
const TextSection = () => {
  return (
    <div className="mx-20 text-center flex items-center justify-center mt-[140px]">
      <div>
        <img src={cef} alt="" />
        <div className="bg-[#FFF] text-white -mt-64 mx-auto  w-[850px] h-[330px]">
          <div className="text-center justify-center items-center bg-[#FFF] ">
            <h2 className="text-5xl font-normal">Bistro Boss</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
