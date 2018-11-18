
import React from 'react';
import { connect } from 'react-redux';
import { deleteIngridient } from '../../actions/ingridientsActions';

const IngridientListItem = ({ dispatch, item, ide, itemId }) => {
    return(
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>{item}</strong> {ide} 
          <button type="button" className="close" data-dismiss="alert" 
              onClick={() => { dispatch(deleteIngridient( {itemId} ))}} aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
        </div>
)};

export default connect()(IngridientListItem);