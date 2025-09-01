import minhaFoto from '../assets/images/eu.png';
import foto1 from '../assets/images/foto_1.png';
import elon from '../assets/images/elonMusk.png';

export interface Student {
  name: string;
  role: string;
  imageUrl: string;
  github: string;
}
export const students: Student[] = [
  {
    name: 'Samuel Ramos Maciel',
    role: 'Estudante',
    imageUrl: minhaFoto, 
    github: 'https://github.com/Sabdux',
  },
  {
    name: 'João Vithor Silva Ramos',
    role: 'Estudante',
    imageUrl: foto1,
    github: 'https://github.com/joaovithor99',
  },
  {
    name: 'Elon Musk',
    role: 'Faxineiro',
    imageUrl: elon , 
    github: 'https://github.com/elonmuskceo',
  },
  {
    name: 'Linus Torvalds',
    role: 'Criador do Linux',
    imageUrl: 'https://avatars.githubusercontent.com/u/1024025?v=4', 
    github: 'https://github.com/torvalds',
  },
];