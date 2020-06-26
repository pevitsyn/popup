function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("open").style.display = "none";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("open").style.display = "block";
}



function sendForm() {
    var attr = document.getElementsByClassName("open-button")[0].dataset.formDn_id;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone_number = document.getElementById("phone_number").value;
    var cookies = document.cookie;
    var xhr = new XMLHttpRequest(),
        method = "POST",
        url = "test.php";
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            var obj = xhr.responseText;
            var resp = JSON.parse(obj);
            state = resp.err_mes;
            redir = resp.redirect_url;
            if(state === "ok") {
                if(redir) {
                    window.location.href = redir;
                }
                else {
                    alert("redirect_url is empty");
                }
            }
            else {
                if(state) {
                    alert(state);
                }
                else {
                    alert("err_mess is empty");
                }
            }

        }
    }
    xhr.send("name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&phone_number=" + encodeURIComponent(phone_number) + "&attr=" + encodeURIComponent(attr) + "&COOKIE=" + encodeURIComponent(cookies));
}