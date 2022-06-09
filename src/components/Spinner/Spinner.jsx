import { useIsFetching } from "react-query";
import "./Spinner.scss";

const Spinner = () => {
  const isFetching = useIsFetching();

  return (
    <>
      {isFetching ? (
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Spinner;
