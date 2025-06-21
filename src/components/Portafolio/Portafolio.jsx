import React from "react";
import around from "../../Images/around.png";
import coffe from "../../Images/coffe.png";
import patria from "../../Images/patria.png";
import library from "../../Images/library.png";
import web_art from "../../Images/web_art.png";

export default function Portafolio() {
  return (
    <>
      <h2 className="title_projects">Proyectos</h2>
      <div className="projects_container">
        <ul className="projects">
          <li className="around">
            <div className="project_around">
              <img className="img_around" src={around} />
              <div className="container_description">
                <h2>Around of the USA</h2>
                <p className="description_around">
                  Página donde se pueden agregar fotos de sitios al que se
                  pueden reaccionar dándoles like, para esto previamente haber
                  se registrado y haber echo login.
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/JoseEduardoTrevizo/web_project_api_full?tab=readme-ov-file"
                    className="button_git"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.aroundusa.crabdance.com/login"
                    className="button_git"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="coffe">
            <div className="project_coffe">
              <img className="img_coffe" src={coffe} />
              <div className="container_description">
                <h2>Coffe Shop</h2>
                <p className="description_coffe">
                  Página web orientada a a la venta y consumo de café, en dondé
                  el cliente puede contactarnos y reservar un mesa
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/JoseEduardoTrevizo/web_coffeeshop"
                    className="button_git"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://joseeduardotrevizo.github.io/web_coffeeshop/"
                    className="button_git"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="library">
            <div className="project_library">
              <img className="img_library" src={patria} />
              <div className="container_description">
                <h2>De patria a patria</h2>
                <p className="description_library">
                  Fue creado utilizando HTML y CSS, con base en un informe de
                  diseño a distintos tamaños de resolucion (1280px, 768px,
                  320px) mediante el uso de media querys.
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/JoseEduardoTrevizo/web_project_homeland"
                    className="button_git"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://joseeduardotrevizo.github.io/web_project_homeland/"
                    className="button_git"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="library">
            <div className="project_library">
              <img className="img_library" src={library} />
              <div className="container_description">
                <h2>Biblioteca</h2>
                <p className="description_library">
                  La página web de la Librería Triple Peaks es el primer
                  proyecto en el programa de Ingeniería de software en Triple
                  Ten. Fue creado utilizando HTML y CSS, con base en un informe
                  de diseño.
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/JoseEduardoTrevizo/web_project_library"
                    className="button_git"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://joseeduardotrevizo.github.io/web_project_library/"
                    className="button_git"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="library">
            <div className="project_library">
              <img className="img_library" src={web_art} />
              <div className="container_description">
                <h2>Arte Digital</h2>
                <p className="description_library">
                  Plataforma diseñada para dar visibilidad a galerías de arte e
                  historia, en colaboracion con el Museo Metropolitano de Arte
                  que ofrece conjuntos de datos selectos con información sobre
                  más de 470.000 obras
                </p>
                <div className="buttons">
                  <a
                    href="https://github.com/JoseEduardoTrevizo/Web_art?tab=readme-ov-file"
                    className="button_git"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://joseeduardotrevizo.github.io/Web_art/"
                    className="button_git"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
