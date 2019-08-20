<template>
    <footer class="common-footer">
        <ul class="common-links clear">
            <li><a href="javascript: void(0)">登录</a></li>
            <li><a href="javascript: void(0)">注册</a></li>
            <li><a href="javascript: void(0)" >客户服务</a></li>
            <li><a href="javascript: void(0)" style="border-right: 1px solid transparent">返回顶部</a></li>
        </ul>
        <ul class="common-icons clear">
            <li><a href="javascript: void(0)"><img src="//m.360buyimg.com/mobilecms/jfs/t16423/186/2517573622/5186/75a541f7/5ab1c0deN947bdcba.png" class="conmmon-icon-item"></a></li>
            <li><a href="javascript: void(0)"><img src="//m.360buyimg.com/mobilecms/jfs/t18550/294/898388074/6574/3a8c5413/5ab0b8e9Ne9c48331.png" class="conmmon-icon-item"></a></li>
            <li><a href="javascript: void(0)"><img src="//m.360buyimg.com/mobilecms/jfs/t14581/218/2689195961/4696/203b872a/5ab1c0f2N51c3f1bb.png" class="conmmon-icon-item"></a></li>
        </ul>
        <div class="common-copyright">Copyright © 2004-2018 京东JD.com 版权所有</div>
    </footer>
</template>
<script>
export default {};
</script>
<style lang="less">
.common-footer {
  padding-bottom: 1.08rem;
  margin: 0 auto;
  background-color: #fff;
  .common-links {
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    padding: 4.26667vw 5.33333vw;
    li {
      float: left;
      text-align: center;
      width: 25%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0 0.1rem;
      box-sizing: border-box;
      &:last-child a::after {
        display: none;
      }
    }
    a {
      position: relative;
      display: block;
      box-sizing: border-box;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #848689;
      font-size: 3.73333vw;
      padding-top: 3px;
      &::after {
        content: "";
        display: inline-block;
        height: 70%;
        width: 1px;
        background-color: #d7d7d7;
        position: absolute;
        right: 0;
        top: 15%;
      }
    }
  }
  .common-icons {
    border-bottom: 1px solid #e5e5e5;
    padding: 1.06667vw 2vw;
    li {
      float: left;
      text-align: center;
      width: 33.3333%;
      a {
        display: block;
        width: 100%;
        position: relative;
      }
      img {
        width: 16vw;
        vertical-align: middle;
      }
    }
  }
  .common-copyright {
    text-align: center;
    color: #848689;
    font-size: 1.86667vw;
    padding: 2vw 0;
  }
}
</style>


