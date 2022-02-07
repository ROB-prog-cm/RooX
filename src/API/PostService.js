import axios from "axios";


export default class PostService {
  static async getAll() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  static async getUserID(id) {
    return await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
  }
}