import {Salon} from './Salon';
import {withRouter} from 'react-router-dom'
import {compose, lifecycle, mapProps} from 'recompose'

// Api
import getSalonInfo from '../../Api/getSalonInfo'

const enhanse = compose(
  withRouter,
  lifecycle({
    async componentDidMount(){
      const {match} = this.props;
      const salonInfo = await getSalonInfo(match.params.id)
      this.setState({
        ...salonInfo,
      })
    }
  }),
  mapProps(({salon})=>({
    salon
  }))
)

export default enhanse(Salon);
