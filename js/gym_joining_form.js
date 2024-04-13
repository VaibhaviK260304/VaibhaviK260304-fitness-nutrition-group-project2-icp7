function confirmation(message) {
    message.preventDefault();
    const form = document.getElementById("registrationForm");
    const fullname = form.elements["fullname"].value;
    const email = form.elements["email"].value;
    const gender = form.querySelector('input[name="gender"]:checked');
    const dob = form.elements["dob"].value;
    const healthInsurance = form.querySelector('input[name="healthInsurance"]:checked');
    const medicalCondition = form.querySelector('input[name="medical-condition"]:checked');
    const address = form.elements["address"].value;
    const city = form.elements["city"].value;
    const state = form.elements["state"].value;

    if (!fullname || !email || !gender || !dob || !healthInsurance || !medicalCondition || !address || !city || !state) {
        alert("Please fill in all required fields.");
        return false;
    }

    console.log("Full Name: " + fullname);
    console.log("Email: " + email);
    console.log("Gender: " + gender.value);
    console.log("Date of Birth: " + dob);
    console.log("Health Insurance: " + healthInsurance.value);
    console.log("Medical Condition: " + medicalCondition.value);
    console.log("Address: " + address);
    console.log("City: " + city);
    console.log("State: " + state);
    alert(`Welcome ${fullname}, Thanks for Joining Us`);
    return true;
}
