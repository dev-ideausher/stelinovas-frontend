import Image from "next/image";

const ProductCard = ({ img, title, description }: any) => {
  return (
    <div className="product-card flex flex-col items-center">
      <Image src={img} width={352} height={350} alt="prod1" />
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-2 text-[#a88aff]">{title}</h1>
        <p className="text-white text-xs">{description}</p>
      </div>
      <button className="product-btn">
        <p className="product-btn-text">VIEW NOW</p>
      </button>
    </div>
  );
};

export default ProductCard;
