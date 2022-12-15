const express = require('express');
const router = express.Router();
const Plat = require('../models/plat')


// Get all subscribers

router.get('/', async (req, res) => {
    //res.send('ca fonctionne bien')
    try {
        const plats = await Plat.find()
        res.json(plats)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
// Get one subscriber
router.get('/:id', (req, res) => {
})
// Create one subscriber

router.post('/', async (req, res) => {
    const plat = new Plat({
        nom: req.body.nom,
        categorie: req.body.categorie,
        calorie: req.body.calorie,
        recettes: req.body.recettes,
        img: req.body.img
    })
    try {
        const newPlat = await plat.save()
        res.status(201).json(newPlat)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update one plat
router.patch('/:id', getPlat, async (req, res) => {

    if (req.body.nom != null) {

        res.plat.nom = req.body.nom

    }

    if (req.body.categorie != null) {

        res.plat.categorie = req.body.categorie

    }
    if (req.body.calorie != null) {

        res.plat.calorie = req.body.calorie

    }
    if (req.body.recettes != null) {

        res.plat.recettes = req.body.recettes

    }
    if (req.body.img != null) {

        res.plat.img = req.body.img

        try {

            const updatedPlat = await res.plat.save()

            res.json(updatedPlat)

        } catch {

            res.status(400).json({ message: err.message })

        }
    }
})
//GET PLAT

async function getPlat(req, res, next) {

    try {

    plat = await Plat.findById(req.params.id)

    if (plat == null) {

    return res.status(404).json({ message: 'Cant find subscriber'})

    }

    } catch(err){

    return res.status(500).json({ message: err.message })

    }

    res.plat = plat

    next()

    }

// Delete one plat
router.delete('/:id', getPlat, async (req, res) => {
 try {
 await res.plat.remove()
 res.json({ message: 'Deleted This plat' })
 } catch(err) {
 res.status(500).json({ message: err.message })
 } 
 
})


// async function getPlat(req, res, next) {
//     try {
//         plat = await Plat.findById(req.params.id)
//         if (plat == null) {
//             return res.status(404).json({ message: 'Cant find plat' })
//         }
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
//     res.plat = plat
//     next()
// }

// Delete one subscriber

// router.delete('/:id', getPlat, async (req, res) => {

//     try {

//         await res.plat.remove()

//         res.json({ message: 'Deleted This Plat' })

//     } catch (err) {

//         res.status(500).json({ message: err.message })

//     }
// })
    module.exports = router