import React from 'react'
import {Card, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap'

const RecipeList = ({post}) => {
  return (
    <div className=" cards justify-content-center">
      <Row>
      {post && post.length > 0 && post !== undefined && post.map((pst, index) => (
        <Col xs="3" key={index} >
          <Card>
            <img alt="Sample" src={pst.recipe.image} />
            <CardBody> 
              <CardTitle tag="h6">{pst.recipe.label}</CardTitle>
              <CardText>
              </CardText>
              <Button size="sm">View Recipe</Button>
            </CardBody>
          </Card>
        </Col>))}
      </Row>
    </div>
  )
}

export default RecipeList
