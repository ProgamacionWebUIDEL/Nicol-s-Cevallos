import { getImageUrl } from './utils.js';
import { onsumit } from './hook.js';
'use client'

export function Avatar({ person, size }) {
    return (
      <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      />
    );
  }

export function Profile() {
    return (
        <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
    );
  }
export function Tabla(){
    return(
      <table>
        <th> Tabla ejemplo</th>
        <tr> Es un columna</tr>
      </table>
    );
  }

export function Boton(){
  return(
    <button type= 'button' onSubmit={onsumit}> Enviar info </button>   
  )
}  

export default function components(){
    return(
        <section>
            <Profile />
            <Tabla />
            <Boton />
        </section>
  );
}