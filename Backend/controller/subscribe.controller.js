// import Subscribe from '../model/subscribe.model.js'; 

// export const subscribeUser = async (req, res) => {
//     const { email } = req.body;

//     if (!/\S+@\S+\.\S+/.test(email)) {
//         return res.status(400).json({ message: 'Invalid email format.' });
//     }

//     try {
//         const newSubscription = new Subscribe({ email });
//         await newSubscription.save();

//         res.status(201).json({ message: 'Subscription successful!' });
//     } catch (error) {
//         if (error.code === 11000) {
//             res.status(400).json({ message: 'Email already subscribed.' });
//         } else {
//             res.status(500).json({ message: 'An error occurred while subscribing.' });
//         }
//     }
// };
