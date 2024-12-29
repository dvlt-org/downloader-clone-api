const Query = require("../models/Query")

const createQuery = async (req, res) => {
    try {
        const newQuery = new Query(req.body)
        const saveQuery = await newQuery.save()
        res.status(201).json(saveQuery)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateQuery = async (req, res) => {
    try {
        const updatedQuery = await Query.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedQuery)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteQuery = async (req, res) => {
    try {
        await Query.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "So'rov o'chirib tashlandi !" })
    } catch (error) {
        res.status(500).json(error)
    }
}

const getQuerys = async (req, res) => {
    try {
        const allQuery = await Query.find({ user_id: req.params.id})
        res.status(200).json(allQuery)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {
    createQuery,
    updateQuery,
    deleteQuery,
    getQuerys,
};