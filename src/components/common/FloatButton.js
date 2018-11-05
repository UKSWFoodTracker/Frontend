import React from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import uuidv4 from 'uuid';


class FloatButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      meal: 'breakfast',
      ingridients: [],
      ingridient: '',
      kcal: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addIngridient = this.addIngridient.bind(this);
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

  addIngridient(e) {
    e.preventDefault();
    const ingridient = this.state.ingridient;
    const kcal = this.state.kcal;
    // let joined = [...this.state.ingridients, {[ingridient]: kcal}]
    // console.log('j',joined)
    this.setState({ ingridients: [...this.state.ingridients, {ingridient: kcal}] }) 

  }

  render() {
    const {ingridients} = this.state;
    console.log(this.state)
    return (
      <div>
        <Button color="danger" className="btn btn-primary btn-float" onClick={this.toggle}>+</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add your meal</ModalHeader>
          <ModalBody>
          <Form>
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
                        <button className="btn btn-primary ml-1" onClick={this.addIngridient}>+</button>
                    </div>

                </FormGroup>    
                    {   console.log(Object.entries(ingridients))}
                        {Object.entries(ingridients).forEach(([key, value]) => {
                        console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
                    })}
            </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FloatButton;