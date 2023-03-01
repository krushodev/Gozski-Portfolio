import './HorizontalContent.css';
import { BsFillVolumeMuteFill } from 'react-icons/bs';
import { BsFillVolumeUpFill } from 'react-icons/bs';
import { useState } from 'react';

export const HorizontalContent = ({ item }) => {
  const [volumeOn, setVolumeOn] = useState(false);

  const handleClick = (e) => {
    if (e.target.nodeName === 'svg') {
      if (item.title) {
        if (volumeOn) {
          e.target.previousElementSibling.previousElementSibling.muted = true;
          setVolumeOn(false);
        } else {
          e.target.previousElementSibling.previousElementSibling.muted = false;
          setVolumeOn(true);
        }
      }
      if (volumeOn) {
        e.target.previousElementSibling.muted = true;
        setVolumeOn(false);
      } else {
        e.target.previousElementSibling.muted = false;
        setVolumeOn(true);
      }
    } else {
      if (item.title) {
        if (volumeOn) {
          e.target.parentElement.previousElementSibling.previousElementSibling.muted = true;
          setVolumeOn(false);
        } else {
          e.target.parentElement.previousElementSibling.previousElementSibling.muted = false;
          setVolumeOn(true);
        }
      }
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
    <div className={`horizontal-content ${item.tagname}`}>
      <video src={item.content} autoPlay muted loop playsInline></video>
      {
        item.title &&

        <div className='horizontal-content-info'>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <p>{item.copyright} {item.by}</p>
        </div>
      }
      {
        volumeOn ?
          <BsFillVolumeUpFill className='volume-on' onClick={handleClick} />
          :
          <BsFillVolumeMuteFill className='volume-muted' onClick={handleClick} />
      }
    </div>
  );
}
