export default function Q5 (getVData, getCData, getAData, getDiData) {
    return (
        <div>
            <p>
                <span>5- </span>
                Me percebo assim:
            </p>
            <div className="options">
                <div>
                    <label htmlFor="op1"></label>
                    <input 
                    name="op1" 
                    type="number" 
                    min="1" max="4" 
                    /><p>Eu estou muito em sintonia com os sons do ambiente</p>
                </div>
                <div>
                    <label htmlFor="op2"></label>
                    <input 
                    type="number" 
                    name="op2" 
                    min="1" max="4"

                    /><p>Eu sou muito capaz de raciocinar com fatos e dados novos</p>
                </div>
                <div>
                    <label htmlFor="op3"></label>
                    <input 
                    type="number" 
                    name="op3" 
                    min="1" max="4"

                    /><p>Eu sou muito sensível a maneira como a roupa veste o meu corpo</p>
                </div>
                <div>
                    <label htmlFor="op4"></label>
                    <input 
                    type="number" 
                    name="op4" 
                    min="1" max="4"
                    
                    /><p>Eu respondo fortemente as cores e a aparência de uma sala</p>
                </div>
            </div>
        </div>
    )
}