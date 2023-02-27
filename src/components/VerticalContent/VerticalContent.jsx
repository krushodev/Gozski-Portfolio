import "./VerticalContent.css";
import { BsFillVolumeMuteFill } from "react-icons/bs";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { useState } from "react";

export const VerticalContent = ({item}) => {
  const [volumeOn,setVolumeOn] = useState(false);

  const handleClick = (e) => {
    if (e.target.nodeName === "svg") {
      if (volumeOn) {
        e.target.previousElementSibling.muted = true;
        setVolumeOn(false);
      } else {
        e.target.previousElementSibling.muted = false;
        setVolumeOn(true);
      }
    } else {
      if (volumeOn) {
        e.target.parentElement.previousElementSibling.muted = true;
        setVolumeOn(false);
      } else {
        e.target.parentElement.previousElementSibling.muted = false;
        setVolumeOn(true);
      }
    }
  }

  return (
    <div className={`vertical-content ${item.tagname}`}>
      <div className="vertical-content-info">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p><span>&#62;</span>{item.copyright}</p>
        <p><span>&#62;</span>{item.by}</p>
      </div>
      <div>
      <video src={item.content} autoPlay muted loop ></video>
      {
          volumeOn ? 
          <BsFillVolumeUpFill className="volume-on" onClick={handleClick} />
          :
          <BsFillVolumeMuteFill className="volume-muted" onClick={handleClick} />
      }
      </div>
    </div>
  )
}

 