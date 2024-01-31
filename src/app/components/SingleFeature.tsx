import Image from "next/image";

const SingleFeature = () => {
  return (
    <div className="flex flex-col">
      <Image src="/images/m.png" width={50} height={50} alt="feature-pic" />
      <h1 className="text-2xl text-white">ROYALTIES</h1>
      <p className="text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, ab! Quia
        magni non
      </p>
    </div>
  );
};

export default SingleFeature;
