const { exec } = require('child_process');

const WithPromise = (videoUrl) => {
    if (!videoUrl) {
        return Promise.reject("Video URL bo'lishi shart");
    }

    return new Promise((resolve, reject) => {
        const command = `yt-dlp -f "best" --get-url ${videoUrl}`;


        exec(command, (error, res, warning) => {
            if (error) {
                reject(`Xatolik yuz berdi: ${error.message}`);
            } else if (warning) {
                resolve(res.trim());
            } else {
                resolve(res.trim());
            }
        });
    });
};
// test jarayonida hammasi ishga tushdi !
module.exports = WithPromise