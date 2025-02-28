document.getElementById('myform').addEventListener('submit', function (event) {

    event.preventDefault();

    if (this.checkValidity() === false) {

        event.stopPropagation();

    }

    this.classList.add('was-validated');

});

