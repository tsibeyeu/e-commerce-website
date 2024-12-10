/* eslint-disable react/prop-types */

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-base-200 pb-5 ">
      <h2 className="font-medium capitalize tracking-wider text-3xl ">
        {" "}
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
