import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import uuid from 'uuid';

import { getMeals } from '../../actions/ingridientsActions';
import axios from 'axios';
import { API } from '../../routes/Api';


class EditMeal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      meal: this.props.data.name,
      ingridient: '',
      kcal: '',
      data: this.props.data.ingredients
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addIngridients = this.addIngridients.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const target = e.target;
    const name = target.name;

    this.setState({[name]: e.target.value})
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  delItem(id) {
    this.setState({data: this.state.data.filter(item => item.id !== id)})
  }

  onSubmit(e) {
    e.preventDefault();

    const meal = {
        id: this.props.data.id,
        name: this.state.meal,
        ingredients: this.state.data.map(item => {
            return {"name": item.name, "calories": Number.parseInt(item.calories)}
        })
	}

    axios
      .put(`${API}/meals`, meal)
      .then(() => this.props.getMeals())
      .catch(err => console.error("error: ", err))
  }

  addIngridients(e) {
    e.preventDefault();

    const ingridient = this.state.ingridient;
    const kcal = this.state.kcal;
    this.setState(prevState => ({
        data: [...prevState.data, {name: ingridient,  calories: kcal, id: uuid()}]
    }))
  }

  render() {
    return (
      <div>
        <Button className="btn btn-outline-primary btn-sm float-right mt-1 bc" onClick={this.toggle}>Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add your meal</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleSelect">Select meal type</Label>
                <Input type="select" name="meal" id="exampleSelect" value={this.state.meal} onChange={this.handleChange} className="mb-2">
                    <option value="breakfast">Breakfast</option>
                    <option value="dinner">Dinner</option>
                    <option value="supper">Supper</option>
                    <option value="lunch">Lunch</option>
                    <option value="snack">Snack</option>
                    <option value="other">Other</option>            
                </Input>
                <FormGroup>
                    <Label>Ingridients</Label><br/>
                    <div className="ing">
                        <Input className="ing-input mr-1" type="text" name="ingridient" placeholder="name of the meal"
                            onChange={this.handleChange} value={this.state.ingridient} />
                        <Input className="ing-input" type="text" name="kcal" placeholder="kcal" 
                            onChange={this.handleChange} value={this.state.kcal}/>
                        <button className="btn btn-primary ml-1" onClick={this.addIngridients}>+</button>
                    </div>
                </FormGroup>
                {this.state.data.map( item => {
                    for (let keys in item) {
                        return (
                                <div key={uuid()} className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>{item.name}</strong> {item.calories} 
                                    <button type="button" className="close" data-dismiss="alert" 
                                        onClick={() => {this.delItem(item.id)}} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            )
                        }
                        return true;
                    })}
                </FormGroup>
            <hr />

            <Input className="btn btn-primary" value="Save" type="submit" onClick={this.toggle} />
          </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingr: state.ingr
});

export default connect(mapStateToProps, {getMeals})(EditMeal);