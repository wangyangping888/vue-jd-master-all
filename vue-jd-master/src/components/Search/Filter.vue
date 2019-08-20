<template>
	<!-- 搜索筛选 -->
	<div id="search-filter" :style="{zIndex:optionIndex==4?9999:9998}">
		<div class="filter-tab flex" :style="{zIndex:optionIndex==4?-1:1}">
			<div class="tab-item flex-item" :class="{active:filterIndex==1}" @click="filterIndex=1;optionIndex=optionIndex==1?0:1;" > 
				<span>{{sort[sortIndex]}}  <i></i></span> 
			</div>
			<div class="tab-item flex-item" :class="{active:filterIndex==2}" @click="filterIndex=2;optionIndex=0;"> 
				<span>销量 </span> 
			</div>
			<div class="tab-item flex-item" :class="{active:filterIndex==3}" @click="optionIndex=optionIndex==3?0:3;"> 
				<span>服务 <i></i></span> 
			</div>
			<div class="tab-item flex-item" :class="{active:filterIndex==4}" @click="optionIndex=optionIndex==4?0:4;"> 
				<span>筛选 <i class="filter-icon"></i></span> 
			</div>
		</div>
		<div class="option-group">
			<div class="sort" v-show="optionIndex==1">
				<ul>
					<li :class="{active:sortIndex==index}" v-for="(item,index) in sort" :key="index" v-text="item" @click="sortIndex=index;optionIndex=0;"></li>
				</ul>
			</div>
			<div class="service" v-show="optionIndex==3">
				<ul>
					<li :class="{active:serviceSelect.indexOf(index)>-1}" v-for="(item,index) in service" :key="item" v-text="item" @click="slectServiceOption(index)" ></li>
				</ul>
				<div class="btn-group flex">
					<div class="btn btn-rest flex-item" @click="serviceSelect=[];" >重置</div>
					<div class="btn btn-ok flex-item" @click="optionIndex=0;">确定</div>
				</div>
			</div>
			<div class="filter" v-show="optionIndex==4">



				<div class="btn-group flex">
					<div class="btn btn-rest flex-item" @click="optionIndex=0;" >取消</div>
					<div class="btn btn-ok flex-item" @click="optionIndex=0;">确定</div>
				</div>
			</div>
		</div>
		<div class="mask" v-show="optionIndex>0"   @click="optionIndex=0;"></div>
		<!-- <div class="mask" v-show="optionIndex>0"   @click="optionIndex=0;"></div> -->
	</div>
	
</template>

<script>
export default {
  data() {
    return {
      search: "",
      optionIndex: 0,
      filterIndex: 0,
      sort: ["综合", "最新上架", "价格最低", "价格最高", "评价最多"],
      sortIndex: 0,
      service: [
        "京东物流",
        "有货优先",
        "货到付款",
        "海豚全球",
        "促销商品",
        "配送全球"
      ],
      serviceSelect: []
    };
  },
  methods: {
    slectServiceOption(index) {
      if (this.serviceSelect.indexOf(index) > -1) {
        // 存在则移除操作
        this.serviceSelect.splice(
          this.serviceSelect.findIndex(item => item === index),
          1
        );
      } else {
        this.serviceSelect.push(index);
      }
    }
  }
};
</script>

<style lang="less">
#search-filter {
  position: fixed;
  width: 100%;
  top: 0.9rem;
  left: 0;
  z-index: 9998;
  line-height: 0.8rem;

  .filter-tab {
    height: 0.8rem;
    background-color: #ffffff;
    color: #333;
    text-align: center;
    font-size: 0.28rem;
    width: 100%;
    position: relative;
    &::after {
      display: block;
      content: "";
      height: 1px;
      width: 100%;
      position: absolute;
      background-color: #e5e5e5;
      bottom: 0px;
      left: 0px;
    }
    .tab-item {
      i {
        position: relative;
        top: -0.05rem;
        display: inline-block;
        width: 0.16rem;
        height: 0.1rem;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKBAMAAABPkMOvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTMzMzMzMzMzMzMzMzM3NzdLS0svLy6qqqszMzMzMzMzMzGC86tIAAAALdFJOUwDl9UGdJhG9A2jOR0lNjwAAAEdJREFUCNdj8N4NBlsYVkMYuxgCIQxRBmZtEL3JgIFhNoixk4GBgQXEcAAyOKp3797eAGQwJO7eLQaiGVi1NwWAGQyGwkACAKGfIfA79uAMAAAAAElFTkSuQmCC);
        background-size: contain;
      }
      &.active {
        color: #e93b3d;
        i {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTFBRkQzNUE4RUE5MTFFNjlGOEZBM0ZCRDkxNTQ3ODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEEzQkVCNkM4RUFGMTFFNjlGOEZBM0ZCRDkxNTQ3ODgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMUFGRDM1ODhFQTkxMUU2OUY4RkEzRkJEOTE1NDc4OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMUFGRDM1OThFQTkxMUU2OUY4RkEzRkJEOTE1NDc4OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjuQXsYAAACYSURBVHjaYnliabOUgYEhFIhZGUgDv4F4NROQ0CBDMwNUjxbIgHAgfkOGAa9BLgcZcAdqyC8SNIPURoD0MkEF9gFxAQkG5EP1MDAhCU4H4mlEaJ4KxDNgHCY0yTyYyTjAPqjtDLgM+AvEIdBwQQd3oHJ/8RkAAu+B2BeIPyKJfYSKvUdXzITDqTeAOBCIX0BxAFQMAwAEGABzlx8yrIQ8yQAAAABJRU5ErkJggg==);
        }
      }

      i.filter-icon {
        content: "";
        display: inline-block;
        vertical-align: middle;
        margin-top: 0.05rem;
        margin-left: 0.04rem;
        width: 0.26rem;
        height: 0.26rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTMzMzM7OzszMzNDQ0MfHx8zMzDEar9oAAAAGdFJOUwDTFcQWF87ZqzkAAABeSURBVBjTYzBLQ4BkBlSeYmIAAwSwigkxMImJQnmBiQoMcEmQFANQUgQhBZJ0AJIsYCmYpCNECiIJkwJJGjAww6QYGNQSGNiSYBwGtgQQoi6P2QCZB5GmMQ9oJRAAANAtGtSzNppcAAAAAElFTkSuQmCC);
        background-size: 0.26rem auto;
      }
    }
  }
  .option-group {
    position: absolute;
    background-color: #ffffff;
    width: 100%;
    top: 0.8rem;
    left: 0;
    z-index: 1;
    li {
      line-height: 0.9rem;
      border-bottom: solid 1px #e5e5e5;
      font-size: 0.28rem;
      padding: 0 0.7rem 0 0.2rem;
      &.active {
        color: #e93b3d;
      }
    }

    .sort li.active {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAACgaw2xAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTOQ6OtQqKuQ4O/8AAOM4O+Q4POI4OuM4O+Q4O+M4O+M5POQ4O+M4O+U4OuU2POQ4POQ4O+Q5O+Q5POG6XjYAAAATdFJOUwAvBl4BstwRzseW9XvrRR2+iVGqKQ+qAAAAaUlEQVQY023PSQ6AIBBEUSZpBhGTuv9dnRAiVq869VdPKXZmj3RXCTxYlMp2nbGxXTxWtrsFi2NhhRe2b8ia7bXAUllEam+M8pWZNyAIlUkY5SsbZZa95S9rhcjuQmVX4bKzdNlcuuy5A/z7BLUpU+pnAAAAAElFTkSuQmCC);
      background-position: right 0.2rem bottom 0.3rem;
      background-repeat: no-repeat;
      background-size: 12px auto;
    }

    .service {
      li {
        padding: 0 0.2rem 0 0.7rem;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTGZmZllZWWZmZmVlZWZmZmVlZWVlZWZmZl5eXmZmZmZmZmVlZWZmZmVlZWZmZlGEcY8AAAAPdFJOUwDrBD9/w1KU+A810mcZrfWtsHoAAACwSURBVBjTY2AAAqb0wA7RMgUGKOB0/A8CIhOg/MT/W6xmLvb+Lwbhqv8PBtOm/4vAmt/3QNWd+Acygv3jAiifS74ASOZ3wcxlWPENaLj8ATif5+MEBpavDAgQ78Cg+BmJby/EkL8Bic/9jaHeAYnP8p0h3gCJz/yVQf4CEp/3I0O/AhKf6QcGH109unno9qG7B9296P5B9y96eGCEF3p4ooc3OD5slS7D4wMjvpDjEwD/aEyjy6SSuwAAAABJRU5ErkJggg==);
        background-repeat: no-repeat;
        background-position: 0.2rem;
        background-size: 0.3rem auto;
        &.active {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUdwTOQ5O+Q4POM5O+Q5O+Q5POQ4O+M4O906OuQ4O+M4POQ5POZFR/////nS0/rY2P3t7fe/wOlbXusl4nYAAAALdFJOUwCATJaS+lfqC76U2Io2/AAAALVJREFUKM+F09kWxBAMAFCUBqHD/P/HDk4tY81TT68lIQgpwbgCIUBxJkkfkgKWANoNuBtMA+5WLxziqqpwEiornykK/e6Li0j7S1gxxPwpLoMuJpvneaezmX5sYmSztKOa9MUnNVcNtcNGEYjIf82oKAo79x00cF7c2+j/GhYvqUXvNKRWCjPBO0XdHou3nYZjaQ7VeGeGO9lfyelCD+1AiJ6r3rWiULVV9baRT8/g9IhWT/AH/3oe6BTTwR8AAAAASUVORK5CYII=);
        }
      }
      //底部按钮
      .btn-group {
        text-align: center;
        font-size: 0.32rem;
        line-height: 0.9rem;
        height: 0.9rem;
        background: #fefefe;
        color: #e93b3d;
        background-color: #fff;
        box-shadow: 0 -1px 3px #f1f1f1;

        .btn-ok {
          color: #fefefe;
          background-color: #e93b3d;
        }
      }
    }
    /**筛选*/
    .filter {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      width: 85%;
      background-color: #ffffff;
      padding-bottom: 1rem;
      .btn-group {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        font-size: 0.32rem;
        line-height: 1rem;
        height: 1rem;
        background: #fefefe;
        color: #e93b3d;
        background-color: #fff;
        box-shadow: 0 -1px 3px #f1f1f1;

        .btn-ok {
          color: #fefefe;
          background-color: #e93b3d;
        }
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>