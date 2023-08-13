const Joi = require('joi');
const leadService = require('../services/leadService');

exports.addLead = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/^[0-9]+$/).required(),
        age: Joi.number().integer().min(0).required(),
        address: Joi.string().required()
    });

    const validation = schema.validate(req.body);
    
    if (validation.error) {
        return res.status(400).json({ message: validation.error.details[0].message });
    }

    try {
        const lead = await leadService.addLead(req.body);
        res.status(201).json(lead);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getLeadByEmail = async (req, res) => {
  const schema = Joi.string().email().required();

  // Validação agora checa req.body.email em vez de req.query.email
  const validation = schema.validate(req.body.email);
  
  if (validation.error) {
      return res.status(400).json({ message: validation.error.details[0].message });
  }

  // Busca pelo email agora checa req.body.email em vez de req.query.email
  const lead = await leadService.getLeadByEmail(req.body.email);
  
  if (!lead) {
      return res.status(404).json({ message: "Lead não encontrado." });
  }

  res.status(200).json(lead);
};

