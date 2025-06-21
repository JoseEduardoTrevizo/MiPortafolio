import React from "react";
import html from "../../images/html5.svg";
import css from "../../images/css3.svg";
import javascript from "../../images/javascript.svg";
import react from "../../images/react.svg";
import vite from "../../images/vite.svg";
import git from "../../images/git.svg";
import github from "../../images/github.svg";
import postman from "../../images/postman.svg";
import spring from "../../images/spring.svg";
import java from "../../images/java.svg";
import mysql from "../../images/mysql.svg";

export default function Inicio() {
  return (
    <div className="home">
      <h1>
        Hola a todos, soy Eduardo Trevizo de Chihuahua, Mexico. Soy{" "}
        <strong>Ingeniero</strong> Mecatronico con gusto por la programacion,
        ademas de mi formacion en ingenieria me forme como{" "}
        <strong>desarrollador Web.</strong>
      </h1>
      <h2>
        Sigo desarrollando mis habilidades en programcion utilizando
        herramientas como <strong>React</strong> y un poco de{" "}
        <strong>MySQL.</strong> Ademas tengo un gusto por la filosofia
        especialmente en el Estoicismo y trato de aplicarla a mi dia a dia.
      </h2>
      <h3 className="skills_title">Mis habilidades</h3>
      <section className="skills_container">
        <img className="html" src={html} />
        <img className="css" src={css} />
        <img className="javaScript" src={javascript} />
        <img className="react" src={react} />
        <img className="vite" src={vite} />
        <img className="git" src={git} />
        <img className="gitHub" src={github} />
        <img className="postman" src={postman} />
        <img className="spring" src={spring} />
        <img className="java" src={java} />
        <img className="mysql" src={mysql} />
      </section>
    </div>
  );
}
