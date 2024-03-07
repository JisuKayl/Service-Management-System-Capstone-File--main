/* eslint-disable no-unused-vars */
import React from "react";
import bookcss from "../BookRoom/BookRoom.module.css";
import { useNavigate } from "react-router-dom";

import imgplace from "../../../assets/placeholder.jpg";

const BookRoom = () => {
  const nav = useNavigate();

  return (
    <>
      <h1 className={bookcss.heading}>List of Rooms</h1>

      <h2 className={bookcss.floorHeading}>Floor 1</h2>

      <div className={bookcss.container}>
        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 101</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 102</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 103</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 104</p>
            <p className={bookcss.roomDetail}>Type: Lecture Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>
      </div>

      <h2 className={bookcss.floorHeading}>Floor 2</h2>

      <div className={bookcss.container}>
        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 201</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 202</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 203</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 204</p>
            <p className={bookcss.roomDetail}>Type: Lecture Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>
      </div>

      <h2 className={bookcss.floorHeading}>Floor 3</h2>

      <div className={bookcss.container}>
        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 301</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 302</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 303</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 304</p>
            <p className={bookcss.roomDetail}>Type: Lecture Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>
      </div>

      <h2 className={bookcss.floorHeading}>Floor 4</h2>

      <div className={bookcss.container}>
        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 401</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 402</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 403</p>
            <p className={bookcss.roomDetail}>Type: Laboratory Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>

        <div className={bookcss.box}>
          <div>
            <img className={bookcss.img} src={imgplace} alt="" />
          </div>

          <div className={bookcss.text}>
            <p className={bookcss.roomName}>Room 404</p>
            <p className={bookcss.roomDetail}>Type: Lecture Room</p>
            <p className={bookcss.roomDetail}>Max Seats: 64</p>
          </div>

          <div className={bookcss.booknow} onClick={() => nav("create")}>
            <p>Book Now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookRoom;
