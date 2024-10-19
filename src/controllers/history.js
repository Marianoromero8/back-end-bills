const { Spent } = require("../db")

const history = async (req, res) => {
    try{
    const historyDB = await Spent.findAll();

    const mapHistory = historyDB.map(spent => ({
        title:  spent.title,
        description: spent.description,
        amount: spent.amount,
        date: spent.amount
    }))
    res.status(200).json(mapHistory)
}catch(error){
    res.status(400).json({message: "You cant find history", error})
}
}   

module.exports = { history }