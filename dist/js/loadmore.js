jQuery(function(a){a(".loadmore").click(function(){var e=a(this),r={action:"loadmore",query:loadmore_params.posts,page:loadmore_params.current_page};a.ajax({url:loadmore_params.ajaxurl,data:r,type:"POST",beforeSend:function(a){e.text("加载中...")},success:function(a){a?(e.text("加载更多").prev().after(a),loadmore_params.current_page++,loadmore_params.current_page==loadmore_params.max_page&&e.remove()):e.remove()}})})});