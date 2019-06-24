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

    }, 100)

}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper > .content')
    let n = 0
    let id = setInterval(() => {
        n += 1

        domPaper.innerHTML = markdown.substring(0, n)

        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            clearInterval(id)


        }

    }, 100)
}

var result = `
/* 面试官你好，我是冯国欣
// 我将以动画的形式来介绍自己

// 只用文字太单调啦
// 我就用代码来介绍吧

// 首先准备一些样式 */
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

/*加点3D效果*/
#code{
    transform:rotate(360deg)
}

/*不玩啦，接下来我来介绍一下我自己吧
 我需要一张白纸
*/
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

我叫冯国欣
1997年2月生
想应聘前端岗位

技能
熟悉HTML CSS JS

项目
canvas 画板
键盘导航网站
苹果轮播

联系方式
微信：Aa5595223
电话:13020165061
邮箱:782067903@qq.com
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
