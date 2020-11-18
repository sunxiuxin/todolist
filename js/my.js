//1 文本框里面输入内容，按下回车，就可以生成待办事项。
//2 点击待办事项复选框，就可以把当前数据添加到已完成事项里面。
//3 点击已完成事项复选框，就可以把当前数据添加到待办事项里面。
//4 但是本页面内容刷新页面不会丢失
$(function () {
    onload();
    $('#title').on('keydown', function (even) {
        if (even.keyCode === 13) {
            if ($(this).val() === "") {
                alert('请输入您要选择的操作！')
            } else {
                var local = data();
                if (!$(this).val()) {
                    return;
                }
                console.log(local);
                local.push({ title: $(this).val(), done: false })
                sava(local);
                onload();
                $('#title').val('');
            }

        }
    })
    // 读取本地存储的数据
    function data() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }

    }
    // 保存本地存储的数据
    function sava(date) {
        localStorage.setItem("todolist", JSON.stringify(date));
    }
    //读取渲染本地存储的数据
    onload();
    function onload() {
        var local = data();
        $('ol,ul').empty();//清空子元素
        var todoCont = 0;
        var doneCont = 0;
        if (typeof (local.Items) == "undefined") {
            $('#todocount').text("0");
            $('#donecount').text("0");
        }
        $.each(local, function (i, item) {
            if (item.done) {
                $('ul').prepend(`<li>
                <input type='checkbox' checked="checked">
                <p>${item.title}</p>
                <a href="javascript:;" id=${i}></a>
                </li>`);
                ++doneCont;
                //目前的问题是，在删除时，ol或ul中有一条数据，那么在删除数据时计数器哪里就是正常，ol和ul总共只有一条数据，那么在删除时计数器哪里就是错误 的
            } else {
                $('ol').prepend(`<li>
                <input type='checkbox' >
                <p>${item.title}</p>
                <a href="javascript:;" id=${i}></a>
                </li>`);
                ++todoCont;

            }
            $('#todocount').text(todoCont);
            $('#donecount').text(doneCont);
            // onload();

        })
    }
    //给所有a标签绑定点击事件 删除的
    // 利用事件委托 
    $('ol ,ul').on('click', 'a', function () {
        var datas = data();
        // var index = $(this).attr('id');
        datas.splice($(this).attr('id'), 1);

        sava(datas);
        onload();
    })
    //正在进行和已完成选项操作
    $('ol,ul').on('click', 'input', function () {
        // alert(11);
        var datas = data();
        var index = $(this).siblings('a').attr('id');
        datas[index].done = $(this).prop('checked');
        sava(datas);
        onload();
    })

})