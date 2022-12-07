const login = document.getElementById("lpage");
const register = document.getElementById("rpage");
const note = document.getElementById("npage")

if(login) login.addEventListener('submit',loginpageFunction)
if(register) register.addEventListener('submit',registerpageFunction)
if(note) note.addEventListener('submit',notepageFunction)

function loginpageFunction(e)
{
    e.preventDefault();
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;


    class User{
        constructor(username,password)
        {
            this.username=username;
            this.password=password;
        }
    
    
    
    getusername(){
        return this.username;
    }
    setusername(newusername){
        this.username = username;
    }
    getpassword(){
        return this.password;
    }
    setpassword(newpassword){
        this.password = password
    }

    }

    const Userl=new User(username,password);
    console.log(Userl);
    login.reset();

}


function registerpageFunction(e)
{
    e.preventDefault()
    let firstname=document.getElementById('firstname').value;
    let lastname=document.getElementById('lastname').value;
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;

    class User{
        constructor(firstname,lastname,username,password)
        {
            this.firstname=firstname;
            this.lastname=lastname;
            this.userName=username;
            this.password=password;
        }
        getusername(){
            return this.username;
        }
        setusername(newusername){
            this.username = newusername;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
        getfirstname(){
            return this.firstname;
        }
        setfirstname(newfirstname){
            this.firstname = newfirstname;
        }
        getlastname(){
            return this.lastname;
        }
        setlastname(newlastname){
            this.lastname=newlastname;
        }
    }

    const user1=new User(firstname,lastname,username,password);
    console.log(user1);
    register.reset();
}


function notepageFunction(e)
{
    e.preventDefault();
    let note=document.getElementById('note').value;

    class User{
        constructor(note)
        {
            this.note=note;
        }
    
    
    getnote(){
        return this.note;
    }
    setnote(note){
        this.note = note;
    }
   

    }

    const Userl=new User(note);
    console.log(Userl);
   

}