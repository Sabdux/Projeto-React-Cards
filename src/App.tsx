import './App.css';
import { Card } from './components/Card';
import { students } from './data/students';

function App() {
  // Pega eu primeeiro
  const yourInfo = students[0];

  // Pega os outros e os ordena em ordem alfabética pelo nome
  const otherStudents = students.slice(1).sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="app-container">
      <h1>Meu Grupo de Projeto</h1>

      
      <div className="cards-grid">
        
        <Card
          key={yourInfo.name}
          name={yourInfo.name}
          title={yourInfo.title}
          imageUrl={yourInfo.imageUrl}
          github={yourInfo.github}
        />

        {/* Renderiza os cards dos outros estudantes em ordem alfabética */}
        {otherStudents.map(student => (
          <Card
            key={student.name}
            name={student.name}
            title={student.title}
            imageUrl={student.imageUrl}
            github={student.github}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
