const router = require("express").Router()

const { createQuery, updateQuery, deleteQuery, getQuerys } = require("../controllers/Query")

// create query
router.post("/", createQuery)

// update query
router.put("/:id", updateQuery)

// delete query
router.delete("/:id", deleteQuery)

// get query
router.get("/:id", getQuerys)

module.exports = router