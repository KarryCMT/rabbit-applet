import CryptoJS from "crypto-js";
// 十六位十六进制数作为密钥
const SECRET_KEY = CryptoJS.enc.Utf8.parse("1234123412341234");
// 十六位十六进制数作为密钥偏移量
const SECRET_IV = CryptoJS.enc.Utf8.parse("1234123412341234");

/**
 * 加密方法
 * @param data
 * @returns {string}
 */
function encrypt(data) {
  if (typeof data === "object") {
    try {
      // eslint-disable-next-line no-param-reassign
      data = JSON.stringify(data);
    } catch (error) {
      console.log("encrypt error:", error);
    }
  }
  const dataHex = CryptoJS.enc.Utf8.parse(data);
  const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}

const timestampToTime = (timestamp) => {
  var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var M = date.getMonth() + 1;
  var D = date.getDate();
  return `${M}月${D}日`;
};
/**
 * 时间转换
 * @params {String | Number} 时间字符串或者时间戳
 */
const formatTime = (time) => {
  // 拿到当前的时间戳（毫秒) -- 转换为秒
  let currentTime = new Date();
  let currentTimestamp = parseInt(currentTime.getTime() / 1000);

  // 传进来的时间戳（毫秒)
  let t = new Date(time);
  let oldTimestamp = parseInt(t.getTime() / 1000);

  // 年
  let oldY = t.getFullYear();
  // 月
  let oldM = t.getMonth() + 1;
  // 日
  let oldD = t.getDate();
  // 时
  let oldH = t.getHours();
  // 分
  let oldi = t.getMinutes();
  // 秒
  let olds = t.getSeconds();

  // 相隔多少秒
  let timestampDiff = currentTimestamp - oldTimestamp;
  if (timestampDiff < 60) {
    // 一分钟以内
    return '刚刚';
  }

  if (timestampDiff < 60 * 60) {
    // 一小时以内
    return Math.floor(timestampDiff / 60) + '分钟前';
  }

  // 今天的时间
  if (
    oldY === currentTime.getFullYear() &&
    oldM === currentTime.getMonth() + 1 &&
    oldD === currentTime.getDate()
  ) {
    // 10:22
    return `${zeroize(oldH)}:${zeroize(oldi)}`;
  }

  // 剩下的，就是昨天及以前的数据
  return `${oldY}-${zeroize(oldM)}-${zeroize(oldD)}`;

  // 补0
  function zeroize(num) {
    return num < 10 ? '0' + num : num;
  }
};

const getDomHeight = (str) => {
  let info = uni.createSelectorQuery().select(str);
  let h = 0;
  info
    .boundingClientRect((data) => {
      h = data.height;
    })
    .exec();
  return h;
};

//判断是否是数组
const isArray = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

//js 深度克隆
const deepClone = (obj) => {
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== 'function' && typeof obj !== 'object') return obj;
  var res = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      res[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return res;
};
//js 深度合并
const deepMerge = (target = {}, source = {}) => {
  target = deepClone(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
};

const generateUuid = () => {
  return Date.now()
};

export {
  timestampToTime,
  isArray,
  deepClone,
  deepMerge,
  formatTime,
  getDomHeight,
  generateUuid,
  encrypt
};
