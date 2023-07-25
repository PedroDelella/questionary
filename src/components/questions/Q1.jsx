export default function Q1({ data, updateFieldHandler}) {
    return (
        <div>
                <p>
                    <span>1- </span>
                    Eu tomo decisões importantes baseados em:
                </p>
                <div className="options">
                    <div>
                        <input
                            name="op1"
                            type="number"
                            min="1" max="4"
                            value={data.Q1.c || ''}
                            onChange={(e) => updateFieldHandler('Q1', 'c', e.target.value)}
                            />
                        <p>Intuição</p>
                    </div>
                    <div>
                        <label htmlFor="op2"></label>
                        <input
                            type="number"
                            name="op2"
                            min="1" max="4"
                            value={data.Q1.a || ''}
                            onChange={(e) => updateFieldHandler('Q1', 'a', e.target.value)}
                        /><p>O que me soa melhor</p>
                    </div>
                    <div>
                        <label htmlFor="op3"></label>
                        <input
                            type="number"
                            name="op3"
                            min="1" max="4"
                            value={data.Q1.v || ''}
                            onChange={(e) => updateFieldHandler('Q1', 'v', e.target.value)}
                        /><p>O que parece melhor</p>
                    </div>
                    <div>
                        <label htmlFor="op4"></label>
                        <input
                            type="number"
                            name="op4"
                            min="1" max="4"
                            value={data.Q1.d || ''}
                            onChange={(e) => updateFieldHandler('Q1', 'd', e.target.value)}
                        /><p>Um estudo preciso e minucioso do assunto</p>
                    </div>
                </div>
        </div>
    )
}