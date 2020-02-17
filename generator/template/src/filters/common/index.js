import Vue from 'vue'

import { parseTime, formatTime } from '@/lib/tools'

/** 计算传入的时间距离现在的时间多久
 * @param {number} time 毫秒数 || 秒数
 */
function timeAgo(time) {
  if((''+time).length === 13) {
    time = (time / 1000) | 0
  }
  function pluralize(time, label) {
    if (time === 1) {
      return time + label
    }
    return time + label + 's'
  }

  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/**
 * 将数值转化成文件大小
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
function numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

/** 将数值转换成每三位用逗号分割的形式
 * 10000 => "10,000"
 * @param {number} num
 */
function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * 将第一个字符转换大写
 * @param {String} string
 */
function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

Vue.filter('parseTime',parseTime)
Vue.filter('formatTime',formatTime)
Vue.filter('uppercaseFirst',uppercaseFirst)
Vue.filter('toThousandFilter',toThousandFilter)
Vue.filter('numberFormatter',numberFormatter)
Vue.filter('timeAgo',timeAgo)
