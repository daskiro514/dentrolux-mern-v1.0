export const formatDate = (date) => {
  var days = ['Sunday,', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,']
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  var d = new Date(date)
  var month = months[d.getMonth()]
  var date_ = '' + d.getDate()
  var year = d.getFullYear()
  var day = days[d.getDay()]

  if (month.length < 2) month = '0' + month

  return [day, month, date_, year].join(' ')
}

export const formatDateTime = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    hour = String(d.getHours()),
    minute = String(d.getMinutes())

  if (month.length < 2)
    month = '0' + month
  if (day.length < 2)
    day = '0' + day
  if (hour.length < 2)
    hour = '0' + hour
  if (minute.length < 2)
    minute = '0' + minute

  return `${year}/${month}/${day} ${hour}:${minute}`
}

export const _formatDate = date => {
  var d = new Date(date)
  var year = d.getFullYear()
  var month = '' + (d.getMonth() + 1)
  var _date = '' + d.getDate()

  if (month.length < 2) month = '0' + month
  if (_date.length < 2) _date = '0' + _date

  return [year, month, _date].join('-')
}