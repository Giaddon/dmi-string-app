/** Class for managing API requests */

import axios from 'axios';

const endpoint = 'http://localhost:3000/strings';

export default class StringAPI {
  // Sends get request to server, returns either array of strings or throws error.
  static async getAll() {
    try {
      const response = await axios.get(endpoint);
      if (response.data.strings) return response.data.strings;
      const error = new Error('String data not found.');
      throw error;
    } catch (error) {
      throw error;
    }
  }

  /** Sends post request to server with new string data from store.
   * @param {string} newString User submitted string taken from store.
   * @return {string} Returns the newString accepted by server or throws an error.
   */
  static async postNew(newString) {
    try {
      const response = await axios.post(endpoint, { newString });
      if (response.data.added) return response.data.added;
      const error = new Error('Unable to submit string.');
      throw error;
    } catch (error) {
      throw error;
    }
  }
}
