import axios from 'axios'

const getSalonInfo = (salonId) =>
  axios({
    url: `http://staging.salony.com/v5/salons/${salonId}`,
    method: 'get',

  }).then(result => result.data);

export default getSalonInfo;
