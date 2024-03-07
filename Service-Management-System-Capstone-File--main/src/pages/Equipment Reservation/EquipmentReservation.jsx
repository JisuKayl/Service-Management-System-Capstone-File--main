// eslint-disable-next-line no-unused-vars
import React from "react";
import EquipReserveCss from "./EquipmentReservation.module.css";
import { useNavigate } from "react-router-dom";
import BEimage from "../../assets/placeholder.jpg";
import PRimage from "../../assets/placeholder.jpg";
import REimage from "../../assets/placeholder.jpg";

const EquipmentReservationPage = () => {
  const nav = useNavigate();

  return (
    <>
      <h1 className={EquipReserveCss.heading}>Equipment Reservation</h1>

      <div className={EquipReserveCss.container}>
        <div className={EquipReserveCss.box}>
          <div className={EquipReserveCss.img}>
            <img className={EquipReserveCss.main_imgs} src={BEimage} alt="" />
          </div>
          <div className={EquipReserveCss.text}>
            <p>Borrow Equipment</p>
          </div>
          <button
            className={EquipReserveCss.info}
            onClick={() => nav("borrow")}
          >
            More Info
          </button>
        </div>

        <div className={EquipReserveCss.box}>
          <div className={EquipReserveCss.img}>
            <img className={EquipReserveCss.main_imgs} src={PRimage} alt="" />
          </div>
          <div className={EquipReserveCss.text}>
            <p>Pending Request</p>
          </div>
          <button
            className={EquipReserveCss.info}
            onClick={() => nav("request")}
          >
            More Info
          </button>
        </div>

        <div className={EquipReserveCss.box}>
          <div className={EquipReserveCss.img}>
            <img className={EquipReserveCss.main_imgs} src={REimage} alt="" />
          </div>
          <div className={EquipReserveCss.text}>
            <p>Reserved Equipment</p>
          </div>
          <button className={EquipReserveCss.info} onClick={() => nav("view")}>
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default EquipmentReservationPage;
