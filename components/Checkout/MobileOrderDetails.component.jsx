import { v4 as uuidv4 } from 'uuid';

import MobileOrderDetailsCartItem from './MobileOrderDetailsCartItem.component';

const MobileOrderDetails = ({ cart }) => {
  return (
    <section className="block py-8 bg-white lg:hidden xl:hidden md:hidden">
      <div className="flex items-center justify-center">
        <div className="p-6 mx-auto mt-5">
          <table className="flex flex-row flex-no-wrap mx-auto my-5 overflow-hidden rounded-lg sm:bg-white sm:shadow-lg">
            <thead className="text-black">
              {cart.products.length &&
                cart.products.map(() => (
                  <tr
                    key={uuidv4()}
                    className="flex flex-col mb-2 bg-white rounded-l-lg flex-no wrap sm:table-row sm:rounded-none sm:mb-0"
                  >
                    <th className="p-3 text-left">Navn</th>
                    <th className="p-3 text-left">Pris</th>
                    <th className="p-3 text-left">Antall</th>
                    <th className="p-3 text-left">Totalpris</th>
                  </tr>
                ))}
            </thead>
            <tbody className="flex-1 sm:flex-none">
              {cart.products.length &&
                cart.products.map((item) => (
                  <MobileOrderDetailsCartItem
                    key={item.productId}
                    item={item}
                    products={cart.products}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MobileOrderDetails;
