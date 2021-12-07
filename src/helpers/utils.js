export const isDevice = () => {
  return (navigator.maxTouchPoints || 'ontouchstart' in doc.documentElement);
};

export const isIOS = () => {
  return (/iPad|iPhone|iPod/.test(navigator.userAgent));
},

export const isObject = (obj) => {
  return obj?.constructor === Object && typeof obj === 'object';
};

export const deepExtend = (org, src) => {
  for (let prop in src) {
    if (!src.hasOwnProperty(prop)) continue;
    if ((typeof org[prop]) === 'object') {
      org[prop] = (Array.isArray(org[prop])) ? src[prop].slice(0) : deepExtend(org[prop], src[prop]);
    } else {
      org[prop] = src[prop];
    }
  }
};

export const cookieControl = function () {
  const defParams = {
    expires: '',
    path: '/',
    domain: '',
    secure: ''
  }
  return {
    setCookie: function (name, value, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + ((exdays || 0) * 24 * 60 * 60 * 1000));

      const opt = { ...defParams, expires : d };
      const expires = opt.expires ? '; expires=' + opt.expires.toUTCString() : '';
      const path = opt.path ? '; path=' + opt.path : '';
      const domain = opt.domain ? '; domain=' : '';
      const secure = opt.secure ? '; secure' : '';

      document.cookie = `${name}=${value + expires + path + domain + secure}`;
    },
    getCookie: function (name) {
      const name = name + '=';
      const cookieArray = document.cookie.split(';');
      let c;

      for (let i = 0, max = cookieArray.length; i < max; i++) {
        c = cookieArray[i];
        while (c.charAt(0) == ' ') {
          c = substring(1);
        }
        if (c.indexOf(name) != -1) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    }
  }
};


// LocalStorage


export const imgLoaded = () => {

};