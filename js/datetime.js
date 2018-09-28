/**
 * 字符串转时间戳
 * @param {*} str
 */
export const str2ts = str => Date.parse(new Date(str)) / 1000;

/**
 * 时间戳转字符串
 * @param {*} ts 时间戳
 * @param {*} formatType 类型
 * @param {*} checkRange 校验区域
 * 支持H24进制，h12进制
 * 支持M、d、h、m、s两位时首位补零
 */
export const ts2str = (ts = Date.parse(new Date()) / 1000, formatType = 'yyyy-MM-dd HH:mm:ss') => {
  let res = formatType;
  const dt = new Date(ts * 1000);
  const t = {
    'y+': dt.getFullYear(),
    'M+': dt.getMonth() + 1,
    'd+': dt.getDate(),
    'H+': dt.getHours(),
    'h+': dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours(),
    'm+': dt.getMinutes(),
    's+': dt.getSeconds(),
    'S+': 0,
  };
  function padStr(source, padLen) {
    return padLen < 2 ? source : String(source).padStart(2, '0');
  }
  function fixStr(source, fixLen) {
    const tmpNum = Number(`0.${source}`);
    return String(Number(tmpNum.toFixed(fixLen))).substring(2);
  };
  for (const k of Object.keys(t)) {
    if (new RegExp(`(${k})`).test(res)) {
      const len = RegExp.$1.length;
      if (k === 'y+') {
        res = res.replace(RegExp.$1, String(t[k]).substr(4 - len));
      } else if (k === 'S+') {
        const decimals = String(ts).split('.')[1];
        res = res.replace(RegExp.$1, fixStr(decimals, 3 * len));
      } else {
        res = res.replace(RegExp.$1, padStr(t[k], len));
      }
    }
  }
  return res;
};

// 2018/9/1 9:9:9
// console.log(ts2str(1535764149)); // 2018-09-01 09:09:09
// console.log(ts2str(1535764149, 'yyyy-MM-dd hh:mm:ss')); //2018-09-01 09:09:09
// console.log(ts2str(1535764149.870763, 'yyyy-MM-dd hh:mm:ss.SS')); // 2018-09-01 09:09:09.870763
// console.log(ts2str(1535764149.870763, 'yyyy-MM-dd hh:mm:ss.S')); // 2018-09-01 09:09:09.871
// console.log(ts2str(1535764149, 'yyyy-MM-dd hh:mm')); // 2018-09-01 09:09
// console.log(ts2str(1535764149, 'yyyy-M-d h:m:s')); // 2018-9-1 9:9:9
// console.log(ts2str(1535764149, 'yyyy年MM月dd日hh时mm分ss秒')); // 2018年09月01日09时09分09秒
