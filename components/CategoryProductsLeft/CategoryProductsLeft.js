import Link from "next/link";
import ArrayCategory from "components/SVG/ArrowCategory.component";
import IndexProducts from "components/Product/IndexProducts.component";

const CategoryProductsLeft = ({ title, img, link, products }) => {
  return (
    <section className="grid grid-cols-6 mt-72 md:grid-cols-12">
      <div className="col-span-6 h-96 bg-primary relative flex flex-col justify-center items-center overflow-x-visible mb-20">
        <h3 className="text-white text-6xl absolute font-thin tracking-wide mb-5 z-10 md:pl-30">
          {title}
        </h3>
        <Link href={link}>
          <a>
            <ArrayCategory />
          </a>
        </Link>
        <img
          className="w-2/4 bottom-10 z-0 md:w-2/4 md:left-2/3 md:absolute md:bottom-10"
          src="./images/img-category.png"
        />
      </div>
      <div className="md:col-span-1"></div>
      <div className="col-span-6 md:col-span-5">
        {products && <IndexProducts col={2} products={products} />}
      </div>
    </section>
  );
};

export default CategoryProductsLeft;
