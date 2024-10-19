const { Spent } = require('../db')

const addSpent = async (req, res) => {
    const {title, description, amount, spentType, date} = req.body

    try{

        if (!title || !description || amount === undefined || !spentType || !date) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newSpent = await Spent.create({
            title,
            description,
            amount,
            spentType,
            date
        })

        const response = {
            id: newSpent.id,
            title: newSpent.title,
            description: newSpent.description,
            amount: newSpent.amount,
            spentType: newSpent.spentType,
            date: newSpent.date

        }

        res.status(200).json(response)
    }catch(error){
        console.error("Error creating spent:", error); 
        res.status(500).json({error: "Something wrong with new spent"})
    }
}

module.exports = { addSpent }