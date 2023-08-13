/**
 * @module leadRoutes
 * @description This module provides routing for lead-related operations.
 * 
 * The module leverages the Express.js routing system to define endpoints and
 * associate them with specific controller methods. By organizing routes in this
 * modular manner, the application maintains a clear separation of concerns,
 * ensuring that the route definitions are decoupled from the business logic
 * (which resides in the controllers).
 * 
 * Current Endpoints:
 * 1. POST '/criar': For creating a new lead. This route expects lead data in the
 *    request body and passes control to the `addLead` method in the lead controller.
 * 2. GET '/consultar': For retrieving a lead by email. The email should be provided
 *    in the request body, which is then processed by the `getLeadByEmail` method in
 *    the lead controller.
 * 
 * Future Enhancements:
 * As the application evolves, additional routes can be added here. When transitioning 
 * to a production environment or a real database system, consider:
 * 1. Implementing authentication and authorization mechanisms to secure routes.
 * 2. Adding more CRUD operations as needed (e.g., update, delete).
 * 3. Enhancing error handling to provide more descriptive responses to the client.
 * 
 * The modular structure ensures easy scalability and maintainability as the project grows.
 */
const express = require('express');
const router = express.Router();

const leadController = require('../controllers/leadController');

router.post('/criar', leadController.addLead);
router.get('/consultar', leadController.getLeadByEmail);

module.exports = router;
