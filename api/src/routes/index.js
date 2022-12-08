const { Router } = require('express');
const axios = require("axios");
const server =require('../app');
const { Activity, Country } = require("../db");
const { getApiData, getApiId } = require('./getApiToDB.js');



const router = Router();


router.get('/', async (req, res) => {
    try {
        const allMovies = await getApiData();
        if(allMovies.length > 0){
            res.status(200).send(allMovies)
            console.log("entre")
        }
    } catch (error) {
        res.status(400).send(console.log(error))
    }
    
});


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const detailApi = await getApiId(id);
        detailApi ? res.status(200).send(detailApi) : res.status(400).send("error");
        return;
    } catch (error) {
        res.status(400).send(console.log(error))
    }
})




module.exports = router;



