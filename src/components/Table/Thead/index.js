import Thead from './Thead'
import {withProps, compose} from 'recompose'

const enhance = compose(
  withProps({
    headerFields:['Name','Website','Image','']
  })
)

export default enhance(Thead);
