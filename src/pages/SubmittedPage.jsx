import { useContext } from "react";
import { SubmittedBanner } from "../components/SubmittedBanner";
import { MyContext } from "../MyContext";
import { CustomButton } from "../components/CustomButton";

import './submitted-page.css';

const SubmittedPage = () => {
  const { setIsSubmitted } = useContext(MyContext);

  const handleClick = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="submitted-page-container">
      <SubmittedBanner />
      <CustomButton
        onClick={handleClick}
        type='button'
        title='Back'
      />
    </div>
  );
};

export default SubmittedPage;