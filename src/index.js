export function params(obj) {
  return Object.keys(obj).map(key => {
    if(!obj[key]) {
      return;
    }
    if(Array.isArray(obj[key])) {
      return obj[key].map(item => encodeURI(`${key}=${item}`)).join('&');
    }
    return encodeURI(`${key}=${obj[key]}`);
  }).filter(item => item).join('&');
}
