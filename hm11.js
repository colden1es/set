var userData = prompt('Введите свою дату рождения, формат: 01.декабрь.1999')
list = userData.split('.')
var birth = new Date(userData) == "Invalid Date" ? new Date() : new Date(userData)
console.log(birth)
var month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
var dateNow = new Date()