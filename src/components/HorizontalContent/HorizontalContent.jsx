import "./HorizontalContent.css";

export const HorizontalContent = ({item}) => {
  return (
    <div className={`horizontal-content ${item.tagname}`}>
        <video src={item.content}></video>
        {
            item.title && 

            <div className="horizontal-content-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </div>
        }
    </div>
  )
}

