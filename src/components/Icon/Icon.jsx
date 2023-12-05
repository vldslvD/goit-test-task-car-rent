const Icon = ({ onClick, children, selected, ...allyProps }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        selected={selected}
        {...allyProps}
      >
        {children}
      </button>
    </>
  );
};

export default Icon;
