import React, { useState } from 'react'
import classes from "./Header.module.css"
import { useMotionValueEvent, useScroll } from 'framer-motion'
import DropdownComponent from './DropdownComponent';
import { IoListOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

export default function Header() {

    const {scrollY} = useScroll();

    const [yPosition, setYposintion] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
        setYposintion(latest)
    })

  return (
    <main className={classes["whole-header"]}>
      <header className={` ${yPosition>=50 ? classes["header-fixed"] : classes["header"]}`}>
        <h1 className={classes["logo-head"]}>ElectroBazaar</h1>
        {/* <img className={classes["logo"]} src={alibabaLogo} alt="Alibaba logo" /> */}
        <div  className={` ${yPosition>=390 ? classes["header-search-container"] : classes["header-search-container-not-visible"]}`}>
            <input className={classes["header-input"]} type="text" placeholder="Search for products" />
            <span className={classes["header-search-btn"]}>
              <FaSearch/>
              <span>Search</span>
            </span>
        </div>
        <ul className={classes["nav-list"]}>
            <li>
                Sign in
            </li>
            <li className={classes["signup"]}>
                Sign up
            </li>
        </ul>
      </header>

      <section className={classes["tabs-below-header"]}>
        <ul>
            <li><IoListOutline/><DropdownComponent title={"All categories"}/></li>
            <li><DropdownComponent title={"Featured selections"}/></li>
            <li><DropdownComponent title={"Trade Assurance"}/></li>
        </ul>
        <ul>
            <li><DropdownComponent title={"Buyer central"}/></li>
            <li><DropdownComponent title={"Help center"}/></li>
            <li><DropdownComponent title={"Get the app"}/></li>
            <li>Become a supplier</li>
        </ul>
      </section>
      <section className={classes["content-below-tabs"]}>
        <span className={classes["alibaba-para"]}>Learn about ElectroCart.com</span>
        <span className={classes["main-heading"]}>The leading B2B ecommerce platform for global trade</span>
        <div className={classes["search-container"]}>
            <input className={classes["input"]} type="text" placeholder="Search for products" />
            <span className={classes["search-btn"]}>
              <span><FaSearch size="1rem"/></span>
              <span>Search</span>
            </span>
        </div>
      </section>
    </main>
  )
}
