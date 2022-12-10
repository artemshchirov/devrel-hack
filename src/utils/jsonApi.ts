export default class JsonApi {

  _baseUrl: string;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  // TODO: change any
  _handleResponse = (response: any) =>
    response.ok
      ? response.json()
      : Promise.reject(Error(`Error, code: ${response.status}`));

  _fetch(path: string) {
    const url = this._baseUrl + path;
    return fetch(url)
      .then((res) => this._handleResponse(res));
  }

  // TODO: main api
}
