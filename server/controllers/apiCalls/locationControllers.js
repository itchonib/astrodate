const axios = require('axios');

const aHeaders = {
  headers: {
    'api-token': process.env.LOCATION_API_TOKEN,
    'user-email': process.env.LOCATION_EMAIL
  }
};

const authToken = async () => {
  try {
    const { data } = await axios.get(
      'https://www.universal-tutorial.com/api/getaccesstoken',
      aHeaders
    );
    console.log(data.auth_token);
    return data.auth_token;
  } catch (error) {
    console.log(error);
  }
};

// const headers = {
//   headers: {
//     Authorization: 'Bearer ' +  authToken()
// Authorization: 'Bearer ' +  process.env.LOCATION_AUTH_TOKEN
//   }
// };

exports.getCountry = async (req, res) => {
  try {
    let autHT = await authToken();
    console.log(autHT);
    const data = await axios.get(
      'https://www.universal-tutorial.com/api/countries/',
      {
        headers: {
          Authorization: 'Bearer ' + autHT
          // Authorization: 'Bearer ' +  process.env.LOCATION_AUTH_TOKEN
        }
      }
    );
    await res.json(data.data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
    console.log(error);
  }
};

exports.getState = async (req, res) => {
  try {
    let autHT = await authToken();
    const data = await axios.get(
      `https://www.universal-tutorial.com/api/states/${req.params.id}`,
      {
        headers: {
          Authorization: 'Bearer ' + autHT
          // Authorization: 'Bearer ' +  process.env.LOCATION_AUTH_TOKEN
        }
      }
    );
    res.json(data.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getCity = async (req, res) => {
  try {
    let autHT = await authToken();
    const data = await axios.get(
      `https://www.universal-tutorial.com/api/cities/${req.params.id}`,
      {
        headers: {
          Authorization: 'Bearer ' + autHT
          // Authorization: 'Bearer ' +  process.env.LOCATION_AUTH_TOKEN
        }
      }
    );
    res.json(data.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
