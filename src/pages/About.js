import React, { Component } from 'react';
import "./About.css";
//import < profile_pic_name > from "../assets/profile_pic_name.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              // Image goes here
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jessica Wu</div>
            <div className="brief_description">
              Hi! I am a rising junior CS major at Cornell University.

            </div>
          </div>
        </div>
      </div>
    )
  }
}