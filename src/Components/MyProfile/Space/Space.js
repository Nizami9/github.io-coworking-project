import React from 'react';
import Navbar from "../../Navbar/index";
import Footer from "../../Footer/Footer";
import calendar from "./ImagesSpace/calendar.png";
import schedule from "./ImagesSpace/schedule.png";
import SpaceData from "../../../spaceData.json";
import "./Space.css";

const Space = () => {
    return (
        <div>
    {SpaceData &&
        SpaceData.map((space) => {
  return (
    <div className='containerSpace'>
        <div className='spaceImages'>
            <div className='leftImageSpace'>
                <img src={space.imgUrl}></img>
            </div>
            {/* <div className='rightImageSpace'>
                <img src={space.imgUrl}></img>
                <img src={space.imgUrl}></img>
            </div> */}
        </div>
        <div className='spaceReservations'>
                <h1>{space.title}</h1>
                <span className='info'>Available 57 desks</span>
            <p className='spacePrice'>{space.costperDay} / day</p>
            <p className='reserveOnlineP'>Reserve online</p>
            <button className='reserveSpaceButton'><p>Reserve space</p></button>
            <div className='hrOr'>
            <hr />
            <p>or</p>
            <hr />
            </div>
            <p>Visit this space in person following our new safety measures.</p>
            <button className='bookTourButton'><p>Book a Tour</p></button>
        </div>
        <div className='spaceImages'>
            <div className='openingHours'>
                <h3>Opening hours:</h3>
                <div className='dataInfo1'>
                    <img src={calendar}></img>
                    <p>Monday - Friday</p>
                </div>
                <div className='dataInfo2'>
                    <img src={schedule}></img>
                    <p>07:00 am - 23:00 pm</p>
                </div>
            </div>

        <div className='openingHours'>
                <h3>Description:</h3>
                <div className='descriptionText'>
                    <p>
                    {space.description}
                    </p>
                </div>
            </div>
</div>
        </div>
                )
            }
        )
    }
    </div>
    )
}

export default Space;
