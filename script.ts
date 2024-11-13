// Liting Element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();
    

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    
    //Type Assertation
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    
    
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
    
    
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;


     //picture elements
     const profilePictureFile = profilePictureInput.files?.[0]
     const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
     
    
    
    //Create Resume Output
    const resumeOutput = `
    <h2>Resume</h2>
     ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone:</strong> ${phone} </p>
    
    <h4>Education</h4>
    <p>${education}</p>
    
    <h4>Education</h4>
    <p>${experience}</p>
    
    <h4>Education</h4>
    <p>${skills}</p>
    `;
    
    
    
    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else{
        console.error("The Resume Output Elements Are Missing")
    }
    
    }else{
        console.error("One More Output Element Are Missing")
    }
    })