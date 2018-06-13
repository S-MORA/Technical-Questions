function decodeString(s) {
  while (s.includes('[')) {
    s = s.replace(/\d+\[\w+\]/g, s => {
      let open = s.indexOf('[');
      let close = s.indexOf(']');
      let num = Number.parseInt(s.slice(0, open));
      let subString = s.slice(open + 1, close);
      return subString.repeat(num);
    })
  }
  return s;
};