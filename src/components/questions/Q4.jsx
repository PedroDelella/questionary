export default function Q4 (getVData, getCData, getAData, getDiData) {
    return (
        <div>
            <p>
                <span>4- </span>
                Me é muito fácil
            </p>
            <div className="options">
                <div>
                    <label htmlFor="op1"></label>
                    <input 
                    name="op1" 
                    type="number" 
                    min="1" max="4" 
                    /><p>Achar o volume e a sintonia ideais de um sistema de som</p>
                </div>
                <div>
                    <label htmlFor="op2"></label>
                    <input 
                    type="number" 
                    name="op2" 
                    min="1" max="4"
                    /><p>Selecionar o ponto mais relevante relativo a um assunto interessante</p>
                </div>
                <div>
                    <label htmlFor="op3"></label>
                    <input 
                    type="number" 
                    name="op3" 
                    min="1" max="4"
                    
                    /><p>Escolher os móveis mais confortáveis</p>
                </div>
                <div>
                    <label htmlFor="op4"></label>
                    <input 
                    type="number" 
                    name="op4" 
                    min="1" max="4"
                    
                    /><p>Escolher as combinações de cores mais ricas e atraentes</p>
                </div>
            </div>
        </div>
    )
}