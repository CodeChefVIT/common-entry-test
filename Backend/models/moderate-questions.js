const mongoose = require('mongoose')

const moderateQuestionSchema = mongoose.Schema({
    question: {
        type: String
    },
    author : {
        type: String 
    },
    club :{
        type: String 
    }
})