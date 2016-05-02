import AV, { localStorage, Promise, _ajax as ajax, _ } from 'avoscloud-sdk';

export default {
  AV, // Object.extend, User, Query, GeoPoint, Cloud.run
  localStorage, // api: getItem, setItem(string key, string value), removeItem, clear
  Promise, // api: new Promise, resolve, reject, then
  ajax, // function(method, url, data, success, error)
  _
};
