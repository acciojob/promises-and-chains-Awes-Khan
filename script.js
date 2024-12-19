document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    let ageVerificationPromise = new Promise((resolved, rejected)=>{
      if(data.age>18){
        resolved(data.name);
      } else {
        rejected(data.name);
      }
    })
    
    ageVerificationPromise.then((name)=>{
      alert("Welcome, "+name+". You can vote.");
    }).catch((name)=>{
      alert("Oh sorry "+name+". You aren't old enough.");
    })
  });
