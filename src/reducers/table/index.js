import {TABLE_DATA} from '../../store/actionNames'

export const tableData = (state = [], action) => {
  if(action.type === TABLE_DATA){
    return action.data
  }
  return state;
}
