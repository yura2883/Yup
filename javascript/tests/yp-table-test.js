import {ypTable} from '../yp-table.js'

// названия поле f,d,m должны передаваться в кавычках, иначе минифицируется и сломается код
// var d={"f":['id','fio'], "d":[
// 	[1,'Иванов'],
// 	[2,'Петров'],
// 	[3,'Сидоров'],
// 	[4,'Ежидзе']
// ], "m":null}

// var D=new ypTable(d)
// console.log(`${D.count()} rows loaded:`)
// var rows=[]; D.each(r=>rows.push(r))
// console.log(rows)

// глобальная точка экспорта (создаем свой namespace)
var exp = window['ypLib'] = {}

// экспорт класса
exp['table'] = ypTable

// экспорт методов
var p = ypTable.prototype
p['count'] = p.count
p['each'] = p.each
p['getRow'] = p.getRow
p['transpose'] = p.transpose



