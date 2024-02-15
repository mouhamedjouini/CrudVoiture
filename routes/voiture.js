const express = require('express');
const router = express.Router();
const Voiture = require('../schema/voiture');

/**
 * @swagger
 * tags:
 *   name: Voitures
 *   description: Endpoints for managing voitures
 * 
 * components:
 *   schemas:
 *     Voiture:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 * 
 * /voiture/all:
 *   get:
 *     summary: Get all voitures
 *     tags: [Voitures]
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Voiture'
 *       '500':
 *         description: Internal Server Error
 * 
 * /voiture/{id}:
 *   put:
 *     summary: Update a voiture
 *     tags: [Voitures]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the voiture to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Voiture'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Voiture'
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Internal Server Error
 *   delete:
 *     summary: Delete a voiture
 *     tags: [Voitures]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the voiture to delete
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Voiture'
 *       '500':
 *         description: Internal Server Error
 * 
 * /voiture/ajouter:
 *   post:
 *     summary: Create a new voiture
 *     tags: [Voitures]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Voiture'
 *     responses:
 *       '201':
 *         description: Voiture created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Voiture'
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Internal Server Error
 */

router.get('/all', (req, res) => {
  Voiture.find().then(
    (data) => {
      res.send(data);
    },
    (err) => {
      res.send(err);
    }
  );
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let a = req.body;

  Voiture.findOneAndUpdate({ _id: id }, a, { new: true }).then(
    (updated) => {
      res.send(updated);
    },
    (err) => {
      res.send(err);
    }
  );
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  Voiture.findByIdAndDelete({ _id: id }).then(
    (deleted) => {
      res.send(deleted);
    },
    (err) => {
      res.send(err);
    }
  );
});

router.post('/ajouter', (req, res) => {
  let voitures = req.body;
  let voiture = new Voiture(voitures);

  voiture.save().then(
    (data) => {
      console.log(data);
      res.send(data);
    },
    (error) => {
      console.log(error);
      res.send(error);
    }
  );
});

module.exports = router;