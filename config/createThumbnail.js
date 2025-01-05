const path = require("path")
const ffmpeg = require("fluent-ffmpeg")
const outputPath = path.join(__dirname, "..", "images")
const { exec } = require("child_process")

const createThumbnail = (videoUrl, fileName) => {
    try {
        // ffmpeg(videoUrl)
        //     .screenshots({
        //         timestamps: [1],
        //         filename: fileName,
        //         folder: outputPath
        //     })
        //     .on("end", () => {
        //         console.log("video rasm yaratildi !")
        //     })
        //     .on("error", (err) => {
        //         console.log("error mavjud", err)
        //     })
        const command = `ffmpeg -i "${videoUrl}" -vf "select='eq(n\,1)'" -vsync vfr ${outputPath}/${fileName}`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.log("Error:", error);
            } else if (stderr) {
                console.log("stderr:", stderr);
            } else {
                console.log("stdout:", stdout);
            }
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    generateThumbnail: createThumbnail
}