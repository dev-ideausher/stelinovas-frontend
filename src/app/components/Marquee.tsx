const Marquee = ({ text, size }: any) => {
  return (
    <div className="marquee flex items-center">
      <div>
        <span className={`${size}`}>{text}</span>
        <span className={`${size}`}>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
