/* eslint-disable react/prop-types */

import { formatPrice, generateAmountOption } from "../utils";

const CartItem = ({ cartItem }) => {
  const { cartID, amount, image, price, company, productColor, title } =
    cartItem;
  return (
    <article
      key={cartID}
      className="flex flex-col sm:flex-row border-b border-base-300 gap-y-4 mb-12 pb-6 last:border-b-0 "
    >
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded object-cover sm:h-34 sm:w-34"
      />
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* COMPANY */}
        <h4 className="captitalize text-neutral-content text-sm">{company}</h4>
        {/* IMAGE */}
        <p className="flex items-center text-sm mt-2 capitalize gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          >
            {}
          </span>
        </p>
      </div>
      <div className="sm:ml-24">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="select select-bordered select-base select-xs mt-2"
          >
            {generateAmountOption(amount + 2)}
          </select>
        </div>

        {/* REMOVE */}
        <button className=" mt-2 link link-hover link-primary">remove</button>
      </div>
      {/* PRICE */}
      <p className=" font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
