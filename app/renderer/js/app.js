var $ = require('jQuery');
const ipc = require('electron').ipcRenderer;

function connectMain() {
    var user_list = $("#user-list").val();
    var text_input = $("#text-input").val();
    ipc.send('launch',
        {
            "users": user_list,
            "text": text_input
        }
    );
}