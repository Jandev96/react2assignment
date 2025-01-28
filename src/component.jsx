import { Button } from "react-bootstrap";
import { useState } from "react";
import './style/style.css';


function Cards(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle full description
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Function to truncate long descriptions
  const truncateDescription = (description, length = 100) => {
    if (description.length > length) {
      return description.substring(0, length) + '...';
    }
    return description;
  };

  return (
    <div className="card" style={{ height:'35rem' }}>
      <img style={{width:'200px'}}
        src={props.product.image} 
        alt={props.product.title}  
        className="image"
      />
      <div className="card-body">
        <h2 className="card-title">{props.product.title}</h2>
        <p className="card-text">
          {showFullDescription 
            ? props.product.description 
            : truncateDescription(props.product.description)}
        </p>
        
        {props.product.description.length > 100 && !showFullDescription && (
          <Button variant="link" onClick={toggleDescription}>
            Read More
          </Button>
        )}
        
        {showFullDescription && (
          <Button variant="link" onClick={toggleDescription}>
            Show Less
          </Button>
        )}

        <h4>${props.product.price}</h4>
        <Button variant="primary">Add to Cart</Button>
      </div>
    </div>
  );
}

export default Cards;






