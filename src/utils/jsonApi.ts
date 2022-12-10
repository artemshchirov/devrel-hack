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

  getIssuesCount() {
    return fetch(this._baseUrl)
      .then((res) => this._handleResponse(res));
  }
}
