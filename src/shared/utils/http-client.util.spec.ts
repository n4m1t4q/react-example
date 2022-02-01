import axios from 'axios';
import { HttpClient } from 'shared/utils';

describe("HttpClient", () => {
  const url = "http://localhost";
  const httpClient = new HttpClient();
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  let mockedValue: string;

  it("Should handle get", async () => {
    mockedValue = "get response";
    const spy = jest.spyOn(mockedAxios, "get").mockResolvedValue({ data: mockedValue });
    const result = await httpClient.get(url);

    expect(spy).toHaveBeenCalledWith(url);
    expect(result).toEqual(mockedValue);
  });

  it("Should handle post", async () => {
    mockedValue = "post response";
    const mockedRequestBody = {};
    const spy = jest.spyOn(mockedAxios, "post").mockResolvedValue({ data: mockedValue });
    const result = await httpClient.post(url, mockedRequestBody);

    expect(spy).toHaveBeenCalledWith(url, mockedRequestBody);
    expect(result).toEqual(mockedValue);
  });

  it("Should handle put", async () => {
    mockedValue = "put response";
    const mockedRequestBody = {};
    const spy = jest.spyOn(mockedAxios, "put").mockResolvedValue({ data: mockedValue });
    const result = await httpClient.put(url, mockedRequestBody);

    expect(spy).toHaveBeenCalledWith(url, mockedRequestBody);
    expect(result).toEqual(mockedValue);
  });

  it("Should handle delete", async () => {
    mockedValue = "delete response";
    const spy = jest.spyOn(mockedAxios, "delete").mockResolvedValue({ data: mockedValue });
    const result = await httpClient.delete(url);

    expect(spy).toHaveBeenCalledWith(url);
    expect(result).toEqual(mockedValue);
  });
});
