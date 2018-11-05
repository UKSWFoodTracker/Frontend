import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid';



const IngridientsList = (props) => {
    return (
        <div>
            {props.ingr.ingridients.map( (item) => {
                for (let key in item) {
                   return (<h3 key={uuidv4()}>{key}: {item[key]}kcal</h3>)
                }
            }     
            )}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
      ingr: state.ingr
    };
  };
  
export default connect(mapStateToProps)(IngridientsList);
  