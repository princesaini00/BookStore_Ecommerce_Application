// import mongoose from 'mongoose';

// const subscribeSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true,
//         trim: true,
//         validate: {
//             validator: function(v) {
//                 return /\S+@\S+\.\S+/.test(v);
//             },
//             message: props => `${props.value} is not a valid email!`
//         }
//     },
//     subscribedAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// const Subscribe = mongoose.model('Subscribe', subscribeSchema);

// export default Subscribe;
