/**
 * @module leadService
 * @description This module provides services for managing leads.
 * 
 * The lead service acts as an intermediary layer between the controllers and the 
 * data models. It abstracts the logic required to manipulate and query lead data,
 * ensuring that the controllers remain free of direct data manipulation responsibilities.
 * 
 * Current Services:
 * 1. `addLead(lead)`: Accepts a lead object, stores it in the in-memory database (array),
 *    and returns the stored lead.
 * 2. `getLeadByEmail(email)`: Accepts an email string and returns the corresponding lead 
 *    object if found.
 * 
 * Underlying Data Structure:
 * The current implementation uses an in-memory array (`leads`) to store lead data.
 * This is suitable for prototype or development purposes, but is not persistent,
 * meaning data is lost when the application stops.
 * 
 * Future Enhancements:
 * When transitioning to a production environment or a real database system:
 * 1. Replace the in-memory data structure with appropriate database queries.
 * 2. Implement error handling to handle scenarios such as duplicate leads, database 
 *    connection issues, etc.
 * 3. Consider enhancing the service layer with caching mechanisms to improve performance.
 * 
 * This service-centric architecture promotes code reusability and maintainability,
 * facilitating potential transitions to more complex storage mechanisms in the future.
 */
const leads = require('../models/leadModel');

const addLead = (lead) => {
    leads.push(lead);
    return lead;
};

const getLeadByEmail = (email) => {
    return leads.find(lead => lead.email === email);
};

module.exports = {
    addLead,
    getLeadByEmail
};
