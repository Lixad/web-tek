let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const subject = document.getElementById('subject');


    // This variable stores all the data. (just for testing purposes)
    let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        'Email: ' + email.value + ' \r\n ' + 
        'Number: ' + number.value + ' \r\n ' + 
        'Subject: ' + subject.value;

    
    // Convert the text to BLOB. (just for testing purposes)
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.


   

    let newLink = document.createElement("a");
    newLink.open = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

window.open(newLink);
document.getElementById('contactForm').reset();

}

