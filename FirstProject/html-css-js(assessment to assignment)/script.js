const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullname = document.getElementById("fullName").value;
  const dob = document.getElementById("DOB").value;
  // const male=document.getElementById('Male').checked;
  // const female=document.getElementById('Female').checked;
  // const unknown=document.getElementById('Unknown').checked;
  var gender = document.getElementsByName("gen");
  var gender_checked;
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      gender_checked = gender[i].value;
    }
  }
  const generror = document.getElementById("generror");
  const doberror = document.getElementById("doberror");
  const fnerror = document.getElementById("fnerror");
  if (fullname != "") {
    fnerror.innerHTML = "";
  }
  if (dob != "") {
    doberror.innerHTML = "";
  }
  if (gender_checked != undefined) {
    generror.innerHTML = "";
  }

  if (fullname == "") {
    fnerror.innerHTML = "Full Name is manadatory*";
  }
  if (dob == "") {
    doberror.innerHTML = "DOB is manadatory*";
  }
  if (gender_checked == undefined) {
    generror.innerHTML = "Gender is manadatory*";
  }

  if (fullname != "" && dob != "" && gender_checked != undefined) {
    const success_msg = document.getElementById("success");
    success_msg.textContent = `${fullname} thanks for your valuable feedback`;
    // alert(`${fullname} is successfully registered!`)
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;

    const mealpref = document.getElementsByName("Meal");
    var seleceted_meals = [];
    for (var i = 0; i < mealpref.length; i++) {
      if (mealpref[i].checked) {
        seleceted_meals.push(mealpref[i].value);
      }
    }

    const obj = {
      FullName: fullname,
      Email: email,
      DateofBirth: dob,
      Country: country,
      Gender: gender_checked,
      Meal_Preferences: seleceted_meals,
    };

    console.log(JSON.stringify(obj));
    form.reset();
  }
});
