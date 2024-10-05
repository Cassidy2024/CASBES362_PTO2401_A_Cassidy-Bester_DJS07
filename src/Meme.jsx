export default function Meme(){
    return(
        <main>
        <form className="form">
        <input type = "text" className="form-input" placeholder="Top text"/>
        <input type = "text" className="form-input" placeholder="Bottom text"/>
        <button className="generate-button">Generate new meme image </button>
        
        </form>
        
    </main>
    )
}