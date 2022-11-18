const details= document.getElementById("bts");
document.getElementById("usersbts").addEventListener('click', getUsers);

function getUsers()
{
    fetch("http://localhost:3000/users")
    .then((res)=>res.json())
    .then((data) => {
        
        data.forEach((user) => {
            let section = `
            <div class="userdetails">
                
                <h2>${user.username}</h2>
                <h2>${user.password}</h2>
                

                <br>
            </div>
            `
            details.innerHTML+=section;
        })
    })
    .catch((err)=>console.log(`Error! ${err}`));
}




