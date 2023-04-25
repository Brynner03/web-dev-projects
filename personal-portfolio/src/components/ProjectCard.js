import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ title, description, imgUrl, url }) => {

  const handleClick = () => {
    // open the url in a new tab when the image is clicked
    window.open(url, '_blank');
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} onClick={handleClick} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}<br></br></span><br></br>
          <Button variant="primary" onClick={handleClick}>Live Site</Button>
        </div>
      </div>
    </Col>
  )
}
