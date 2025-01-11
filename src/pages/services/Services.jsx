import React from 'react'
import "./services.scss"
import ButtonFl from '../../components/buttonFl/ButtonFl'
import Navbar from '../../components/Navbar/Navbar'
import video from "../../Assets/video-presentation.MP4";
import video2 from "../../Assets/ser-iniciacion-1.mp4";
import video3 from "../../Assets/ser-competition.mp4";
import video4 from "../../Assets/ser-competition2.mp4";
import video5 from "../../Assets/ser-functional1.mp4";
import video6 from "../../Assets/ser-functional2.mp4";
import video9 from "../../Assets/ser-senior1.mp4";
import video10 from "../../Assets/ser-senior2.mp4";
import video7 from "../../Assets/ser-group1.mp4";
import video8 from "../../Assets/ser-group2.mp4";




const Services = () => {

  return (
    <div>
      <ButtonFl />
      <Navbar />
      <section>
        <main className='services-container'>
          <aside className='services-description'>
            <h1 className='title-services'>
              Iniciación Deportiva
            </h1>
            <p className='paragraph-services'>
              La iniciación deportiva es fundamental en el desarrollo integral de niños y jóvenes, ya que fomenta habilidades físicas, emocionales y sociales desde edades tempranas. A través del deporte, se promueven valores como la disciplina, el trabajo en equipo, la perseverancia y el respeto, esenciales para la formación de carácter. Además, mejora la salud física, fortaleciendo el sistema cardiovascular, muscular y óseo, mientras contribuye al bienestar mental al reducir el estrés y mejorar la autoestima. También desarrolla habilidades motoras básicas y estimula la socialización, creando vínculos positivos. La iniciación deportiva establece bases sólidas para un estilo de vida activo y saludable.
            </p>
          </aside>
          <aside className='video-container'>
            <div className="video-services">
              <video
                src={video2} className='video-services-individual'
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
            </div>
            <div className="video-services">
              <video
                src={video} className='video-services-individual'
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
            </div>
          </aside>
        </main>
      </section>
      <section>
        <main className='services-container'>

          <aside className='video-container'>
            <div className="video-services">
              <video
                src={video3} className='video-services-individual'
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
            </div>
            <div className="video-services">
              <video
                src={video4} className='video-services-individual'
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
            </div>
          </aside>
          <aside className='services-description'>
            <h1 className='title-services'>
              Entrenamiento Competitivo
            </h1>
            <p className='paragraph-services'>
              El entrenamiento competitivo es clave para desarrollar habilidades físicas, mentales y emocionales necesarias en escenarios de alta exigencia. Este tipo de preparación fomenta la disciplina, la resiliencia y el trabajo en equipo, valores esenciales tanto en el deporte como en la vida cotidiana. Además, promueve la mejora constante al enfrentar desafíos, superando límites y fortaleciendo la confianza personal. A través del entrenamiento competitivo, se perfeccionan técnicas y estrategias específicas, optimizando el rendimiento. También enseña a manejar la presión y a mantener el enfoque en situaciones críticas, habilidades transferibles a múltiples áreas, desde lo académico hasta lo profesional.
            </p>
          </aside>
        </main>
      </section>
      <section>
        <main className='services-container'>
          <aside className='services-description'>
            <h1 className='title-services'>
              Entrenamiento Funcional
            </h1>
            <p className='paragraph-services'>
              El entrenamiento funcional es clave para mejorar la calidad de vida, ya que se enfoca en movimientos naturales que fortalecen el cuerpo para las actividades cotidianas. A diferencia de los ejercicios tradicionales, este tipo de entrenamiento trabaja múltiples grupos musculares al mismo tiempo, mejorando la fuerza, la estabilidad, la movilidad y el equilibrio. Es adaptable a diferentes niveles de condición física y ayuda a prevenir lesiones al fortalecer músculos estabilizadores y corregir posturas. Además, su enfoque dinámico y variado lo hace más entretenido, promoviendo una mayor adherencia al ejercicio. Es una herramienta integral para mantener un cuerpo fuerte y funcional.
            </p>
          </aside>
          <aside className='video-container'>
            <div className="video-services">
              <video
                src={video5} className='video-services-individual'
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
            </div>
            <div className="video-services">
              <video
                src={video6} className='video-services-individual'
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
            </div>
          </aside>
        </main>
      </section>
      <section>
        <main className='services-container'>

          <aside className='video-container'>
            <div className="video-services">
              <video
                src={video7} className='video-services-individual'
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
            </div>
            <div className="video-services">
              <video
                src={video8} className='video-services-individual'
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
            </div>
          </aside>
          <aside className='services-description'>
            <h1 className='title-services'>
              Entrenamiento Grupal
            </h1>
            <p className='paragraph-services'>
              El entrenamiento grupal es fundamental para fomentar el bienestar físico, emocional y social. Participar en actividades físicas en grupo promueve la motivación colectiva, el trabajo en equipo y el sentido de pertenencia, lo que puede aumentar la adherencia a un programa de ejercicio. Además, compartir metas y desafíos fortalece el compromiso y crea un ambiente de apoyo mutuo. Este tipo de entrenamiento también mejora habilidades sociales, como la comunicación y la cooperación, mientras se reduce el estrés y se refuerza la confianza. En resumen, el entrenamiento grupal combina salud y conexión interpersonal, haciendo del ejercicio una experiencia enriquecedora y sostenible.
            </p>
          </aside>
        </main>
      </section>
      <section>
        <main className='services-container'>
          <aside className='services-description'>
            <h1 className='title-services'>
              Entrenamiento Senior
            </h1>
            <p className='paragraph-services'>
              El entrenamiento senior para adultos mayores es fundamental para promover una vida saludable y activa en esta etapa de la vida. A través de actividades físicas adaptadas, se fortalecen los músculos, se mejora la movilidad, el equilibrio y la flexibilidad, reduciendo el riesgo de caídas y lesiones. Además, contribuye a la salud cardiovascular y al control de enfermedades crónicas como la diabetes y la hipertensión. El ejercicio también estimula el bienestar mental, aliviando el estrés, mejorando el estado de ánimo y fomentando la socialización. Es una herramienta clave para mantener la independencia, la calidad de vida y un envejecimiento digno.
            </p>
          </aside>
          <aside className='video-container'>
            <div className="video-services">
              <video
                src={video9} className='video-services-individual'
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
            </div>
            <div className="video-services">
              <video
                src={video10} className='video-services-individual'
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              ></video>
            </div>
          </aside>
        </main>
      </section>
    </div>
  )
}

export default Services 