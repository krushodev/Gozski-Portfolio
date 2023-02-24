import "./VerticalContent.css";

export const VerticalContent = ({item}) => {

  return (
    <div className={`vertical-content ${item.tagname}`}>
      <div className="vertical-content-info">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p><span>&#62;</span>{item.copyright}</p>
        <p><span>&#62;</span>{item.by}</p>
      </div>
      <video src={item.content} autoPlay loop muted></video>
    </div>
  )
}

 