import axios from 'axios'

const getSalonServices = (salonId) =>
  axios({
    url: `http://staging.salony.com/v5/salons/${salonId}/services`,
    method: 'get',
  }).then(result => result.data);

export default getSalonServices;
