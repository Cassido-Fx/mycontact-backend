const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = async (req, res) => {
    res.status("200").json({message: "Get all contacts"});
};

//@desc Create contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body)
    const {name, phone, email} = req.body;
    if (!name || !phone || !email) {
        res.status(400);
        throw new Error("All fields are required!");
    }
    res.status("201").json({message: "Create contact"});
});

//@desc Get all contacts
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
    res.status("200").json({message: `Get contact of ${req.params.id}`});
});


//@desc Get all contacts
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
    res.status("200").json({message: `Update contact of ${req.params.id}`});
});

//@desc Get all contacts
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
    res.status("200").json({message: `Delete contact of ${req.params.id}`});
});



module.exports = {getContacts, createContact, updateContact, deleteContact, getContact}