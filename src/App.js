import logo from "./logo.svg";
import "./App.css";
import { AiFillPhone, AiFillIeSquare } from "react-icons/ai";
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
            <MiComponenteHeader titulo1="Yolanda" titulo2="Alvarez" subtitulo="Stage y Film Actor" img="/mi-foto.jpeg" />

            <main className="content-main">
                <section>
                <MiComponenteTitle titulo="Perfil"/>                 
                <p>Más de 3 años de experiencia como diseñador gráfico en distintas agencias de publicidad, me han permitido desarrollar capacidades de liderazgo y manejar un equipo de hasta 5 personas para gestionar un proyecto como el de la última campaña de Suavitel Latinoamérica, ganador del tercer lugar en el Festival Internacional de la Creatividad Cannes Lion 2021. Actualmente me encuentro en la búsqueda de nuevos retos que me ayuden a demostrar mis habilidades. </p>
                </section>

                <section>
                    <MiComponenteTitle titulo="Historia Academica"/> 
                    <p> <strong>Tecnico en Informatica</strong> </p>
                    <p>2015 - 2016</p>
                    <ul>
                        <li>Universidad Catolica</li>
                        <li>Trabaje un año como tecnica en la empresa Comdata</li>
                    </ul>
                </section>

                <section>
                <MiComponenteTitle titulo="Lenguaje"/> 
                    <p> Español Ingles </p> <hr className="raya" ></hr> 
                    <p> Para el proximo semestre realizare un curso en la Autonoma para aprender ingles y asi tener un idioma mas fluido y avanzado, ya que en la actualidad es muy importante para temas de trabajos y poder viajar si hy una oportunidad laboral. </p>
                </section>

                <section>
                    <MiComponenteTitle titulo="Carrera Profesional"/> 
                    <p> <strong>Ingenieria en Sistemas</strong> </p>
                    <p>Estudiante de quinto semestre en la universidad Manizales</p>
                    <p>2023 - Actualmente</p>
                    <ul>
                        <li>En proceso de homologacion</li>
                        <li>Estudiante nocturna</li>
                        <li>Con dificultad para la prgramacion</li>
                    </ul>
                </section>

                <section>
                    <MiComponenteTitle titulo="Habilidades"/> 
                    <p>mcihasdfa afsldkfjapsdoiaf ads asdfasdf asdf jasdf asjdfaopisdhjfpaa fajsopdfijas </p>
                </section>

                <section>
                    <h2 className="title-default">Contact</h2>
                    <div>
                        <MiComponenteIcono icono={<AiFillPhone />} info="318327737" />
                        <MiComponenteIcono icono={<IoAddCircleSharp />} info="calle 23 edificio La Quinta" />
                        <MiComponenteIcono icono={<AiFillIeSquare/>} info="halvarez@gmail.com" />
                        <MiComponenteIcono icono={<AiFillPhone />} info="6068888232" />
                        <MiComponenteIcono icono={<AiFillPhone />} info="marketing.com" />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
