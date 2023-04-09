import './HorizontalContent.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import Popup from 'reactjs-popup';

export const HorizontalContent = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`horizontal-content ${item.tagname}`}>
      <img src={item.preview} alt={item.tagname} onClick={handleClick}></img>
      {
        item.title &&

        <div className='horizontal-content-info'>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <p>{item.copyright} {item.by}</p>
        </div>
      }
      <Popup
        open={isOpen}
        closeOnDocumentClick={false}
        onClose={() => setIsOpen(!isOpen)}
        modal
        nested
      >
        {close => (
          <div className="overlay" onClick={close}>
            <div className="content content-horizontal">
              <ReactPlayer url={item.content} controls  width="100%" height="auto"/>
            </div>
          </div>
            
        )}
      </Popup>
    </div>
  );
}
