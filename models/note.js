import mongoose from "mongoose";
import "dotenv/config";

// monogodb connection
const url = process.env.MONGODB_URI;
mongoose.connect(url);

//mongodb schema
const noteSchema = mongoose.Schema({
    content: { type: String, required: true, minLength: 5 },
    date: {
        type: Date,
        required: true,
    },
    important: Boolean,
});

//modify the schema to change _id to id
noteSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

// mongodb model definition
export const Note = mongoose.model("Note", noteSchema);
