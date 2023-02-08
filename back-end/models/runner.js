import mongoose from "mongoose";

// Define a schema
const runnerSchema=mongoose.Schema({
    name:String,
    radius:String,
    startedTime:String,
    endTime:String,
    numberOfLaps:Number
})

// Compile model from schema
var Runner=mongoose.model("Runner", runnerSchema);

export default Runner;