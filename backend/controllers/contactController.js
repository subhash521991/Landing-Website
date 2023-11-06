const contactModel = require("../models/contactModel.js"); 

const submitDetails = async function (req, res) {
    try {
      const data = req.body;
      if (!data.name) {
        return res
          .status(400)
          .send({ status: false, message: "name is required field" });
      }
      if (!data.email) {
        return res
          .status(400)
          .send({ status: false, message: "Email is required field" });
      }
      if (!data.phone) {
        return res
          .status(400)
          .send({ status: false, message: "phone is required field" });
      }
      if (data.phone.length < 10 || data.phone.length > 10) {
        return res.status(400).send({ status: false, message: "phone no must be 10 digit" });
      }

      if (!data.city) {
        return res
          .status(400)
          .send({ status: false, message: "city is required field" });
      }
      if (!data.message) {
        return res
          .status(400)
          .send({ status: false, message: "message is required field" });
      }
  
      const addNewEnquiry = await contactModel.create(data);
      res
        .status(201)
        .send({
          status: true,
          message: "Enquiry Submitted successfully",
          data: addNewEnquiry,
        });
    } catch (error) {
      return res.status(500).send({ msg: error.message });
    }
  }; 
  
 

module.exports.submitDetails = submitDetails;