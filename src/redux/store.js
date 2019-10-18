import React from 'react';
import {createStore} from 'redux';

const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  img: '',
  mortgage: 0,
  rent: 0
};

export const UPDATE_STEP_ONE = 'UPDATE_NAME',
      UPDATE_STEP_TWO = 'UPDATE_ADDRESS',
      UPDATE_STEP_THREE = 'UPDATE_ADDRESS',
      CANCEL = 'CANCEL';

export function reducer (state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case UPDATE_STEP_ONE:
      console.log(state, payload)
      return {...state,
        name: payload.name,
        address: payload.address,
        city: payload.city,
        state: payload.state,
        zip: payload.zip
      }
    case UPDATE_STEP_TWO:
        console.log(state, payload)
      return {...state, img: payload.img}
    case UPDATE_STEP_THREE:
        console.log(state, payload)
      return {...state,
        mortgage: payload.mortgage,
        rent: payload.rent
      }
    case CANCEL:
        console.log(state, payload)
      return {
        ...initialState
      }
    default:
      return state;
  }
}

export default createStore(reducer)