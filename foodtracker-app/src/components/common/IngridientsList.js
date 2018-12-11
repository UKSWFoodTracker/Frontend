import React from 'react';
import { connect } from 'react-redux';
import IngridientListItem from './IngridientListItem';
import uuidv4 from 'uuid';

const IngridientsList = (props) => {
    return (
        <div>
            {props.ingr.ingridients.map( item => {
                for (let keys in item) {
                   return (
                        <IngridientListItem 
                            key={uuidv4()}
                            item={item.name}
                            ide={item.calories}
                            itemId={item.id}
                            {...item} 
                        />
                    )
                }
                return true;
            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
      ingr: state.ingr
    };
  };
  
export default connect(mapStateToProps)(IngridientsList);
  