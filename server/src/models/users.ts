import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const subcategorySchema = new mongoose.Schema({
    name: String,
    score: Number,
}, { _id: false });

const testResultSchema = new mongoose.Schema({
    testType: String,
    subcategories: [subcategorySchema],
}, { _id: false });

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    org_code: {
        type: String,
        required: true,
    },
    carreerOptions: {
        type: Array,
    },
    testResults: [testResultSchema], //array of test results
    resetToken: {
        type: String,
    },
    resetTokenExpiry: {
        type: Date,
    }
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
