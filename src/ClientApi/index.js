import axios from "axios"
export const fetchUsers = async () => {
  var result = ""
  try {
    // ******replace the api url with YOURS*****
    result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  } catch (e) {
    result = e
  }
  return result
}
