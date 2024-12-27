import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Education.css'; // Import CSS file for styling

function Education() {
  const edu = [
    {
      title: "High School Education",
      desc: "St Joseph's GHSS Changanasserry",
      grade: "A+",
      img: "" // No image needed
    },
    {
      title: "Higher Secondary Education",
      desc: "St Joseph's GHSS Changanasserry",
      grade: "99.33%",
      img: "" // No image needed
    },
    {
      title: "Degree",
      desc: "Assumption College Autonomous Changanasserry",
      grade: "Grade: S",
      percentage: "98.5%",
      img: "" // No image needed
    },
    {
      title: "PG",
      desc: "College of Engineering Trivandrum",
      img: "" // No image needed
    }
  ];

  return (
   
    <div className="card-container">
         <>
    <h2>Education</h2>
    </>
      {edu.map((item, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          {/* No image */}
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
            {item.grade && <Card.Text><strong>Grade:</strong> {item.grade}</Card.Text>}
            {item.percentage && <Card.Text><strong>Percentage:</strong> {item.percentage}</Card.Text>}
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Education;
