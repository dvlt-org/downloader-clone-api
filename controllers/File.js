const File = require("../models/File")
const getUrl = require("../config/downloadVideo.js")
const { generateThumbnail } = require("../config/createThumbnail.js")


const createFile = async (req, res) => {
    try {
        const videoUrl = await getUrl(req.body.url)
        if (!videoUrl) {
            return res.status(400).json({
                message: "Url bo'yicha muammolar mavjud !"
            })
        }
        const fileName = Date.now() + ".png"
        generateThumbnail(videoUrl, fileName)

        const newFile = new File({
            name: req.body.name,
            image: fileName,
            isSecret: req.body.isSecret,
            user_id: req.body.user_id,
            downloadUrl: videoUrl
        })

        const savedFile = await newFile.save()

        if (!savedFile) return res.status(400).json({
            message: "Saqlashda muammo bo'ldi !"
        })

        res.status(200).json(savedFile)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateFile = async (req, res) => {
    try {
        const updatedFile = await File.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedFile)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteFile = async (req, res) => {
    try {
        await File.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "So'rov o'chirib tashlandi !" })
    } catch (error) {
        res.status(500).json(error)
    }
}

const getFiles = async (req, res) => {
    try {
        const allFiles = await File.find({ user_id: req.params.id })
        res.status(200).json(allFiles)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {
    createFile,
    updateFile,
    deleteFile,
    getFiles,
};