import React from "react";
import NumberFormat from "react-number-format";

export default function Cake(props) {
  let price = props.cake.price * props.cake.quantity;
  let mappedButtons = props.buttons.map((b, i) => (
    <button className={b.class} disabled={b.disable} key={i} onClick={b.cb}>
      {b.name}
    </button>
  ));

  return (
    <div className={props.class}>
      <img src={`${process.env.PUBLIC_URL}${props.cake.imgUrl}`} alt='cake' />
      <h2>{props.cake.name}</h2>
      <h3>{props.cake.flavor}</h3>
      <section className='inline-btns'>{mappedButtons}</section>
      <h4 className='checkout-margin'>
        <NumberFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={
            props.class === "cart-cake"
              ? `x${props.cake.quantity}- ${props.cake.name}: $`
              : `$`
          }
          isNumericString={true}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      </h4>
    </div>
  );
}
