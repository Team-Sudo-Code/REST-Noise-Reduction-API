window.onload = () => {
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function request(url, type, params) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        type=type.toLowerCase();
        type=(type=="post"?"post":"get");
        if(type=="get"){
            params=Object.keys(params).map(function(k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
            }).join('&');
        }
        xhr.open(type, url+(type=="post"?"":("?"+params)), true);
        xhr.setRequestHeader('Content-type','application/octet-stream');
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
        params=new Blob([params],{type: 'application/octet-stream'});
        console.log(params);
        xhr.send(params);
    }).then(data=>{
        return (JSON.parse(data));
    });
}

function handleFileSelect(event) {
    var fileByteArray;
    (()=>{
        console.log(document.getElementById('fileInput').files[0]);
        const reader = new FileReader();
        reader.onerror = error => reject(error);
        reader.onload = data => {
            console.log(data);
            fileByteArray = data.target.result;
            fileByteArray=new Uint8Array(fileByteArray);
            window.promptBackup=window.prompt;
            window.prompt=()=>{};
            var results = ffmpeg_run({
                arguments: ("-i file.mp4 -ab 160k -ac 2 -ar 44100 -vn file.wav").split(" "),
                files: [
                    {
                        data: fileByteArray,
                        name: "file.mp4"
                    }
                ]
            });

            results.forEach(function (file) {
                console.log("File recieved", file.name, file.data);
                (function saveByteArray(){
                    request("/api/","post",file.data).then(data=>{
                        console.log(data);
                    });
                })();
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