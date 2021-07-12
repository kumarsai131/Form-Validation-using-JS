function validate(){
    var x = document.myform
    if(document.myform.Name.value==""){
        alert("Please Enter Your Name");
        document.myform.name.focus();
        return false;
        }
        console.log(document.myform.name.value)

    if(x.Email.value==""){
        alert("Enter email id")
        x.email.focus()
        return false;
    }
    if(x.pwd.value.length<8 || x.pwd.value=="")
    {
        alert("Enter password")
        x.password.focus()
        return false;
    }
    
}