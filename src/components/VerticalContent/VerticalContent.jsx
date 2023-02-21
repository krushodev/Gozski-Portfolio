import "./VerticalContent.css";

export const VerticalContent = ({item}) => {

  return (
    <div className={`vertical-content ${item.tagname}`}>
        {
          item.alignRight ? 
          <>
            <video src={item.content} preload="true" loop muted></video>
            <div className="vertical-content-info">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p><span>&#62;</span>{item.copyright}</p>
              <p><span>&#62;</span>{item.by}</p>
            </div>
          </>
          :
          <>
            <div className="vertical-content-info">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p><span>&#62;</span>{item.copyright}</p>
              <p><span>&#62;</span>{item.by}</p>
            </div>
            <video src={item.content} preload="true" loop muted></video>
          </>
        }
    </div>
  )
}

 