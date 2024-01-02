import React from 'react'
import classes from "./Cards.module.css"
import { BsUiChecksGrid } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { TbPackageExport } from "react-icons/tb";
import { BsPersonLinesFill } from "react-icons/bs";

export default function Cards() {
  return (
    <section className={classes["cards-container"]}>
      <div className={classes["card"]}>
        <div className={classes["icon-container"]}>
          <BsUiChecksGrid/>
        </div>
        <h1>Millions of business offerings</h1>
        <p>Explore products and suppliers for your business from millions of offerings worldwide.</p>
      </div>
      <div className={classes["card"]}>
        <div className={classes["icon-container"]}>
          <BsShieldCheck/>
        </div>
        <h1>Assured quality and transactions</h1>
        <p>Ensure production quality from verified suppliers, with your orders protected from payment to delivery.</p>
      </div>
      <div className={classes["card"]}>
        <div className={classes["icon-container"]}>
          <TbPackageExport/>
        </div>
        <h1>One-stop trading solution</h1>
        <p>Order seamlessly from product/supplier search to order management, payment, and fulfillment.</p>
      </div>
      <div className={classes["card"]}>
        <div className={classes["icon-container"]}>
          <BsPersonLinesFill/>
        </div>
        <h1>Personalized trading experience</h1>
        <p>Get curated benefits, such as discounted samples and dedicated support, tailored to your business growth stage.</p>
      </div>
    </section>
  )
}
