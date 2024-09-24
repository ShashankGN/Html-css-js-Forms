const form = document.getElementById('registerform');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lasttname').value;
        const gender = document.getElementById('Gender').value
        const dob = document.getElementById('DOB').value;
        const fileInput = document.getElementById('formFile');
        const file = fileInput.files[0];
        const email = document.getElementById('exampleFormControlInput1').value;
        const password = document.getElementById('inputPassword').value;
        const confirmPassword = document.getElementById('confPassword').value;
        const rememberMe = document.getElementById('flexCheckChecked').checked;

        // console.log('First Name:', firstName);
        // console.log('Last Name:', lastName);
        //console.log('File Name:', file.name);
        // console.log('Gender:',gen);
        // console.log('DOB:', dob);
        // console.log('Email:', email);
        // console.log('Password:', password);
        // console.log('Confirm Password:', confirmPassword);
        // console.log('Remember Me:', rememberMe);


        let userData = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            dob: dob,
            email: email,
            file_name:file.name,
            password: password,
            confirmPassword: confirmPassword,
            rememberMe: rememberMe
        };
        let jsonString = JSON.stringify(userData); 


        console.log(jsonString);


        
        alert(`Form submitted successfully!`);
});
