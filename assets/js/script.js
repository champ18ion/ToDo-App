
// handling the tasks which have no deadlines
var date_values = document.querySelectorAll("#task-date-value");
for (let i = 0; i < date_values.length; i++) {
    if (date_values[i].innerText == '') {
        date_values[i].innerText = ' No Deadline';
    }
}

