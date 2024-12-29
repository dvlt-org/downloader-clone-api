const router = require("express").Router()

const { createFile, updateFile, deleteFile, getFiles } = require("../controllers/File")

// create File
router.post("/", createFile)

// update File
router.put("/:id", updateFile)

// delete File
router.delete("/:id", deleteFile)

// get Files
router.get("/:id", getFiles)

module.exports = router