import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card onClick={() => this.onDishSelect(dish)}>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />

          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="container">
        <div></div>
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default DishDetail;
