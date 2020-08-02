const express = require('express')
const Menu = require('../models/menu')
const router = new express.Router()

router.post('/menus', async (req, res) => {
    const menu = new Menu(req.body)

    try {
        await menu.save()
        res.status(201).send(menu)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/menus', async (req, res) => {
    try {
        const menus = await Menu.find({})
        res.send(menus)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/menus/:id', async (req, res) => {
    const _id = req.params.id

    try {
        
        const menu = await Menu.find({restaurantId: _id})

        if (!menu) {
            return res.status(404).send()
        }

        res.send(menu)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router