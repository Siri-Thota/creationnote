const entertext= document.getElementById("mcd");
document.getElementById("notebts").addEventListener('click', getNotes);

function getNotes()
{
    fetch("http://localhost:3000/notes")
    .then((res)=>res.json())
    .then((data) => {
        
        data.forEach((note) => {
            let section = `
            <div class="detailnotes">
                <p>${note.text}</p>
                
                
            </div>
            `
            entertext.innerHTML+=section;
        })
    })
    .catch((err)=>console.log(`Error! ${err}`));
}