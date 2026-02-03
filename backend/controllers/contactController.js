const ContactMessage = require('../models/ContactMessage');

// @desc    Create a new contact message
// @route   POST /api/contact
// @access  Public
const createContactMessage = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const contactMessage = new ContactMessage({
            name,
            email,
            message,
        });

        const createdMessage = await contactMessage.save();
        res.status(201).json(createdMessage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createContactMessage };
