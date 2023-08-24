import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';


// Creamos un div con un gradiente de fondo
// Podremos llamar directamente a esta constante desde cualquier modulo de la aplicacion y lo que hara es comportarse como un div, pero con este gradiente de fondo
export const GradientBackgroundCon = styled.div` 
  background: linear-gradient(to right, #000046, #1CB5E0);
  background-size: 400% 400%; // Damos la sensacion de un fondo expandido
  animation: gradient 6s ease infinite; // Animacion llamada gradient, duracion 6s, tiene un efecto ease y se repite infinitamente
  height: 100vh; // 100 view height
  width: 100vw; // 100 view width
  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
`;