import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '5b217cb77b612be62f69b774f415a79c',
//     'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//   }
// };

//   fetch('https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2020', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


const API_URL = `https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2020`;
const API_KEY = `5b217cb77b612be62f69b774f415a79c`;

// const fetchData = () => {
//   fetch(API_URL, {
//     headers: {
//       "X-RapidAPI-Key": API_KEY
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Manipuler les données pour les afficher dans votre application
//       console.log(data)
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };


const fetchData = () => {
  fetch("https://v3.football.api-sports.io/countries", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "5b217cb77b612be62f69b774f415a79c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

}




function Survey() {
  useEffect(() => {
    fetchData();
  }, []);


// const [foot, setFoot] = useState({})

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


          {/* <p>{foot[parameters][league]}</p> */}

      </div>
  )
}

export default Survey
