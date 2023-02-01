import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {

  // const [ligues, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://v3.football.api-sports.io/leagues", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "v3.football.api-sports.io",
  //       "x-rapidapi-key": "5b217cb77b612be62f69b774f415a79c"
  //     }
  //   })
  //   .then((response) => response.json())
  //   .then((result) => {setData(result.response)})
  //   .catch((error) => console.log(error))

  //   ;},[]);



  // return (
    // <div>
    //   {/* {ligue[2].league.name} */}


    // <ul>
    //    {ligues.map((ligue, index) => (
    //       <li key={index}>{ligue.league.name}</li>
    // ))}
    // </ul>
    // </div>
  // )


  const { questionNumber } = useParams()
  const questionNumberInteger = parseInt(questionNumber)
  const questionNumberPrecedent = questionNumberInteger === 1 ? 1 : questionNumberInteger - 1
  const questionNumberSuivante = questionNumberInteger + 1

  return (
      <div>
          <h1>Questionnaire 🧮</h1>
          <h2>Question: {questionNumber}</h2>
          <Link to={`/survey/${questionNumberPrecedent}`}>Précédent</Link>
            {questionNumberInteger === 10 ? (
                <Link to="/results">Résultats</Link>
                ) : (
                <Link to={`/survey/${questionNumberSuivante}`}>Suivant</Link>
             )}


          {/* <p>{foot}</p> */}

      </div>
  )
}

export default Survey
