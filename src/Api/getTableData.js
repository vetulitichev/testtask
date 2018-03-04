import axios from 'axios'

const getTableData = (page, fieldCount) =>
  axios({
    url: `http://staging.salony.com/v5/salons?per_page=${fieldCount}&page=${page}`,
    method: 'get',
  }).then(result => result.data);

export default getTableData;
