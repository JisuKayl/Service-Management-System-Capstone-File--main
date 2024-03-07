/* eslint-disable no-unused-vars */
import React from "react";
import RoomReserveCss from "./RoomReservation.module.css";
import { useNavigate } from "react-router-dom";
import imgplace from "../../assets/placeholder.jpg";

const RoomReservationPage = () => {
  const nav = useNavigate();

  return (
    <>
      <h1 className={RoomReserveCss.heading}>Room Reservation</h1>

      <div className={RoomReserveCss.container}>
        <div className={RoomReserveCss.box}>
          <div className={RoomReserveCss.img}>
            <img className={RoomReserveCss.main_imgs} src={imgplace} alt="" />
          </div>
          <div className={RoomReserveCss.text}>
            <p>Book Room</p>
          </div>
          <button className={RoomReserveCss.info} onClick={() => nav("book")}>
            More Info
          </button>
        </div>

        <div className={RoomReserveCss.box}>
          <div className={RoomReserveCss.img}>
            <img className={RoomReserveCss.main_imgs} src={imgplace} alt="" />
          </div>
          <div className={RoomReserveCss.text}>
            <p>Pending Request</p>
          </div>
          <button
            className={RoomReserveCss.info}
            onClick={() => nav("request")}
          >
            More Info
          </button>
        </div>

        <div className={RoomReserveCss.box}>
          <div className={RoomReserveCss.img}>
            <img className={RoomReserveCss.main_imgs} src={imgplace} alt="" />
          </div>
          <div className={RoomReserveCss.text}>
            <p>Reserved Room</p>
          </div>
          <button className={RoomReserveCss.info} onClick={() => nav("view")}>
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomReservationPage;
