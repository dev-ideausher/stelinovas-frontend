import FaqBox from "./FaqBox";
import ProductCard from "./ProductCard";

const Products = () => {
  const dummyDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, autem! Adipisci et facere illum nesciunt a itaque asperiores, ullam dicta enim porro repellendus! Atque quisquam dicta, tempora earum itaque nesciunt.";
  return (
    <div
      style={{
        backgroundImage: `url("/images/bg.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
      className="product-container flex flex-col bg-[#0f053b]"
    >
      <h1 className="text-center mb-10 pt-10">
        <span className="text-4xl text-white">OUR</span>{" "}
        <span className="text-4xl text-[#a88aff]">PRODUCTS</span>
      </h1>

      <div className="flex md:flex-row flex-col justify-evenly items-center">
        <div>
          <ProductCard
            title="SCNV GROW"
            description={dummyDescription}
            img="/images/prod1.png"
          />
        </div>
        <div>
          <ProductCard
            title="SCNV GROW"
            description={dummyDescription}
            img="/images/prod2.png"
          />
        </div>
        <div>
          <ProductCard
            title="SCNV GROW"
            description={dummyDescription}
            img="/images/prod3.png"
          />
        </div>
      </div>

      <div className="bg-faq-color mt-10 flex flex-col justify-evenly mx-7 rounded-xl">
        <h1 className="text-4xl text-white text-center mt-7 font-bold">FAQ</h1>
        <div className="flex md:flex-row flex-col justify-evenly items-center">
          <div className="mb-5">
            <FaqBox />
          </div>
          <div className="mb-5">
            <FaqBox />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-evenly items-center">
          <div className="mb-5">
            <FaqBox />
          </div>
          <div className="mb-5">
            <FaqBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
