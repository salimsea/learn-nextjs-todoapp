import React from "react";
import { FaPodcast } from "react-icons/fa";

const Ballon = () => {
  return (
    <div className="feedback d-none d-sm-block">
      <div className="card-feedback px-3 py-2">
        <FaPodcast color="white" size={20} />
        <span className="text-white ps-2">open part time job</span>
      </div>
    </div>
  );
};

export default Ballon;
