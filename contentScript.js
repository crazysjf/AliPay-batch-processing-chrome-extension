//背景设为紫色
//document.body.style.backgroundColor = "#FF00FF";
//var clip = window.clipboardData.getData("Text")

document.addEventListener('paste', function (event) {
    var clipText = event.clipboardData.getData('Text');
    alert('pasting:' + clipText)
    console.log(clipText)
    console.log("asdf")
})

var accountInputs = document.querySelectorAll('.account-display');
console.log(accountInputs)


for (var i =0; i<accountInputs.length; i++) {
    accountInputs[i].value = 'aa'
}

var addUserButton = document.querySelectorAll('a#addUser.add-pointer')[0]
console.log(typeof(addUserButton))
for (var names in addUserButton) {
    console.log(names)
}
console.log(addUserButton.onclick)
for (var i = 0; i<18; i++)
    // TODO：console中onclick可以调用。此处调用onclick不行，只能是click。原因不明。
    addUserButton.click()
