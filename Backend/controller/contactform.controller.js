import Contact from "../model/contactform.model.js"; 

export const contactform = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(200).json({ message: 'Message received!' });
    } catch (error) {
        console.error('Error saving message:', error); 
        res.status(500).json({ message: 'Error saving message' });
    }
}
