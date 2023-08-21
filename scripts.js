const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log((holidays && 9 && name) || `ID ${futureId} not created yet`)

let copied = JSON.parse(JSON.stringify(holidays[6]) )
copied.name = 'X-mas Day'

const  correctDate = new Date(copied.date);
correctDate.setHours(0);
correctDate.setMinutes(0);

isEarlier = correctDate.getTime() < holidays[6].date.getTime()
console.log('New date is earlier:', isEarlier)
console.log(correctDate)
console.log(holidays[6].date)

if (isEarlier) copied.date = correctDate

console.log(holidays[6])
console.log(copied)

if (holidays[6].id == copied.id) {
    console.log('ID change:', Boolean(0))
    }
    else {
        console.log('ID change:', copied.id)
    }
    
if (holidays[6].name == copied.name) {
    console.log('Name change:', Boolean(0))
    }
    else {
        console.log('Name change:', copied.name)
    }

if (holidays[6].date == copied.date) {
    console.log('ID change:', Boolean(0))
    }
    else {
        console.log('Date change:', copied.date)
    }

holidays[0].date = new Date(`16 December ${currentYear}`)
console.log(holidays[0])

let holidayTimestamps = [
holidays[0].date.getTime(),
holidays[1].date.getTime(),
holidays[2].date.getTime(),
holidays[3].date.getTime(),
holidays[4].date.getTime(),
holidays[5].date.getTime(),
holidays[6].date.getTime(),
holidays[7].date.getTime(),
holidays[8].date.getTime()
]

let firstHolidayTimestampIndex = holidayTimestamps.indexOf(Math.min(...holidayTimestamps));

let lastHolidayTimestampIndex = holidayTimestamps.indexOf(Math.max(...holidayTimestamps));

console.log(holidays[6].date)
console.log(holidays[firstHolidayTimestampIndex])

const firstDay = holidays[firstHolidayTimestampIndex].date.getDate();
const firstMonth = holidays[firstHolidayTimestampIndex].date.getMonth()+1;
const lastDay = holidays[lastHolidayTimestampIndex].date.getDate();
const lastMonth = holidays[lastHolidayTimestampIndex].date.getMonth()+1;
const firstDayText = firstDay.toString();
const firstMonthText = firstMonth.toString();

console.log(`${firstDayText.padStart(2,'0')}/${firstMonthText.padStart(2,'0')}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)
let randomHolidayid = Math.floor(Math.random()*9);

const randomHolDay = holidays[randomHolidayid].date.getDate();
const randomHolMonth = holidays[randomHolidayid].date.getMonth()+1;
const randomHolDayText = randomHolDay.toString();
const randomHolMonthText = randomHolMonth.toString();
console.log(`${randomHolDayText.padStart(2,'0')}/${randomHolMonthText.padStart(2,'0')}/${currentYear}`)
