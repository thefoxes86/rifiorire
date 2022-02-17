import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

import WOO_CONFIG from "utils/config/nextConfig";

import { filteredVariantPrice } from "utils/functions/functions";

/**
 * Displays all of the products as long as length is defined.
 * Does a map() over the props array and utilizes uuidv4 for unique key values.
 * @param {Object} products
 */
const IndexProductsLittle = ({ products, col }) => {
  return (
    <>
      <section className="container mx-auto bg-white">
        <div id="product-container" className="flex flex-wrap items-center">
          {products ? (
            products.map(
              ({
                databaseId,
                name,
                price,
                regularPrice,
                salePrice,
                onSale,
                slug,
                image,
                variations,
              }) => (
                <div
                  key={uuidv4()}
                  className="flex flex-row p-6 md:w-1/4 xl:w-1/4"
                >
                  <Link
                    href={`/prodotto/${encodeURIComponent(
                      slug
                    )}?id=${encodeURIComponent(databaseId)}`}
                  >
                    <a className="w-2/5 h-auto overflow-hidden">
                      {image ? (
                        <img
                          id="product-image"
                          className="object-contain transform hover:scale-110 duration-500 ease-in-out"
                          alt={name}
                          src={image.sourceUrl}
                        />
                      ) : (
                        <img
                          id="product-image"
                          className="object-contain transform hover:scale-110 duration-500 ease-in-out"
                          alt={name}
                          src={WOO_CONFIG.PLACEHOLDER_SMALL_IMAGE_URL}
                        />
                      )}
                    </a>
                  </Link>
                  <div className="flex flex-col items-start justify-start ml-5">
                    {/* Display sale price when on sale */}
                    {onSale && (
                      <>
                        <div className="flex justify-center">
                          <div className="pt-2 text-black font-thin text-2xl">
                            {variations && filteredVariantPrice(price)}
                            {!variations && salePrice}
                          </div>
                          <div className="pt-2 ml-2 text-black font-thin text-2xl line-through">
                            {variations && filteredVariantPrice(price, "right")}
                            {!variations && regularPrice}
                          </div>
                        </div>
                      </>
                    )}
                    {/* Display regular price when not on sale */}
                    {!onSale && (
                      <p className="pt-2 text-center text-black font-thin text-2xl">
                        {" "}
                        {price}
                      </p>
                    )}

                    <Link
                      href={`/prodotto/${encodeURIComponent(
                        slug
                      )}?id=${encodeURIComponent(databaseId)}`}
                    >
                      <a className="mt-auto mb-4">
                        <div className="flex justify-center pt-1">
                          <p className="text-black font-thin text-md text-center cursor-pointer">
                            {name}
                          </p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="mx-auto text-xl font-thin text-center text-gray-800 no-underline uppercase">
              Attualmente Non ci sono prodotti in questa categoria
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default IndexProductsLittle;
