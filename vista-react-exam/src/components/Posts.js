import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, Button } from 'reactstrap'

const Posts = ({ post, loading }) => {
  // const c = 0;
  if ( loading ) {
  return <h2>Loading...</h2>
  } 

  return <Row className="recipe">
    {post && post.length > 0 && post !== undefined && post.map((pst, index) => (
      
        <Col xs="4" className="mb-3" key={index}>
          <Card>
            <img className="card-img" alt="Sample" src={pst.recipe.image} />
            <CardBody className="card-body"> 
              <CardTitle className="card-title">{pst.recipe.label}</CardTitle>
                <Row className="mb-3">
                 <Col sm="6"><small>Calories: {pst.recipe.calories.toFixed(2)}</small></Col> 
                 <Col sm="6"> <small>Ingredients: {pst.recipe.ingredients.length}</small></Col>
                </Row>
              <Button className="recipeBtn" size="sm">View Recipe</Button>
            </CardBody>
          </Card>
        </Col>
      ))}
      </Row>
}



export default Posts;
