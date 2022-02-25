import axios from "axios";

const FORUM_BASE_URL = "http://localhost:8484"

class ForumService {
    

    // Start of answer service
    getAnswers() {  
        return axios.get(`${FORUM_BASE_URL}/answer/all`);
    }


    getAnswerByUserId(userId) {
        return axios.get(`${FORUM_BASE_URL}/answer/user/${userId}`)
    }

    getAnswersCount(questionid) {
        return axios.get(`${FORUM_BASE_URL}/answer/count/${questionid}`);
    }

    postAnAnswer( answer) {
        return axios.post(`${FORUM_BASE_URL}/answer/answer`, answer)
    }

    getAnAnswerByQuestionId(questionId) {
        return axios.get(`${FORUM_BASE_URL}/answer/all/${questionId}`)
    }

    modifyAnAnswer(answerId, answer) {
        return axios.put(`${FORUM_BASE_URL}/answer/update/${answerId}`, answer)
    }

    deleteMyAnswer(answerId) {
        return axios.delete(`${FORUM_BASE_URL}/answer/delete/${answerId}`)
    }

    bestAnswer(answerId, bestAnswer) {
        return axios.put(`${FORUM_BASE_URL}/answer/best/${answerId}`, bestAnswer)
    }
    sortByRecent(questionId) {
        return axios.get(`${FORUM_BASE_URL}/answer/recent/${questionId}`)
    }

    deleteAllAnswers() {
        return axios.delete(`${FORUM_BASE_URL}/answer/delete/all`)
    }

    countTotalAnswers() {
        return axios.get(`${FORUM_BASE_URL}/answer/count`)
    }

    trendingQuestions() {
        return axios.get(`${FORUM_BASE_URL}/question/trend`)
    }

    // end of answer service

    //Start of question service

    increaseLikes(questionId, question) {
        return axios.put(`${FORUM_BASE_URL}/question/likes/${questionId}`, question)
    }

    increaseView(questionId, question) {
        return axios.put(`${FORUM_BASE_URL}/question/views/${questionId}`, question)
    }

    getQuestionByCategory(categoryId) {
        return axios.get(`${FORUM_BASE_URL}/question/cat/${categoryId}`)
    }
    

    getQuestionByUserId(userid) {
        return axios.get(`${FORUM_BASE_URL}/question/all/${userid}`)
    }

    getAllCategories() {
        return axios.get(`${FORUM_BASE_URL}/question/cats`)
    }

    getQuestionById(questionId) {
        return axios.get(`${FORUM_BASE_URL}/question/${questionId}`)
    }

    diplayAllQuestions() {
        return axios.get(`${FORUM_BASE_URL}/question/all`)
    }

    displayQuestionsOnUserId(userId) {
        return axios.get(`${FORUM_BASE_URL}/question/all/${userId}`)
    }

    modifyQuestionOnQuestionId(questionId, question) {
        return axios.put(`${FORUM_BASE_URL}/question/update/${questionId}`, question)
    }

    createAQuestion(question) {
        return axios.post(`${FORUM_BASE_URL}/question/create`, question)
    }
    
    deleteQuestionOnQuestionId(questionId) {
        return axios.delete(`${FORUM_BASE_URL}/question/delete/${questionId}`)
    }

    deleteAllQuestions() {
        return axios.delete(`${FORUM_BASE_URL}/question/deleteall`)
    }

    getQuestionCount() {
        return axios.get(`${FORUM_BASE_URL}/question/count`)
    }

    // end of question service

    // Start of user validation
     
    registerAUser(user) {
        return axios.post( `${FORUM_BASE_URL}/auth/user`, user)
    }

    getEmpId(user) {
        return axios.get(`${FORUM_BASE_URL}/auth/us/${user}`)
    }

    loginAUser(user) {
        return axios.post(`${FORUM_BASE_URL}/auth/login`, user)
    }

    getUserId(userName) {
        return axios.post(`${FORUM_BASE_URL}/auth/${userName}`)
    }

    getUserCount() {
        return axios.get(`${FORUM_BASE_URL}/auth/count`)
    }

    checkMail(user) {
        return axios.post(`${FORUM_BASE_URL}/forgot/gentkn`, user)
    }

    conformPassword(user) {
        return axios.post(`${FORUM_BASE_URL}/forgot/change`, user)
    }

    getUserName(userName) {
        return axios.get(`${FORUM_BASE_URL}/auth/name/${userName}`)
    }

    //Search for a question

    searchQuestion(question) {
        return axios.get(`${FORUM_BASE_URL}/question/search/${question}`)
    }

    searchCategory(categoryName) {
        return axios.get(`${FORUM_BASE_URL}/ca/searchcat/${categoryName}`)
    }

    // Reply start here

    postAReply(reply) {
        return axios.post(`${FORUM_BASE_URL}/reply/rep`, reply)
    }

    getReplyByAnswerId(answerId) {
        return axios.get(`UM_BASE_URL}/reply/all/${answerId}`)
    }


}

export default new ForumService();