// $(function () {
    // 初始化渲染
    // load()
    // 1.给文本框设置 键盘按下事件
    // 1).如果按下的是回车键 e.keyCode==13 就进行存储操作
    // 2).存储的数据格式  var todolist = [{title: "xxx", done: false}] 为什么存储这种格式 稍等？
    // 3.把数组的格式转化为对象的格式
    // 2。// 不能直接存储：会把之前的覆盖    所以：在存储之前1.先获取2.在追加3.在存储
    // $("#title").on("keydown", function (e) {
    //     if (e.keyCode == 13) {
    //         // 1.先获取
    //         var local = getItem();
    //         // 2.在追加
    //         local.push({ title: $(this).val(), done: false })
    //         // 3.在存储
    //         setItem(local)
    //         // 4.渲染页面
    //         load()
    //         // 清空value值
    //         $(this).val("")
    //     }
    // })
    // // 删除事件
    // $("ol").on("click", "a", function () {
    //     //    核心：  删除localStorage里面的数据
    //     var index = parseInt($(this).attr("index"));
    //     // 获取数据
    //     var data = getItem();
    //     // 修改数据  删除数组  splice(索引,1)
    //     data.splice(index, 1)
    //     // 存储数据
    //     setItem(data)
    //     // 渲染页面
    //     load();
    // })
    // // 获取数据
    // function getItem() {
    //     var data = localStorage.getItem("tudolist");
    //     if (data == null) {
    //         return [];
    //     } else {
    //         return JSON.parse(data);
    //     }
    // }
    // // 存储数据
    // function setItem(data) {
    //     localStorage.setItem("tudolist", JSON.stringify(data))
    // }
    // // 渲染数据
    // function load() {
    //     // 清空页面元素内容
    //     $("ol").empty();
    //     // 1.获取
    //     var data = getItem();
    //     // var arr = [{ title: 123, done: false }, { title: 123, done: false }, { title: 123, done: false }]
    //     // 遍历每一条数据  渲染页面
    //     $.each(data, function (i, ele) {
    //         // 自定义属性的目的：  根据索引找到localStorage数组对应的某一项
    //         // $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
    //         $("ol").prepend("<li><input type='checkbox' checked='checked'><p>" + ele.title + "</p><a href='javascript:;' index=" + i + "></a></li>")
    //     })
    // }

//     load()
//     $("#title").on("keydown", function (e) {
//         if (e.keyCode == 13) {
//             // 获取数据
//             var local = getData();
//             // 追加数据
//             local.push({ title: $(this).val(), done: false });
//             // 设置数据
//             setDate(local);
//             // 渲染页面
//             load()
//             $("#title").val("")
//         }
//     })
//     // 删除
//     $("ol,ul").on("click", "a", function () {
//         var index = parseInt($(this).attr("index"));
//         var data = getData();
//         data.splice(index, 1);
//         setDate(data);
//         load()
//     })
//     // input注册事件
//     // 思想：
//     // 单击input 
//     // 取出当前元素的索引
//     // 获取数据
//     // 数据再根据索引更改数据的属性
//     // 在去添加进去
//     // 再去渲染     1.在根据done的属性再去判断   如果是true 说明选中了  那么添加到ul里面   否则  添加 ol里面
//     $("ol,ul").on("click", "input", function () {
//         var index = parseInt($(this).siblings("a").attr("index"));
//         // 获取元素
//         var data = getData();
//         data[index].done = $(this).prop("checked");
//         setDate(data);
//         load()
//     })
//     // 获取数据
//     function getData() {
//         var data = localStorage.getItem("tudolist");
//         if (data == null) {
//             return [];
//         } else {
//             return JSON.parse(data)
//         }
//     }
//     function setDate(data) {
//         localStorage.setItem("tudolist", JSON.stringify(data))
//     }
//     function load() {
//         $("ol,ul").empty()
//         var data = getData();
//         $.each(data, function (i, ele) {
//             if (ele.done) {
//                 $("ul").prepend("<li><input type='checkbox' checked='checked'  /><p>" + ele.title + "</p><a href='javascript:;' index=" + i + "></a></li>")
//             } else {
//                 $("ol").prepend("<li><input type='checkbox'   /><p>" + ele.title + "</p><a href='javascript:;' index=" + i + "></a></li>")
//             }
//         })
//     }
// })
