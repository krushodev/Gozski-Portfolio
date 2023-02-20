import "./VerticalContent.css";

export const VerticalContent = ({item}) => {

  console.log(item)

  return (
    <div className={`vertical-content ${item.tagname}`}>
        <video src={item.content} preload muted></video>
        <div className="vertical-content-info">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p><span>&#62;</span>{item.copyright}</p>
            <p><span>&#62;</span>{item.by}</p>
        </div>
    </div>
  )
}

 