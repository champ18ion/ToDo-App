

// handling the tasks which have no deadlines
var date_values = document.querySelectorAll("#task-date-value");
for (let i = 0; i < date_values.length; i++) {
    if (date_values[i].innerText == '') {
        date_values[i].innerText = ' No Deadline';
    }
}

// handling the tasks with category 'other'
for (i = 0; i < category_boxes.length; i++) {
    if (category_boxes[i].innerText == 'Other') {
        category_boxes[i].style.display = 'none';
    }
}

//handling hover on title
var title_box = document.getElementById('title-box');
var title_text1 = document.getElementById('title-text1');
var title_text2 = document.getElementById('title-text2');

title_box.addEventListener('mouseover', function() {
    title_text1.style.color = 'yellow';
    title_text2.style.color = 'yellow';
    title_box.style.boxShadow = '0px 0px 3px 3px #6a2c70'
});
title_box.addEventListener('mouseout', function() {
    title_text1.style.color = '#3f3f44';
    title_text2.style.color = '#3f3f44';
    title_box.style.boxShadow = 'none'
});

