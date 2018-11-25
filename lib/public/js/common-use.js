function dropHandler(ev) {
  ev.preventDefault();
  if (ev.dataTransfer.items) {
	for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name,now_path);
		uploadFile(file);
		break;
      }
    }
  } else {
    uploadFile(ev.dataTransfer.files[0]);
  } 
  removeDragData(ev)
}
function uploadFile(file){
    if(file==undefined)
    	return;
    var formData = new FormData();

    formData.append("upload",file);
    $.ajax({
        url: 'api' + now_path + encodeURI(file.name)+'?type=UPLOAD_FILE',
        type: 'POST',
        data: formData,
        enctype: 'multipart/form-data',
        //contentType:"application/x-javascript; charset:ISO-8859-1"
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            console.log("OK");
            fresh("#"+now_path);
            //fresh();
        }
    });
}

function dragOverHandler(ev) {
  ev.preventDefault();
}
function removeDragData(ev) {
  if (ev.dataTransfer.items) {
    ev.dataTransfer.items.clear();
  } else {
    ev.dataTransfer.clearData();
  }
}