var mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  mobile: {
    type: String,
  },
  
  age: {
    type: Number,
  },
  
  gender: {
    type: String,
  },
 
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  State: {
    type: String,
  },
  Gender: {
    type: String,
  },
  Zip: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostUser = mongoose.model("PostUser", postSchema);

module.export= PostUser;