import {Services} from './Services'

import {withRouter} from 'react-router-dom'
import {compose, lifecycle, mapProps} from 'recompose'

// Api
import getSalonServices from '../../../Api/getSalonServices'

const enhanse = compose(
  withRouter,
  lifecycle({
    async componentDidMount(){
      const {match} = this.props;
      const salonServices = await getSalonServices(match.params.id)
      this.setState({
        ...salonServices
      })
    }
  }),
  mapProps(({services})=>({
    services
  }))
)

export default enhanse(Services)
