layui.use('laydate', function() {
	var laydate = layui.laydate;

	//开始时间
	laydate.render({
		elem: '#LAY_demorange_s'
	});
	//结束时间
	laydate.render({
		elem: '#LAY_demorange_e'
	});
	//文章添加时间
	laydate.render({
		elem: '#LAY_demorange_add'
	});
	
	//个人资料出生年月
	laydate.render({
		elem: '#userBirthday'
	});
	
});

layui.use(['form', 'layedit'],function() {
	var form = layui.form
	  ,layer = layui.layer
	  ,layedit = layui.layedit
	//全选
	form.on('checkbox(allChoose)', function(data) {
		var child = $(data.elem).parents('table').find('tbody tr td:first-child input[type="checkbox"]');
		child.each(function(index, item) {
			item.checked = data.elem.checked;
		});
		form.render('checkbox');
	});
	 //创建一个编辑器
  	var editIndex = layedit.build('news_content');
});
//分页
layui.use(['laypage', 'layer'], function() {
	var laypage = layui.laypage,
		layer = layui.layer;

	laypage.render({
		elem: 'demo1',
		count: 80,
		layout: ['count', 'prev', 'page', 'next', 'limit', 'skip'],
		jump: function(obj) {}
	});

});

//添加文章
$(window).one("resize", function() {
	$(".newsAdd_btn").click(function() {
		var index = layui.layer.open({
			title: "添加文章",
			type: 2,
			content: "newsAdd.html",
			success: function(layero, index) {
				setTimeout(function() {
					layui.layer.tips('点击此处返回', '.layui-layer-setwin .layui-layer-close', {
						tips: 3
					});
				}, 500)
			}
		})
		layui.layer.full(index);
	})
}).resize();


//删除文章
$(".news_del").click(function() {
	//点击删除按钮
	layer.confirm('是否删除该文章？', {
		btn: ['是', '否'] //按钮
	}, function() {
		layer.msg('删除成功');
	}, function() {});
})

$(".batchDel").click(function() {
	//点击批量删除按钮
	layer.confirm('是否删除选中的文章？', {
		btn: ['是', '否'] //按钮
	}, function() {
		layer.msg('删除成功');
	}, function() {});
})


//编辑文章
$(window).one("resize", function() {
	$(".news_edit").click(function() {
		var index = layui.layer.open({
			title: "编辑文章",
			type: 2,
			content: "newsEdit.html",
			success: function(layero, index) {
				setTimeout(function() {
					layui.layer.tips('点击此处返回', '.layui-layer-setwin .layui-layer-close', {
						tips: 3
					});
				}, 500)
			}
		})
		layui.layer.full(index);
	})
}).resize();

//个人资料图片上传
layui.use('upload', function(){
  var $ = layui.jquery
  ,upload = layui.upload;
  
  //普通图片上传
  var uploadInst = upload.render({
    elem: '#userFace'
    ,url: '/upload/'
    ,before: function(obj){
      //预读本地文件示例，不支持ie8
      obj.preview(function(index, file, result){
        $('#demo1').attr('src', result); //图片链接（base64）
      });
    }
    ,done: function(res){
      //如果上传失败
      if(res.code > 0){
        return layer.msg('上传失败');
      }
      //上传成功
    }
    ,error: function(){
      //演示失败状态，并实现重传
      var demoText = $('#demoText');
      demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
      demoText.find('.demo-reload').on('click', function(){
        uploadInst.upload();
      });
    }
  });
  
})