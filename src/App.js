import logo from "./logo.svg";
import "./App.css";
import { AiFillPhone, AiFillIeSquare } from "react-icons/ai";
import { BsFillEnvelopeFill, BsFillHouseFill, BsPhoneFill } from "react-icons/bs";

const MiComponenteIcono =({icono, info})=>{
    return(
        <div className="content-icon">
            {icono} <p>{info}</p>
        </div>
    )
}


const MiComponenteTitle=({titulo })=>{
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
            <MiComponenteHeader titulo1="Holanda" titulo2="Alvarez" subtitulo="Estudiante" img="/mi-foto.jpeg" />

            <main className="content-main">
                <section>

                <MiComponenteTitle titulo="Perfil"/>
                              
                <p className="parrafo">Más de 3 años de experiencia como diseñador gráfico en distintas agencias de publicidad, me han permitido desarrollar capacidades de liderazgo y manejar un equipo de hasta 5 personas para gestionar un proyecto como el de la última campaña de Suavitel Latinoamérica, ganador del tercer lugar en el Festival Internacional de la Creatividad Cannes Lion 2021. Actualmente me encuentro en la búsqueda de nuevos retos que me ayuden a demostrar mis habilidades. </p>
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
                    <p className="lenguaje-container"> Español <hr className="raya" ></hr> Ingles </p>  
                    <p className="parrafo"> Para el proximo semestre realizare un curso en la Autonoma para aprender ingles y asi tener un idioma mas fluido y avanzado, ya que en la actualidad es muy importante para temas de trabajos y poder viajar si hy una oportunidad laboral. </p>
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
                    <p className="parrafo">Profesionista con 5 años de experiencia en el área de marketing en busca de un puesto como estratega digital en la empresa Doremi Corp. Deseo utilizar mis habilidades de social media management, pensamiento creativo y resolución de problemas para ayudar a que Doremi alcance sus objetivos de ventas online. </p>
                </section>

                <section>
                    <h2 className="title-default">Contact</h2>
                    <div>
                        <MiComponenteIcono icono={<BsPhoneFill  className="icon-item" />} info="318327737" />
                        <MiComponenteIcono icono={<BsFillHouseFill  className="icon-item"/>} info="calle 23 edificio La Quinta" />
                        <MiComponenteIcono icono={<BsFillEnvelopeFill className="icon-item"/>} info="halvarez@gmail.com" />
                        <MiComponenteIcono icono={<AiFillPhone  className="icon-item"/>} info="6068888232" />
                        <MiComponenteIcono icono={<AiFillIeSquare  className="icon-item"/>} info="marketing.com" />
                    </div>
                </section>
            </main>
            <div className="mt-2 mb-2 text-center">
                <MiComponenteTitle titulo="Contactame"/> 
            </div>
            <div className="container-form">
                <form className="card">
                    <div className="card-body">
                        
                        <div className="mb-3">
                            <label for="emailInput" className="form-label">Email</label>
                            <input type="email" className="form-control" id="emailInput"  />
                        </div>

                        <div className="mb-3">
                            <label for="nameInput" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nameInput"  />
                        </div>

                        <div className="mb-3">
                            <label for="asuntoInput" className="form-label">Asunto</label>
                            <input type="text" className="form-control" id="asuntoInput"  />
                        </div>

                        <div class="mb-3">
                            <label for="mensajeInput" class="form-label">Mensaje</label>
                            <textarea class="form-control" id="mensajeInput" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-success">Enviar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default App;
