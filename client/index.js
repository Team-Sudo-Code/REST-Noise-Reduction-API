window.onload = () => {
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

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

function handleError(err) {
    console.log(err);
}

function handleFileSelect(event) {
    var fileByteArray; // The byte array of the input video.
    console.log(document.getElementById('fileInput').files[0]);
    const reader = new FileReader();
    reader.onerror = error => reject(error);
    reader.onload = data => {
        try {
            console.log(data);
            fileByteArray = data.target.result;
            fileByteArray = new Uint8Array(fileByteArray);
            window.promptBackup = window.prompt;
            window.prompt = () => { };
            var results = ffmpeg_run({
                arguments: ("-i file.mp4 -ab 256k -ac 2 -ar 44100 -vn audio.wav").split(" "),
                files: [
                    {
                        data: fileByteArray,
                        name: "file.mp4"
                    }
                ]
            });
            var file = results[0];
            console.log("File recieved", file.name, file.data);
            (function saveByteArray() {
                request("/api/apikey", file.data).then(data => {
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
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "video.mp4";
                    link.click();
                }).catch(err => {
                    handleError(err);
                });
            })();
        } catch (err) {
            handleError(err);
        }
    };
    reader.readAsArrayBuffer(document.getElementById('fileInput').files[0]);

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