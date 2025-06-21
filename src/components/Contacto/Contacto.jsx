import React from "react";

export default function Contacto() {
  return (
    <div className="page_contact">
      <h1 className="title_contact">Contacto</h1>

      <form className="contact" action="Edwardo_tp@hotmail.com">
        <input type="text" placeholder="Nombre" required />
        <input type="text" placeholder="Apellidos" required />
        <input type="text" placeholder="Email" required />
        <textarea placeholder="Descripcion" required />
        <input className="button_send" type="submit" value="Enviar" />
      </form>
    </div>
  );
}
