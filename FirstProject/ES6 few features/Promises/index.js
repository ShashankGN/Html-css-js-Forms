let promise = new Promise(function (resolve, reject) {
    const x = "milk";
    const y = "shake"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('You got the milkshake!');
    }).
    catch(function () {
        console.log('You did\'nt get the milkshake!');
    }); 
