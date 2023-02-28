import "./Main.css";
import { VerticalContent } from "../VerticalContent/VerticalContent";
import { HorizontalContent } from "../HorizontalContent/HorizontalContent";
import db from "../../utils/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";

export const Main = () => {
  const [contentList, setContentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectsCollection = collection(db, "projects");
        const queryCollection = await getDocs(projectsCollection);
        const items = queryCollection.docs.map((doc) => ({id: doc.id,...doc.data()}));
        const itemsOrdered = items.sort((a,b) => a.order - b.order)
        setContentList(itemsOrdered);
      } catch (error) {
        console.log(`Error al intentar conectar con el servidor: ${error}`)
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

  if (loading) {
    return <Loading/>
  } else {
    return(
      <div className="main-container"> 
        {
          contentList.map((item) => item.type === "vertical" ? <VerticalContent item={item} key={item.id}/> : <HorizontalContent item={item} key={item.id}/>)
        }
      </div>
    )
  }
}

