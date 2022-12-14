export const ItemCount = ({ count, handleCount }) => {
  return (
    <div>
      <button
        onClick={() => handleCount("-")}
        className="btn btn-primary"
      >
        -
      </button>
      <span
        className="fs-4 fw-bolder text-justify"
      >
        {count}
      </span>
      <button
        onClick={() => handleCount("+")}
        className="btn btn-primary"
      >
        +
      </button>
    </div>
  );
};