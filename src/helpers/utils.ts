export const isDevice = (): number | boolean => {
  return (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
};

export const isIOS = (): boolean => {
  return (/iPad|iPhone|iPod/.test(navigator.userAgent));
};

export const isObject = (obj: {}): boolean => {
  return obj?.constructor === Object && typeof obj === 'object';
};

export const deepExtend = (org: { [key: string]: any }, src: { [key: string]: any }) => {
  for (let prop in src) {
    if (!src.hasOwnProperty(prop)) continue;
    if ((typeof org[prop]) === 'object') {
      org[prop] = (Array.isArray(org[prop])) ? src[prop].slice(0) : deepExtend(org[prop], src[prop]);
    } else {
      org[prop] = src[prop];
    }
  }
};

export const debounce = (func: () => any, delay: number) => {
  let inDebounce: ReturnType<typeof setTimeout>;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  }
};

export const throttle = (func: () => any, limit: number) => {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
};

export const scrollTo = (x: number, smooth?: boolean, element?: HTMLElement) => {
  const elem = element ? element : window;
  const behavior = smooth ? 'smooth' : 'auto';
  elem.scrollTo({ top: x, behavior });
};