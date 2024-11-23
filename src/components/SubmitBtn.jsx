import { useNavigation } from "react-router-dom";

/* eslint-disable react/prop-types */
const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting";
  return (
    <button className="btn btn-secondary btn-block" disabled={isSubmitting}>
      {" "}
      {isSubmitting ? (
        <>
          <span className="loading loading-dots"> sending...</span>
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitBtn;
