import React from "react";
import "css/pe.css";
import YoutubeEmbed from "components/pe/YoutubeEmbed.js";
import withAuth from "components/auth/withAuth";

const PEScreen = () => {
  return (
    <div className="pe">
      <h1 className="pe-header">ProudMe PE Video Lessons</h1>
      <div className="info-text">
        This website publishes important resources related to the ProudMe PE
        curriculum. This is a 12-lesson curriculum unit that educates middle
        school students important knowledge, skill, and disposition needed for
        adopting health-enhancing behaviors (more physical activity, less screen
        time, more fruits/vegetables, and get enough sleep).
      </div>
      <br />
      <div className="info-text">
        The website contains lesson plans for the curriculum unit that are
        accessible for teacher users. The demo videos and other resources are
        also available for teachers to conveniently teach the ProudMe PE
        lessons.
      </div>
      <div className="video-list">
        <h3 style={{ marginBottom: "1%", marginTop: "1%" }}>
          Do (Physical Activity)
        </h3>
        <YoutubeEmbed embedId="-d-v4lq9Vd4" />
        <YoutubeEmbed embedId="DMR6ZS_TDZo" />
        <YoutubeEmbed embedId="JOwu_5rqU0U" />
        <YoutubeEmbed embedId="L-vK-xx5j9o" />
        <h3 style={{ marginBottom: "1%" }}>View (Screen Time)</h3>
        <YoutubeEmbed embedId="m-pHs9YjXbc" />
        <YoutubeEmbed embedId="jI7phy14fFk" />
        <YoutubeEmbed embedId="RVlqJzeOZSQ" />
        <YoutubeEmbed embedId="KarjBtp729I" />
        <h3 style={{ marginBottom: "1%" }}>Chew (Eating Fruits/Vegetables)</h3>
        <YoutubeEmbed embedId="bpRlvhTkxHo" />
        <YoutubeEmbed embedId="JaAVLEEX90A" />
        <YoutubeEmbed embedId="vL2byVMBta0" />
        <YoutubeEmbed embedId="IIV_iyI9Yxo" />
      </div>
    </div>
  );
};

export default withAuth(PEScreen);
