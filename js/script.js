var value = {
    name: '',
    password: '',
    emailId: '',
    agree: false,
};

this.handleInputChange = this.handleInputChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

function handleInputChange(event) {
    const target = event.target;
    const value = value.target.type === 'checkbox' ? target.checked : target.value;
    let name = target.value
}

function handleSubmit(event) {
    console.log('Current State is: ' + JSON.stringify(value));
    alert('Current State is: ' + JSON.stringify(value));
    event.preventDefault();
}