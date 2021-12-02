document.querySelector('#headingcontact').addEventListener('click', () => {
    window.location.href = '../index.html';
});

function validation() {
    var name = document.getElementById("name").value;
    if (name == "")
    {
        document.getElementById('user_error').innerHTML = "Please enter name"
    }
}
validation();