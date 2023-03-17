/**
 * 数组去重
 * @param arr
 * @return {any[]}
 */
const uniqueArr = (arr) => [...new Set(arr)];

console.log(uniqueArr(["前端","js","html","js","css","html"]));
// ['前端', 'js', 'html', 'css']

/**
 * url获取参数对象，也可以使用qs库
 * @param URL
 * @return {any}
 */
const getParameters = URL => JSON.parse(
  `{"${decodeURI(URL.split("?")[1]).replace(/"/g, '\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`
)

let params = getParameters("https://www.google.com.hk/search?q=js+md&newwindow=1")
console.log(params)

/**
 * 检查对象是否为空
 * @param obj
 * @return {boolean}
 */
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
isEmpty({}) // true
isEmpty({a:"not empty"}) //false


/**
 * 反转字符串
 * @param str
 * @return {string}
 */
const reverse = str => str.split('').reverse().join('')
console.log(reverse('this is reverse'))
// esrever si siht


/**
 * 生成随机十六进制
 * @return {`#${string}`}
 */
const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
console.log(randomHexColor());
// #a2ce5b
// 限制条件：无法获得#ffffff [0, 1)

/**
 * 检查当前选项卡是否在前台
 * @return {boolean}
 */
const isTabActive = () => !window.hidden

// console.log(isTabActive())
// true|false


/**
 * 检查元素是否处于焦点
 * @param el
 * @return {boolean}
 */
const elementIsInFocus = (el) => (el === document.activeElement);

// elementIsInFocus(anyElement)
// 元素处于焦点返回true，反之返回false


/**
 * 检查设备类型
 * @return {string}
 */
const judgeDeviceType =
  () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'PC'

// judgeDeviceType()  // PC | Mobile


/**
 * 文字复制到剪贴板
 * @param text
 * @return {Promise<void>}
 */
const copyText = async (text) => await navigator.clipboard.writeText(text)
// copyText('单行代码 前端世界')


/**
 * 获取选定的文本
 * @return {string}
 */
const getSelectedText = () => window.getSelection().toString()

// getSelectedText()


/**
 * 查询某天是否为工作日
 * @param date
 * @return {boolean}
 */
const isWeekday = (date) => date.getDay() % 6 !== 0

console.log(isWeekday(new Date(2022, 3, 11)))
// true

/**
 * 华氏转摄氏
 * @param fahrenheit
 * @return {number}
 */
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9

console.log(fahrenheitToCelsius(50))


/**
 * 摄氏转华氏
 * @param celsius
 * @return {number}
 */
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;

console.log(celsiusToFahrenheit(100))


/**
 * 日期间隔天数
 * @param date1
 * @param date2
 * @return {number}
 */
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

dayDiff(new Date("2021-10-21"), new Date("2022-02-12"))
// Result: 114

/**
 * rgb转十六进制
 * @param r
 * @param g
 * @param b
 * @return {string}
 */
const rgbToHex = (r, g, b) =>   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

console.log(rgbToHex(255, 255, 254))
//  #fffffe
console.log((255 << 16).toString(16))
console.log((255 << 8).toString(16))
console.log((254).toString(16))
// 保证最小结构 000000
console.log((1 << 24).toString(16).slice(1))

/**
 * 取数组平均值
 * @param arr
 * @return {number}
 */
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;
// console.log(average([1,9,18,36])) //16
