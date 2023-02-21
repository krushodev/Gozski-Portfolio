import Video1 from "../assets/videos/keyframes.mp4 (1080p).mp4";
import Video2 from "../assets/videos/manual_de_pedidos_del_hincha(1080p).mp4";
import Video3 from "../assets/videos/modo_federal(1080p).mp4";
import Video5 from "../assets/videos/Refresh_Galicia_©2023.mp4";
import Video6 from "../assets/videos/tumblr_ronnksgdvo1zljdcp_r1_720(540p).mp4";
import Video7 from "../assets/videos/verano_galicia(1080p).mp4";

export const contentList = [
    {
        id: 0,
        title: null,
        description: null,
        copyright: null,
        by: null,
        content: Video5,
        tagname: "refresh-galicia",
        type: "horizontal"
    }, 
    {
        id: 1,
        title: "Keyframes",
        description: "Norman Wiseman (Podcast)",
        copyright: "©2022",
        by: "Personal Project",
        content: Video1,
        tagname: "keyframes-project",
        type: "vertical",
        alignRight: false
    },
    {
        id: 2,
        title: "Verano Galicia",
        description: null,
        copyright: "©2022",
        by: "ft. Wunderman Thompson",
        content: Video7,
        tagname: "verano-galicia",
        type: "horizontal"
    },
    {
        id: 3,
        title: "Manual de Pedidos del Hincha",
        description: "Campaña Mundial Qatar 2022",
        copyright: "©2022",
        by: "ft. Lanzallamas TV for PedidosYa",
        content: Video2,
        tagname: "manual-pedidosya",
        type: "vertical",
        alignRight: true
    },
    {
        id: 4,
        title: "Modo Federal",
        description: "Social Media",
        copyright: "©2022",
        by: "ft. Lanzallamas TV for MODO",
        content: Video3,
        tagname: "modo-federal",
        type: "vertical",
        alignRight: false
    },
    {
        id: 5,
        title: "Comisión O",
        description: "Social Media",
        copyright: "©2022",
        by: "ft. Lanzallamas TV for ENIGMA",
        content: Video6,
        tagname: "comision-enigma",
        type: "vertical",
        alignRight: false
    }
]