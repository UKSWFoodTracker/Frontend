import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, ModalHeader, ModalBody } from 'reactstrap';
import uuid from 'uuid';

import { getIngridients, addIngridient, postMeal } from '../../actions/ingridientsActions';
import IngridientsList from './IngridientsList';
import withRoot from '../../withRoot';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },

  button: {
    margin: theme.spacing.unit,
  },

  extendedIcon: {
    marginRight: theme.spacing.unit,
  },  
});



class FloatButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oepn: true,
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
      open: !this.state.open
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

    this.props.addIngridient({name: ingridient, calories: kcal, id: uuid()})
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={this.toggle} id="btn-float">
          <AddIcon />
        </Button>
          {/* <ModalHeader toggle={this.toggle}>Add your meal</ModalHeader>
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
                    <IngridientsList />
                </FormGroup>
            <hr />

            <Input color="primary" className="btn btn-primary" value="Save" type="submit" onClick={this.toggle} />
          </Form>
          </ModalBody> */}
           <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            onClick={this.toggle}
          >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingr: state.ingr
});

const SimpleModalWrapped = withStyles(styles)(FloatButton);

export default connect(mapStateToProps, {getIngridients, addIngridient, postMeal})(withRoot(SimpleModalWrapped));