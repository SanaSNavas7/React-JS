import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Experience.css'; // Import CSS file for styling

function Experience() {
  const exp = [
    {
      title: "Project",
      desc: "Analysing aerosol, temperature and radiative forces using ML models",
      duration: "ICFOSS - One Month"
    },
    {
      title: "Coursera",
      desc: "Data analysis with Python",
      duration: "Cyber Security"
    },
    {
      title: "Google Cloud",
      desc: "Gen AI",
      duration: "" // If no duration, you can leave it empty
    },
    {
      title: "Edutex",
      desc: "Deep Learning",
      duration: "" // If no duration, you can leave it empty
    }
  ];

  return (
    <div className="experience-section">
      <h2>Experience and Certifications</h2>
      <div className="card-container">
        {exp.map((item, index) => (
          <Card key={index} className="experience-card">
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              {item.duration && <Card.Text><strong>Duration:</strong> {item.duration}</Card.Text>}
              <Button variant="outline-primary" className="more-info-btn">More Info</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Experience;
