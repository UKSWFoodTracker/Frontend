import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {Doughnut} from 'react-chartjs-2';
import { getMeals } from '../../actions/ingridientsActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const dayDiff = (date1, date2) => {
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  return diffDays;
}


function getMealsData(data) {
  let breakfast = 0, dinner = 0, lunch = 0, other = 0, snack = 0, supper = 0;
  data.forEach(element => {
    if(new Date(element.created).setHours(0,0,0,0) === new Date().setHours(0,0,0,0)){
      switch (element.name) {
        case "breakfast":
          element.ingredients.forEach(i => breakfast += i.calories)
          break
        case "dinner":
          element.ingredients.forEach(i => dinner += i.calories)
          break
        case "lunch":
          element.ingredients.forEach(i => lunch += i.calories)
          break
        case "snack":
          element.ingredients.forEach(i => snack += i.calories)
          break
        case "supper":
          element.ingredients.forEach(i => supper += i.calories)
          break
        case "other":
          element.ingredients.forEach(i => other += i.calories)
          break
        default:
          console.error("Skipping invalid element");
      }
    }
  });
  return [breakfast, dinner, lunch, snack, supper, other]
}

function getMealsWeekly(data) {
  let breakfast = 0, dinner = 0, lunch = 0, other = 0, snack = 0, supper = 0;
  data.forEach(element => {
    if(dayDiff(new Date(), new Date(element.created)) <= 7) {
      switch (element.name) {
        case "breakfast":
          element.ingredients.forEach(i => breakfast += i.calories)
          break
        case "dinner":
          element.ingredients.forEach(i => dinner += i.calories)
          break
        case "lunch":
          element.ingredients.forEach(i => lunch += i.calories)
          break
        case "snack":
          element.ingredients.forEach(i => snack += i.calories)
          break
        case "supper":
          element.ingredients.forEach(i => supper += i.calories)
          break
        case "other":
          element.ingredients.forEach(i => other += i.calories)
          break
        default:
          console.error("Skipping invalid element");
      }
    }
  });
  return [breakfast, dinner, lunch, snack, supper, other]
}

function getMealsMonthly(data) {
  let breakfast = 0, dinner = 0, lunch = 0, other = 0, snack = 0, supper = 0;
  data.forEach(element => {
    if(dayDiff(new Date(), new Date(element.created)) <= 30) {
      switch (element.name) {
        case "breakfast":
          element.ingredients.forEach(i => breakfast += i.calories)
          break
        case "dinner":
          element.ingredients.forEach(i => dinner += i.calories)
          break
        case "lunch":
          element.ingredients.forEach(i => lunch += i.calories)
          break
        case "snack":
          element.ingredients.forEach(i => snack += i.calories)
          break
        case "supper":
          element.ingredients.forEach(i => supper += i.calories)
          break
        case "other":
          element.ingredients.forEach(i => other += i.calories)
          break
        default:
          console.error("Skipping invalid element");
      }
    }
  });
  return [breakfast, dinner, lunch, snack, supper, other]
}

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.getMeals();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const getMeals = getMealsData(this.props.data);
    const getMealsWeek = getMealsWeekly(this.props.data);
    const getMealsMonth = getMealsMonthly(this.props.data);
    
    const dataToday = {
      labels: [
        'Śniadanie',
        'Obiad',
        'Lunch',
        'Przekąska',
        'Kolacja',
        'Inne'
      ],
      datasets: [{
        data: getMeals,
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF6234',
        '#36A200',
        '#6666ff',
        ],
      }]
    };

    const dataWeek = {
      labels: [
        'Śniadanie',
        'Obiad',
        'Lunch',
        'Przekąska',
        'Kolacja',
        'Inne'
      ],
      datasets: [{
        data: getMealsWeek,
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF6234',
        '#36A200',
        '#6666ff',
        ],
      }]
    };
    
    const dataMonth = {
      labels: [
        'Śniadanie',
        'Obiad',
        'Lunch',
        'Przekąska',
        'Kolacja',
        'Inne'
      ],
      datasets: [{
        data: getMealsMonth,
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF6234',
        '#36A200',
        '#6666ff',
        ],
      }]
    };

    return (
      <div>
        <Button color="danger" className="btn btn-primary btn-float mb-5 stat" onClick={this.toggle}><FontAwesomeIcon icon="info" /></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Statystyki</ModalHeader>
          <ModalBody>
            <h2>Dzisiaj</h2>
            <Doughnut data={dataToday} />
            <h2>Ostatni tydzień</h2>
            <Doughnut data={dataWeek} />
            <h2>Ostatni miesiąc</h2>
            <Doughnut data={dataMonth} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingr: state.ingr
});

export default connect(mapStateToProps, {getMeals})(Statistics);