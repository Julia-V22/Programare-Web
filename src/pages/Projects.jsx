import ProjectList from '../ProjectList'; 

function Projects() {
  return (
    <div className="page-container">
      <h1 style={{ marginBottom: '30px' }}>Proiectele mele</h1>
      
      <div style={{
        backgroundColor: 'white',
        borderRadius: '30px',
        padding: '40px',
        width: '100%',
        maxWidth: '1200px', 
        boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
        color: '#333',
        margin: '0 auto'
      }}>
        <ProjectList />
      </div>
    </div>
  );
}

export default Projects;