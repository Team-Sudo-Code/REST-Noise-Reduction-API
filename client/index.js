window.onload = () => {
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event) {
    var fileByteArray;
    (function handleFileSelect(event) {
        console.log(document.getElementById('fileInput').files[0]);
        const reader = new FileReader();
        reader.onerror = error => reject(error);
        reader.onload = data => {
            console.log(data);
            fileByteArray = data.target.result;
            fileByteArray=new Uint8Array(fileByteArray);
            var results = ffmpeg_run({
                arguments: ("-i test.mp4 -ab 160k -ac 2 -ar 44100 -vn audio.wav").split(" "),
                files: [
                    {
                        data: fileByteArray,
                        name: "test.mp4"
                    }
                ]
            });

            results.forEach(function (file) {
                console.log("File recieved", file.name, file.data);
            });
        };
        reader.readAsArrayBuffer(document.getElementById('fileInput').files[0]);
    })();
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