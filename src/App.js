import logo from "./logo.svg";
import "./App.css";
import { AiFillPhone  } from "react-icons/ai";
import { IoAddCircleSharp  } from "react-icons/io5";

const MiComponenteIcono =({icono, info})=>{
    return(
        <div className="content-icon">
            {icono}
            <p>{info}</p>
        </div>
    )
}

const MiComponenteTitle=({titulo})=>{
    return(
        <h2 className="title-default">{titulo}</h2>
    )
}

const MiComponenteHeader=({titulo1, titulo2, subtitulo, img})=>{
    return(
        <header className="content-header" >
            <section className="content-titles">
                <h1>{titulo1} <br /> {titulo2} </h1>
                <h3>{subtitulo}</h3>
            </section>
            <div className="content-foto">
                <img src={img} alt="Mi foto" />
            </div>
        </header>
    )
}
function App() {
    return (
        <div>
            <MiComponenteHeader titulo1="Adeline" titulo2="Palmerston" subtitulo="Stage y Film Actor" img="/mi-foto.jpeg" />

            <main className="content-main">
                <section>
                <MiComponenteTitle titulo="Profile"/>                 
                <p>mcihasdfa afsldkfjapsdoi jasdf asjdfaopisdhjfpaa fajsopdfijas </p>
                </section>

                <section>
                    <MiComponenteTitle titulo="Profesion"/> 
                    <p>mcihasdfa afsldkfjapsdoi jasdf asjdfaopisdhjfpaa fajsopdfijas </p>
                    <p>2015 - 2016</p>
                    <ul>
                        <li>fasdfhaksdf</li>
                        <li>fasdfhaksdf</li>
                    </ul>
                </section>

                <section>
                <MiComponenteTitle titulo="Lenguaje"/> 
                    <p>mcihasdfa afsldkfjapsdoi jasdf asjdfaopisdhjfpaa fajsopdfijas </p>
                </section>

                <section>
                    <MiComponenteTitle titulo="Carrera Profesional"/> 
                    <p> <strong>Stage y fim actress</strong> </p>
                    <p>mcihasdfa afsldkfjapsdoi jasdf a</p>
                    <p>2016 - present</p>
                    <ul>
                        <li>fasdfhaksdf</li>
                        <li>fasdfhaksdf</li>
                        <li>fasdfhaksdf</li>
                    </ul>
                </section>

                <section>
                    <MiComponenteTitle titulo="Skill"/> 
                    <p>mcihasdfa afsldkfjapsdoiaf ads asdfasdf asdf jasdf asjdfaopisdhjfpaa fajsopdfijas </p>
                </section>

                <section>
                    <h2 className="title-default">Contact</h2>
                    <div>
                        <MiComponenteIcono icono={<AiFillPhone />} info="3444455" />
                        <MiComponenteIcono icono={<IoAddCircleSharp />} info="calle 23 df" />
                        <MiComponenteIcono icono={<AiFillPhone />} info="correo@gmail.com" />
                        <MiComponenteIcono icono={<AiFillPhone />} info="contacto 2" />
                        <MiComponenteIcono icono={<AiFillPhone />} info="mipagin.com" />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
