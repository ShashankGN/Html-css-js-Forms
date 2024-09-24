const form=document.getElementById('registerform');
form.addEventListener('submit',function(event){
       event.preventDefault();

       


       const firstname=document.getElementById('firstnametext').value;
       const lastname=document.getElementById('lastnametext').value;
       const email=document.getElementById('email').value;
       const company=document.getElementById('company').value;



    //    if(firstname==""&&lastname==""&&email==""){

    //    }
       const warningf = document.getElementById('warningf');
       if(firstname==""){
            warningf.classList.remove('hidden');
        } else {
            warningf.classList.add('hidden');
        }

        const warningl = document.getElementById('warningl');
       if(lastname==""){
            warningl.classList.remove('hidden');
        } else {
            warningl.classList.add('hidden');
        }
        const warninge = document.getElementById('warninge');
       if(email==""){
            warninge.classList.remove('hidden');
        } else {
            warninge.classList.add('hidden');
        }

        if(firstname!=""&&lastname!=""&&email!=""){
            // warningf.classList.add('hidden');
            // warningl.classList.add('hidden');
            // warninge.classList.add('hidden');

            setTimeout(() => {
                alert(`${firstname} ${lastname} is successfully registered`)
            }, 100);

            form.reset();


            
        }
        
       

    //    console.log(firstname);
    //    console.log(lastname);
    //    console.log(email);
    //    if(firstname==""||lastname==""||email==""){
    //        alert(`FirstName/LastName/Email is mandatory`);
    //    }
    //    else{
    //     alert(`${firstname} ${lastname} is successfully registered`)
    //    }








    //    var warnmsg4;
    //    var warnmsg5;
    //    var warnmsg6;
       
    //    if(firstname==""){
    //        warnmsg4=document.getElementById('firstnamewarn'); 
    //        var newElement=document.createElement('p');
    //        newElement.textContent="Firstname is manadatory";
    //        warnmsg4.appendChild(newElement);
    //    }
    //    if(lastname==""){
    //     warnmsg5=document.getElementById('lastnamewarn'); 
    //     var newElement=document.createElement('p');
    //     newElement.textContent="lastname is manadatory";
    //     warnmsg5.appendChild(newElement);
    // }
    // if(email==""){
    //     warnmsg6=document.getElementById('emailwarn'); 
    //     var newElement=document.createElement('p');
    //     newElement.textContent="Email is manadatory";
    //     warnmsg6.appendChild(newElement);
    // }
    // else{
    //     alert(`${firstname} ${lastname} is successfully registered`)
    // }


})



