import Tbody from './Tbody';
import {withRouter} from 'react-router-dom'

import {compose} from 'recompose';

const enhance = compose(
  withRouter,
)

export default enhance(Tbody)
