
addUsers()

document.addEventListener('paste', function (event) {
    var clipText = event.clipboardData.getData('Text');
    //alert('pasting:' + clipText)
    console.log(clipText)

    var accountIs = getAccountsInputs()
    var amountIs  = getAmountInputs()
    // 两个数组长度应该相等

    var lines = clipText.split("\n")
    lines.splice(lines.length -1,1) // 最后一行是一个空行，需要删除
    for (var i = 0; i<accountIs.length && i<lines.length; i++) {
        var l = lines[i]
        var s = l.split(/\s+/)
        console.log(s)
        if (s.length != 3) {
            alert("拷贝格式错误：" + l)
        }
        accountIs[i].value = s[0]
        amountIs[i].value = s[1]
    }
})


// 模拟点击‘增加收款人’按钮，点18次
function addUsers() {
    var addUserButton = document.querySelectorAll('a#addUser.add-pointer')[0]
    for (var i = 0; i<18; i++)
        // TODO：console中onclick可以调用。此处调用onclick不行，只能是click。原因不明。
        addUserButton.click()
}


function getAccountsInputs() {
    var r = document.querySelectorAll('input.account-display');
    return r
}


function getAmountInputs() {
    var r = document.querySelectorAll('input.amount');
    return r
}

// console.log(accountInputs)
//
//
// for (var i =0; i<accountInputs.length; i++) {
//     accountInputs[i].value = 'aa'
// }
//


