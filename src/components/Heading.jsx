function Heading({ children, customStyle }) {
  return (
    <h1
      className={`font-poppins text-6xl font-extrabold leading-snug ${customStyle} max-[600px]:text-4xl max-[600px]:leading-[3rem]`}
    >
      {children}
    </h1>
  );
}

export default Heading;
