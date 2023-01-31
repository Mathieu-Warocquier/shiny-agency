import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {
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
      </div>
  )
}

export default Survey
