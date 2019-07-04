/*把code 写到#code和style标签里面*/
function writeCode(prefix, code, fn) {
    let n = 0
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let id = setInterval(() => {
        n += 1

        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
        style.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            clearInterval(id)

            fn()
        }

    }, 0)

}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper > .content')
    let n = 0
    let id = setInterval(() => {
        n += 1

        domPaper.innerHTML = marked(markdown.substring(0, n))
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            clearInterval(id)


        }

    }, 0)
}

var result = `
*{
transition: all 1s;
}
#code{
padding：16px;
}
html {
  background: rgb(222,222,222);
  font-size:16px;
}

/*接下来我需要一点代码高亮 */
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
   position: fixed;
   right:0;
   width:50%;
   height: 100%;
   background:#ddd;
   display:flex;
   justify-content:center;
   align-items:center;
}
#paper > .content {
    background:white;
    width:100%;
    height:100%;
}
`
var result2 = `
    #paper{
        
    }
    `
// var n = 0
// var id = setInterval(() => {
//     n += 1
//     code.innerHTML = result.substring(0, n)
//     code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
//     style.innerHTML = result.substring(0, n)
//     if (n >= result.length) {
//         clearInterval(id)
//         fn2()
//         fn3(result)

//     }

// }, 0)

var md = `
自我介绍

姓名：冯国欣
1997年2月生
城市：上海
基础：入谷前自学啦 4 个月

报名原因：目前在制药公司不脱产学习。
待遇工资稳定，不喜欢这样的环境。经哥哥介绍前端，
感觉很感兴趣，就开始学习前端。
自学由于掌握的知识点零零散散，无法系统掌握，
于是报名饥人谷希望得到系统学习

学习目标：争取在金9能转行成功，找到心仪工作
`

writeCode('', result, () => {
    console.log('添加paper')
    createPaper(() => {
        console.log('paper有了')
        writeCode(result, result2, () => {
            writeMarkdown(md)
        })
    })
})




function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    var div = document.createElement('pre')
    div.className = 'content'
    paper.appendChild(div)
    fn.call()
}

document.getElementsByClassName('content').innerHTML = marked('# Marked in the browser\n\nRendered by **HTML**.');
// function fn3(preResult) {
//     var result = `
//     #paper{
//         width:100px;height:100px;
//         background:red;
//     }
//     `
//     var n = 0
//     var id = setInterval(() => {
//         n += 1
//         code.innerHTML = preResult + result.slice(0, n)
//         code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
//         style.innerHTML = result.substring(0, n)
//         if (n >= result.length) {
//             clearInterval(id)
//         }
//     }, 50)
// }
