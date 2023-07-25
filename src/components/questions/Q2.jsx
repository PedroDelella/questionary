export default function Q2 ({getVData, getCData, getAData, getDiData}) {
    return (
        <div>
            <p>
                <span>2- </span>
                Durante uma discussão eu sou mais influenciado por:
            </p>
            <div className="options">
                <div>
                    <label htmlFor="op1"></label>
                    <input 
                    name="op1" 
                    type="number" 
                    min="1" max="4" 

                    /><p>O tom de voz da outra pessoa</p>
                </div>
                <div>
                    <label htmlFor="op2"></label>
                    <input 
                    type="number" 
                    name="op2" 
                    min="1" max="4"
                    
                    /><p>Se eu posso ou não ver o argumento da outra pessoa</p>
                </div>
                <div>
                    <label htmlFor="op3"></label>
                    <input type="number" name="op3" /><p>A logica do argumento da outra pessoa</p>
                </div>
                <div>
                    <label htmlFor="op4"></label>
                    <input 
                    type="number" 
                    name="op4" 
                    min="1" max="4"
                    /><p>Se eu entro em contato ou não com os sentimentos reais do outro</p>
                </div>
            </div>
        </div>
    )
}