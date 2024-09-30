function signup(){
    localStorage.setItem('name',document.getElementById('username').value)
    localStorage.setItem('hostel',document.getElementById('hostel').value)
    localStorage.setItem('room', document.getElementById('room').value)
    localStorage.setItem('mobile', document.getElementById('phoneno').value)

    location.href = 'first.html'
}