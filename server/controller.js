const houses = require('./db.json');
let houseId = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        let tgtIndex = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(tgtIndex, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body;

        let newHouse = {
            id: houseId, address, price, imageURL
        }
        houses.push(newHouse);
        houseId++;

        res.status(200).send(houses);
    },
    updateHouse: (req, res) => {
        let { id } = req.params
        let { type } = req.params
        let index = houses.findIndex(elem => +elem.id === +id)

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.status(400)
        }
    }
};