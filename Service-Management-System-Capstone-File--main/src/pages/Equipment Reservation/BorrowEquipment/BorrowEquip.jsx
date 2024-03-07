/* eslint-disable no-unused-vars */
import React from "react";
import BorrowCSS from "./BorrowCSS.module.css";
import { useNavigate } from "react-router-dom";
import BEimage from "../../../assets/placeholder.jpg";

const BorrowEquip = () => {
  const nav = useNavigate();

  return (
    <>
      <h1 className={BorrowCSS.heading}>List of Equipments</h1>

      <div className={BorrowCSS.container}>
        <div className={BorrowCSS.box}>
          <div className={BorrowCSS.imgbox}>
            <img className={BorrowCSS.img} src={BEimage} alt="" />
          </div>

          <div className={BorrowCSS.text}>
            <p>Laptop</p>
          </div>

          <button className={BorrowCSS.button} onClick={() => nav("create")}>
            Book Now
          </button>
        </div>

        <div className={BorrowCSS.box}>
          <div className={BorrowCSS.imgbox}>
            <img className={BorrowCSS.img} src={BEimage} alt="" />
          </div>

          <div className={BorrowCSS.text}>
            <p>Tablet</p>
          </div>

          <button className={BorrowCSS.button} onClick={() => nav("create")}>
            Book Now
          </button>
        </div>

        <div className={BorrowCSS.box}>
          <div className={BorrowCSS.imgbox}>
            <img className={BorrowCSS.img} src={BEimage} alt="" />
          </div>

          <div className={BorrowCSS.text}>
            <p>Smartphone</p>
          </div>

          <button className={BorrowCSS.button} onClick={() => nav("create")}>
            Book Now
          </button>
        </div>

        <div className={BorrowCSS.box}>
          <div className={BorrowCSS.imgbox}>
            <img className={BorrowCSS.img} src={BEimage} alt="" />
          </div>

          <div className={BorrowCSS.text}>
            <p>Camera</p>
          </div>

          <button className={BorrowCSS.button} onClick={() => nav("create")}>
            Book Now
          </button>
        </div>

        <div className={BorrowCSS.box}>
          <div className={BorrowCSS.imgbox}>
            <img className={BorrowCSS.img} src={BEimage} alt="" />
          </div>

          <div className={BorrowCSS.text}>
            <p>Laptop</p>
          </div>

          <button className={BorrowCSS.button} onClick={() => nav("create")}>
            Book Now
          </button>
        </div>

        <div className={BorrowCSS.box}>
          <div className={BorrowCSS.imgbox}>
            <img className={BorrowCSS.img} src={BEimage} alt="" />
          </div>

          <div className={BorrowCSS.text}>
            <p>Tablet</p>
          </div>

          <button className={BorrowCSS.button} onClick={() => nav("create")}>
            Book Now
          </button>
        </div>

        <div className={BorrowCSS.box}>
          <div className={BorrowCSS.imgbox}>
            <img className={BorrowCSS.img} src={BEimage} alt="" />
          </div>

          <div className={BorrowCSS.text}>
            <p>Smartphone</p>
          </div>

          <button className={BorrowCSS.button} onClick={() => nav("create")}>
            Book Now
          </button>
        </div>

        <div className={BorrowCSS.box}>
          <div className={BorrowCSS.imgbox}>
            <img className={BorrowCSS.img} src={BEimage} alt="" />
          </div>

          <div className={BorrowCSS.text}>
            <p>Camera</p>
          </div>

          <button className={BorrowCSS.button} onClick={() => nav("create")}>
            Book Now
          </button>
        </div>

        <div className={BorrowCSS.box}>
          <div className={BorrowCSS.imgbox}>
            <img className={BorrowCSS.img} src={BEimage} alt="" />
          </div>

          <div className={BorrowCSS.text}>
            <p>Tablet</p>
          </div>

          <button className={BorrowCSS.button} onClick={() => nav("create")}>
            Book Now
          </button>
        </div>

        <div className={BorrowCSS.box}>
          <div className={BorrowCSS.imgbox}>
            <img className={BorrowCSS.img} src={BEimage} alt="" />
          </div>

          <div className={BorrowCSS.text}>
            <p>Smartphone</p>
          </div>

          <button className={BorrowCSS.button} onClick={() => nav("create")}>
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default BorrowEquip;
