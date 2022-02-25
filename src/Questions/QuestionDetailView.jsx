import { useState, useEffect } from "react";
import { Link,  useParams } from "react-router-dom";
import ForumService from "../Service/ForumService";
import "./Home.css"
const QuestionDetailView = () => {

    const[ questions, setQuestions] = useState([]);

    const[ answers, setAnswers] = useState([]);

    const { questionid } = useParams();

    const {views} = useParams();
    const [like, setLike] = useState(false)
    const[likes, setLikes] = useState(0)
    const ses = sessionStorage.getItem("acco")
    console.log(ses);
  
    const saveViews = {views}
    
    const init = () => {

        if(sessionStorage.getItem('islogin') == null)
        {
            window.location ="/login"
        }
        else{
            
        }

        
        ForumService.increaseView(questionid,  saveViews)
        .then((res)=>{
            console.log(res.data);
        })

        ForumService.getQuestionById(questionid)
        .then(res => {
           
            setQuestions(res.data)
            
        })
        .catch(error => {
            console.log('Something went wrong', error);
          })


        ForumService.getAnAnswerByQuestionId(questionid)
        .then(res => {
            
            
            setAnswers(res.data)
        })
        .catch(error => {
            console.log('Something went wrong', error);
          })

        
        
          
          
    }
    const changeColor = likes >= 1 ? "red" : "grey"
    const disable = likes >= 1 ? "disabled" : ""
    useEffect(() => {
        init();
      }, []);


    return (
       
        <div>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <button className="likebtn" onClick={() => setLikes( likes+1 )}>
                  
                            <i className="fa fa-heart fa-lg" style={{ color:changeColor }} disabled =    {disable}></i>  {questions.likes + likes}
                          </button>
            <h2>{questions.question}</h2>
            <h3>Answers</h3>
            <div class = "row">
            
         <table className='table table-striped table-boardered'>
         <thead>
             
             <tr>
             <th>Answer</th>
             <th>Action</th>
             </tr>
         </thead>
         <tbody>
         {
                        answers.map( question => 

                            <tr key = {question.questionId}>
                                <td>{question.answer}</td>
                                <td><button>reply</button></td>
                                </tr>
                            )
                        }

             </tbody>
             </table>
             </div>
        </div>
         
    )


}

export default QuestionDetailView;


