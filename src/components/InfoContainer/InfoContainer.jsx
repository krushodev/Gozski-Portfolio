import './InfoContainer.css';

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
                <div>
                    <h5><span>&#62;</span>SKILLS:</h5>
                    <ul>
                        <li>ADOBE AFTER EFFECTS</li>
                        <li>ADOBE PHOTOSHOP</li>
                        <li>ADOBE ILLUSTRATOR</li>
                        <li>BLENDER</li>
                    </ul>
                </div>
                <div>
                    <h5><span>&#62;</span>CLIENTS:</h5>
                    <ul>
                        <li>NICKELODEON</li>
                        <li>COCA-COLA</li>
                        <li>BANCO GALICIA</li>
                        <li>PEDIDOS YA</li>
                        <li>MODO</li>
                        <li>CODERHOUSE</li>
                        <li>AND OTHERS...</li>
                    </ul>
                </div>
            </div>
            <p className='contact'><span>©2023</span>Drop him an email and work together! <span>agozski@gmail.com</span></p>
        </div>
    );
}
