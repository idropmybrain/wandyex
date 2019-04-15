/* eslint-disable */

import superagent from 'superagent';
const methods = ['get', 'post', 'put', 'patch', 'del'];
const HOSTNAME = 'http://localhost:3004';

function formatUrl(path) {
  let apiPath = path;
  let apiPathArray = [];

  if (apiPath.indexOf('?') != -1) {
    apiPathArray = apiPath.split('?');
    apiPath = apiPathArray[0];
    apiPathArray.shift();
  }

  const adjustedPath = HOSTNAME + (apiPathArray.length != 0 ? `?${apiPathArray.join('')}` : '');
  return adjustedPath;
}

export default class ApiClient {
  constructor(req) {
    methods.forEach(method => {
      this[method] = (path, { params, data, headers = {}, files, fields } = {}) => new Promise((resolve, reject) => {
        headers['Accept'] = "application/json";
        let request = superagent[method](formatUrl(path))
          .set(headers);
        if (path.indexOf('fakeapi') !== -1) {
          let fakePath = path;
          let splitPathArray = fakePath.split('/');
          splitPathArray.shift();
          let constructedURL = splitPathArray.join('/');
          request = superagent[method](`${HOSTNAME}/${constructedURL}`);
        }
        if (params) {
          request.query(params);
        }

        if (headers) {
          request.set(headers);
        }

        if (this.token) {
          request.set('Authorization', `Bearer ${this.token}`);
        }

        if (files) {
          request.send(files);
        }

        if (fields) {
          fields.forEach(item => request.field(item.key, item.value));
        }

        if (data) {
          headers['Content-Type'] = "application/json";
          request.set(headers);
          request.send(data);
        }

        request.end((err, response = {}) => {
          if (err) {
            reject(response.body || err);
          } else {
            if (response.text != '') {
              resolve(JSON.parse(response.text));
            } else {
              resolve();
            }
          }
        });
      });
    });
  }
}
