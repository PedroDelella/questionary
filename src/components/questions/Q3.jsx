export default function Q3 (getVData, getCData, getAData, getDiData) {
    return (
        <div>
            <p>
                <span>3- </span>
                Eu comunico mais facilmente o que se passa comigo:
            </p>
            <div className="options">
                <div>
                    <label htmlFor="op1"></label>
                    <input 
                    name="op1" 
                    type="number" 
                    min="1" max="4" 

                    /><p>Do modo como me visto e aparento</p>
                </div>
                <div>
                    <label htmlFor="op2"></label>
                    <input 
                    type="number" 
                    name="op2" 
                    min="1" max="4"
                    
                    /><p>Pelos sentimentos que compartilho</p>
                </div>
                <div>
                    <label htmlFor="op3"></label>
                    <input 
                    type="number" 
                    name="op3" 
                    min="1" max="4"
                    
                    /><p>Pelas palavras que escolho</p>
                </div>
                <div>
                    <label htmlFor="op4"></label>
                    <input 
                    type="number" 
                    name="op4" 
                    min="1" max="4"
                    /><p>Pelo tom da minha voz</p>
                </div>
            </div>
        </div>
    )
}