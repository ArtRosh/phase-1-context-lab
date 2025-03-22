/* Your Code Here */


function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}


function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord)
}


function createTimeInEvent(employee,) {
    const [date, hour] = employee.split(' ');

    const someData = {
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    }

    this.timeInEvents.push(someData);
    return this;
}


function createTimeOutEvent(arr) {
    const [date, hour] = arr.split(' ');

    const someData = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    }

    this.timeOutEvents.push(someData);
    return this;
}


function hoursWorkedOnDate(arr) {
    const timeIn = this.timeInEvents.find(e => e.date === arr);
    const timeOut = this.timeOutEvents.find(e => e.date === arr);
    return (timeOut.hour - timeIn.hour) / 100; 
}


function wagesEarnedOnDate (arr) {
    const hours = hoursWorkedOnDate.call(this, arr);
    return hours * this.payPerHour;
}


function findEmployeeByFirstName (emp, firstName) {
    return emp.find(e => e.firstName === firstName)
}


function calculatePayroll (arr) {
    return arr.reduce((total, employee) => {
        return total + allWagesFor.call(employee);
    }, 0);
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

