import "./HorizontalContent.css";

export const HorizontalContent = ({item}) => {
  return (
    <div className={`horizontal-content ${item.tagname}`}>
        <video src={item.content} preload="true" loop muted></video>
        {
            item.title && 

            <div className="horizontal-content-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.copyright} {item.by}</p>
            </div>
        }
    </div>
  )
}

