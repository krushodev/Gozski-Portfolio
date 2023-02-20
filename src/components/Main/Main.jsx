import "./Main.css";
import {contentList} from "../../helper/helper";
import {VerticalContent} from "../VerticalContent/VerticalContent";
import {HorizontalContent} from "../HorizontalContent/HorizontalContent";

export const Main = () => {
  return (
    <div className="main-container"> 
      {
        contentList.map((item) => item.type === "vertical" ? <VerticalContent item={item} key={item.id}/> : <HorizontalContent item={item} key={item.id}/>)
      }
    </div>
  )
}

