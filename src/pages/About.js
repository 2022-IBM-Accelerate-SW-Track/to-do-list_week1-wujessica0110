import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic_name.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img src={profile_pic} />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jessica Wu</div>
            <div className="brief_description">
              I am a rising junior at Cornell University who is majoring in CS
              and triple minoring in Information Science: UX Design, Law,
              and Business. In my free time I enjoy various forms of arts
              and crafts such as crocheting, knitting, and embroidery and I also
              really love to dance and play badminton. A fun fact about me is that
              I have 4 cats!

            </div>
          </div>
        </div>
      </div>
    )
  }
}