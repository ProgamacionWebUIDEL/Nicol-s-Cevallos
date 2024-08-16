'use client';
import { onSubmit, onSubmitPost } from './hook.js';

export function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export function Tabla() {
  return (
    <table>
      <th>Tabla de ejemplo</th>
      <tr>Esta es una columna</tr>
    </table>
  );
}

export function Boton() {
  return (
    <button onClick={onSubmit} type="button" className="bg-[#03194f] p-3 rounded-xl hover:dark:border-neutral-700 hover:bg-gray-700">
      BOTON
    </button>
  );
}

export function Boton2() {
  return (
    <button onClick={onSubmitPost} type="button" className="bg-[#03194f] p-3 rounded-xl hover:dark:border-neutral-700 hover:bg-gray-700">
      BOTON POST
    </button>
  );
}

export default function Gallery() {
  return (
    <section>
      <Profile />
      <Tabla />
      <Boton />
      <Boton2 />
    </section>
  );
}
