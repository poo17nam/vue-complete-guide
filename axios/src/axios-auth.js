//Custom Instances -> Used when you have specific paths and headers for specific requests
//You can use both global and custom instances at a time.

import axios from 'axios'

const instance = axios.create({
  baseURL : 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})

//You can also set defaults for these custom instances
//instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance // export the instance to use it anywhere in the application
