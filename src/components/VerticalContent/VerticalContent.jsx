import './VerticalContent.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import Popup from 'reactjs-popup';

export const VerticalContent = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`vertical-content ${item.tagname}`}>
      <div className='vertical-content-info'>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p><span>&#62;</span>{item.copyright}</p>
        <p><span>&#62;</span>{item.by}</p>
      </div>
      <div>
        <img src={item.preview} onClick={handleClick} alt={item.tagname}></img>
      </div>
      <Popup
        open={isOpen}
        closeOnDocumentClick={false}
        onClose={() => setIsOpen(!isOpen)}
        modal
        nested
      >
        {close => (
          <div className="overlay" onClick={close}>
            <div className="content content-vertical">
              <ReactPlayer url={item.content} controls  width="100%" height={400}/>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
