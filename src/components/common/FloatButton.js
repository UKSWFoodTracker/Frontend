import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import { getIngridients, addIngridient } from '../../actions/ingridients';
import IngridientsList from './IngridientsList';


class FloatButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      meal: 'breakfast',
      ingridient: '',
      kcal: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addIngridients = this.addIngridients.bind(this);
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

  addIngridients(e) {
    e.preventDefault();
    const ingridient = this.state.ingridient;
    const kcal = this.state.kcal;
    // let joined = [...this.state.ingridients, {[ingridient]: kcal}]
    // console.log('j',joined)
    this.props.addIngridient({[ingridient]: kcal})
  }

  render() {
    const {ingridients} = this.state;
    console.log(this.props)
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
                        <button className="btn btn-primary ml-1" onClick={this.addIngridients}>+</button>
                    </div>
                </FormGroup>
                    <IngridientsList />
                </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    ingr: state.ingr
});

export default connect(mapStateToProps, {getIngridients, addIngridient})(FloatButton);