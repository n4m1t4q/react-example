import axios from 'axios';

export class HttpClient {
  async get<T>(url: string): Promise<T> {
    return (await axios.get<T>(url)).data;
  }

  async post<T>(url: string, data: unknown): Promise<T> {
    return (await axios.post<T>(url, data)).data;
  }

  async put<T>(url: string, data: unknown): Promise<T> {
    return (await axios.put<T>(url, data)).data;
  }

  async delete<T>(url: string): Promise<T> {
    return (await axios.delete<T>(url)).data;
  }
}
