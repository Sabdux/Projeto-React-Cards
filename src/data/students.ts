import minhaFoto from '../assets/images/eu.png';
import foto1 from '../assets/images/foto_1.png';

export interface Student {
  name: string;
  title: string;
  imageUrl: string;
  github: string;
}
export const students: Student[] = [
  {
    name: 'Samuel Ramos Maciel',
    title: 'CEO da NASA',
    imageUrl: minhaFoto, 
    github: 'https://github.com/Sabdux',
  },
  {
    name: 'João Vithor Silva Ramos',
    title: 'Hacker do FBI',
    imageUrl: foto1,
    github: 'https://github.com/joaovithor99',
  },
  {
    name: 'Yngrid',
    title: 'Inventora do Bitcoin',
    imageUrl: 'https://avatars.githubusercontent.com/u/224887640?v=4', 
    github: 'https://github.com/yngrid02',
  },
  {
    name: 'Cláudio Júnior',
    title: 'Programador quântico',
    imageUrl: 'https://avatars.githubusercontent.com/u/171395985?v=4', 
    github: 'https://github.com/claudiojrdev',
  },
];