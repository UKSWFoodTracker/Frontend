import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import uuid from 'uuid';

import { getIngridients, addIngridient, postMeal } from '../../actions/ingridientsActions';
import IngridientsList from './IngridientsList';



class FloatButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      meal: 'breakfast',
      ingridient: '',
      kcal: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addIngridients = this.addIngridients.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getIngridients();
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

  onSubmit(e) {
    e.preventDefault();

    const meal = {
        name: this.state.meal,
        ingredients: this.props.ingr.ingridients.map(item => {
            return {"name": item.name, "calories": Number.parseInt(item.calories)}
        })
	}

    this.props.postMeal(meal);
  }

  addIngridients(e) {
    e.preventDefault();

    const ingridient = this.state.ingridient;
    const kcal = this.state.kcal;

    this.props.addIngridient({name: ingridient,  calories: kcal, id: uuid()})
  }

  render() {
    return (
      <div>
        <Button color="danger" className="btn btn-primary btn-float" onClick={this.toggle}>+</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Dodaj posiłek</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleSelect">Wybierz rodzaj posiłku</Label>
                <Input type="select" name="meal" id="exampleSelect" value={this.state.meal} onChange={this.handleChange} className="mb-2">
                    <option value="breakfast">Śniadanie</option>
                    <option value="dinner">Obiad</option>
                    <option value="supper">Kolacja</option>
                    <option value="lunch">Lunch</option>
                    <option value="snack">Przekąska</option>
                    <option value="other">Inne</option>            
                </Input>
                <FormGroup>
                    <Label>Składniki</Label><br/>
                    <div className="ing">
                        <Input className="ing-input mr-1" type="text" name="ingridient" placeholder="składnik"
                            onChange={this.handleChange} value={this.state.ingridient} />
                        <Input className="ing-input" type="text" name="kcal" placeholder="kcal" 
                            onChange={this.handleChange} value={this.state.kcal}/>
                        <button className="btn btn-primary ml-1" onClick={this.addIngridients}>+</button>
                    </div>
                </FormGroup>
                    <IngridientsList />
                </FormGroup>
            <hr />

            <Input className="btn btn-primary" value="Zapisz" type="submit" onClick={this.toggle} />
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

export default connect(mapStateToProps, {getIngridients, addIngridient, postMeal})(FloatButton);