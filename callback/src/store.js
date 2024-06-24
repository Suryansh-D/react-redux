//reducer is the way to manage the state of the application
import React from 'react';
import { createStore} from 'redux';
import {omit} from 'lodash';
function reducer(state= {items: {}}, action) {
    switch(action.type) {
        case 'ADD_ITEM':
            const product = action.item;
            if(state.items[product.id]) {
        return {
           ...state,
              items: {
                ...state.items,
                [product.id]: {
                     ...state.items,
                     quantity: state.items[product.id].quantity+ 1
                }
                }
              }
        }else{
            return {
            ...state,
            items: {
                ...state.items,
                [product.id]: {
                ...product,
                quantity: 1
                }
            }
            }
      }
        case 'REMOVE_ITEM':
            if(state.items[action.item.id].quantity > 1) {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity - 1
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    items: omit(state.items, product.id)
                }
            }
           

        default:
        return state; // kyuki agar koi bhi action nahi hua toh state wahi rahega
    }
    }

const store = createStore(reducer);
export default store;

//action is an object
// action has two keys type and item or payload
// type is a string
// item is an object 