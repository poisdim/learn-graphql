const {model,Schema}=require('mongoose');
const bookSchema=new Schema({
name:{type:String},
genre:{type:String},
authorId:{type:String},
},{timestamps:true});

module.exports=model('book',bookSchema);