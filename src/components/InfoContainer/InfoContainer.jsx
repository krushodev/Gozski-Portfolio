import './InfoContainer.css';

const info = [
    {
        title: "SKILLS",
        data: ["ADOBE AFTER EFFECTS", "ADOBE PHOTOSHOP", "ADOBE ILLUSTRATOR", "BLENDER"]
    },
    {
        title: "CLIENTS",
        data: ["PARAMOUNT", "BANCO GALICIA", "PEDIDOS YA", "MODO", "CODERHOUSE", "AND OTHERS..."]
    }
]; 

export const InfoContainer = () => {
    return (
        <div className='info-container'>
            <div className='info-content personal'>
                <div>
                    <h5><span>&#62;</span>AGE: 26</h5>
                    <h5><span>&#62;</span>EXP: 4 YEARS</h5>
                </div>
                <h5><span>&#62;</span>HIS WORK SPANS MOTION GRAPHICS, VISUAL DESIGN AND 3D GENERALISM</h5>
            </div>
            <div className='info-content work'>
                {
                    info.map((item,index) => {
                        return(
                            <div key={index}>
                                <h5><span>&#62;</span>{item.title}:</h5>
                                <ul>
                                    {item.data.map((dataItem,index) => <li key={index}>{dataItem}</li>)}
                                </ul>
                            </div>
                        );
                    })
                }
            </div>
            <p className='contact'><span>©2023</span>Drop him an email and work together! <span>agozski@gmail.com</span></p>
        </div>
    );
}
