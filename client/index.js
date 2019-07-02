// start processing when the file is uploaded.
window.onload = () => {
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

// the request function used to send buffers to the server.
function request(url, buffer) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("post", url, true);
        xhr.setRequestHeader('Content-type', 'application/octet-stream');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status >= 400) {
                let res = xhr.response;
                if (typeof res.errorCode !== 'undefined') {
                    reject(new Error('Something went wrong...'));
                }
            }
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                let res = xhr.response;
                resolve(res);
            }
            if (xhr.readyState == 2) {
            }
        }
        xhr.onload = function () {
            let res = xhr.response;
            resolve(res);
        };
        xhr.onerror = function () {
            reject(new Error('error'));
        };
        buffer = new Blob([buffer], { type: 'application/octet-stream' });
        console.log(buffer);
        xhr.send(buffer);
    }).then(data => {
        return (JSON.parse(data));
    });
}

// use custom error functions.
function handleError(err) {
    throw new Error(err);
}

function handleFileSelect(event) {
    var fileByteArray; // The byte array of the input video.
    try{
        console.log(document.getElementById('fileInput').files[0]); // the source file
    }catch (err) {
        handleError(err);
    }
    const reader = new FileReader();
    reader.onerror = error => reject(error);
    reader.onload = data => {
        try {
            console.log(data);
            fileByteArray = new Uint8Array(data.target.result); // convert the data to a Uint8Array.
            window.promptBackup = window.prompt; //back up the prompt function.
            window.prompt = () => {}; // disable the prompt function.
            // use ffmpeg to separate audio from video.
            var results = ffmpeg_run({
                arguments: ("-i file.mp4 -ab 256k -ac 2 -ar 44100 -vn audio.wav").split(" "),
                files: [
                    {
                        data: fileByteArray,
                        name: "file.mp4"
                    }
                ]
            });
            var file = results[0]; // get the output audio file.
            console.log("File recieved", file.name, file.data);
            (function saveByteArray() {
                // send a request to the server.
                request("/api/apikey", file.data).then(data => {
                    // data.message: the status message of the request.
                    // data.audio: the audio response from the server.
                    // use ffmpeg to join the audio and video files.
                    results = ffmpeg_run({
                        arguments: ("-i file.mp4 -i audio.wav -c:v copy -map 0:v:0 -map 1:a:0 -strict -2 video.mp4").split(" "),
                        files: [
                            {
                                data: data.audio.data,
                                name: "audio.wav"
                            },
                            {
                                data: fileByteArray,
                                name: "file.mp4"
                            }
                        ]
                    });
                    var bytes = new Uint8Array(results[0].data); // pass your byte response to this constructor
                    var blob = new Blob([bytes], { type: "mp4" });// change resultByte to bytes
                    // download the file.
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "video.mp4";
                    link.click();
                }).catch(err => {
                    handleError(err);
                });
            })();
        }catch (err) {
            handleError(err);
        }
    };
    reader.readAsArrayBuffer(document.getElementById('fileInput').files[0]); // read the file.

}

/*
window.onload = () => {
var results = ffmpeg_run({
    arguments: [string],
    files: [
        {
            data: UInt8Array,
            name: string
        }
    ]
});

results.forEach(function (file) {
    console.log("File recieved", file.name, file.data);
});
}
*/