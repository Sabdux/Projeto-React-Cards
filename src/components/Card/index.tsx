import './style.css';
interface CardProps {
  name: string;
  title: string;
  imageUrl: string;
  github: string;
}
export function Card({ name, title, imageUrl, github }: CardProps) {
  return (
    <div className="card-container">
      <img src={imageUrl} alt={`Foto de ${name}`} className="card-image" />
      <h2 className="card-name">{name}</h2>
      <p className="card-role">{title}</p>
      <a href={github} target="_blank" rel="noopener noreferrer" className="card-github-button">
        GitHub
      </a>
    </div>
  );
}