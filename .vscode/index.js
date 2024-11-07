document.getElementById('timetableForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page from refreshing
    
    const branch = document.getElementById('branch').value;
    const section = document.getElementById('section').value;

    // Redirect to the timetable page, passing the values as query parameters
    window.location.href = `timetable.html?branch=${branch}&section=${section}`;
});