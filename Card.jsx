import React from 'react'
import "./Card.css"
import Card from 'react-bootstrap/Card';


function CardImg() {
  return (
  <Card  className="cardDiv">
  <Card.Body>
    
    <Card.Text>
    <h5 className='title'>From strategy to delivery, we are<br/> here <span className='textColor'>to make sure your business</span><br/> endeavor succeeds. Trust our experts.
</h5><br/>
<p className='paragraf'>ALEX LEE, CEO</p>
      
    </Card.Text>
  </Card.Body>
</Card>
  )
}

export default CardImg;
