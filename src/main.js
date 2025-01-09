const btn1 = document.getElementById("compress-btn");
const btn2= document.getElementById("decompress-btn");
const input= document.getElementById("fileInput");

function fileCompress(){
    var fileInput = document.getElementById('fileInput');

    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var content = e.target.result;
            document.getElementById('output').innerText = compressFile(content);
        };

        reader.readAsText(file);    
        document.getElementById('outputMsg').textContent= "File compressed successfully!";
        fileInput.value = '';
    } else {
        alert("Please select a text file.");
    }
}

function fileDecompress(){
    var fileInput = document.getElementById('fileInput');

    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var fileName = fileInput.files[0].name;
    
        document.getElementById('output').innerText = decompressFile(fileName);    
        document.getElementById('outputMsg').textContent= "File decompressed successfully!"
        fileInput.value = '';
    } else {
        alert("Please select a text file.");
    }
}

function fileChange(){
    document.getElementById('output').innerText= "";
    document.getElementById('outputMsg').textContent= "";
}

btn1.addEventListener("click", fileCompress);
btn2.addEventListener("click", fileDecompress);
input.addEventListener("change", fileChange);