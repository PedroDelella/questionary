import './App.css';

// Hooks
import { useState } from 'react';
import { useQuestion } from './hook/useQuestion';

// Components
import Noq from './components/questions/Noq';
import Q1 from './components/questions/Q1'
import Q2 from './components/questions/Q2'
import Q3 from './components/questions/Q3'
import Q4 from './components/questions/Q4'
import Q5 from './components/questions/Q5'



function App() {
  const formTemplate = {
    Q1: {
      c: "",
      a: "",
      v: "",
      d: ""
    },
    Q2: {
      a: "",
      v: "",
      d: "",
      c: ""
    },
    Q3: {
      v: "",
      c: "",
      d: "",
      a: ""
    },
    Q4: {
      a: "",
      d: "",
      c: "",
      v: ""
    },
    Q5: {
      a: "",
      d: "",
      c: "",
      v: ""
    }
  }

  const [data, setData] = useState(formTemplate)
  const updateFieldHandler = (parentKey, key, value) => {
    setData((prev) => {
      return {
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [key]: value,
        },
      };
    });
  };

  const questionsComponents = [<Noq />,
  <Q1 data={data} updateFieldHandler={updateFieldHandler} />,
  <Q2 data={data} updateFieldHandler={updateFieldHandler} />,
  <Q3 data={data} updateFieldHandler={updateFieldHandler} />,
  <Q4 data={data} updateFieldHandler={updateFieldHandler} />,
  <Q5 data={data} updateFieldHandler={updateFieldHandler} />
  ]

  const { currentStep, currentComponent, nextQuestion, isFirstStep } = useQuestion(questionsComponents)

  return (
    <div>
      <header>
        <nav>
          <a href="#introduction">Indrodução</a>
          <a href="#questionnaire">Questionário</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>
      <body>
        <main className="container">
          <div id="introduction">
            <h1><p>Este é um estudo desenvolvido por</p> <span>The Society of Neuro-Linguist Programing</span></h1>

            <p className="instruction">
              Com o intuito de detectar qual o seu sistema representacional mais aguçado e entender como funciona cada um destes sistemas. Além disto você também irá compreender
              como lidar com indivíduos que possuem sistemas diferentes do seu.
            </p>
            <p className="quote"><i>“Dominar o outro é força; dominar-se é o verdadeiro poder.” - Lao Tsé </i></p>

            <p className="explanation">Para cada uma das afirmativas abaixo, numere de <b>1</b> a <b>4</b>, tendo em vista que 4 é a afirmativa que <span className='plus'>mais descreve</span> você e 1 a que <span className='less'>menos descreve</span> </p>
          </div>
          <div id="questionnaire">
            <form onSubmit={(e) => nextQuestion(currentStep + 1, e)}>
              {currentComponent}
              {isFirstStep ? <button className="qButton" onClick={() => nextQuestion(currentStep)}>IR AO QUESTIONÁRIO </button> :
                <button className="nButton" onClick={() => nextQuestion(currentStep)}>PRÓXIMO</button>}
            </form>
          </div>
          <div id="result">
            <div>
              <p>v: {data.Q1.v}</p>
              <p>c: {data.Q1.c}</p>
              <p>a: {data.Q1.a}</p>
              <p>di: {data.Q1.d}</p>
            </div>

            <div>
              <p>v: {data.Q2.v}</p>
              <p>c: {data.Q2.c}</p>
              <p>a: {data.Q2.a}</p>
              <p>di: {data.Q2.d}</p>
            </div>
            <div>
              <p>v: {data.Q3.v}</p>
              <p>c: {data.Q3.c}</p>
              <p>a: {data.Q3.a}</p>
              <p>di: {data.Q3.d}</p>
            </div>
            <div>
              <p>v: {data.Q4.v}</p>
              <p>c: {data.Q4.c}</p>
              <p>a: {data.Q4.a}</p>
              <p>di: {data.Q4.d}</p>
            </div>
            <div>

              <div>
                <p>v: {data.Q5.v}</p>
                <p>c: {data.Q5.c}</p>
                <p>a: {data.Q5.a}</p>
                <p>di: {data.Q5.d}</p>
              </div>
            </div>
            </div>
        </main>
        <footer id="contact">
          <nav>
            <a><p>Coded by: Pedro Delella Skoberg</p></a>
            <a> SVG GitHub</a>
            <a> SVG Linkedin</a>
          </nav>
        </footer>
      </body>
    </div>
  );
}

export default App;