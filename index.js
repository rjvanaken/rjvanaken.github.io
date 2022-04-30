var frmvalidator = new Validator("emailForm");
frmvalidator.addValidation("nameInput","req","Please enter your Name");
frmvalidator.addValidation("nameInput","maxlen=40",
       "Max length for nameInput is 40");

frmvalidator.addValidation("emailInput","maxlen=50");
frmvalidator.addValidation("emailInput","req","Please enter your email address");
frmvalidator.addValidation("emailInput","email");


frmvalidator.addValidation("messageInput","req","You must enter a message");
frmvalidator.addValidation("messageInput","maxlen=500");