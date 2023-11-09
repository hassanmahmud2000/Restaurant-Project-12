const SectionTitle = ({heder,subHeader}) => {
  return (
    <div>
      <p className="text-center text-[#D99904] py-3">
        {subHeader}
      </p>
      <div className="mb-12">
        <hr className="w-3/12 mx-auto mb-1 border-y-2" />
        <h2 className="text-center font-normal text-4xl">{heder}</h2>
        <hr className="w-3/12 mx-auto mt-1 border-y-2" />
      </div>
    </div>
  );
};

export default SectionTitle;
