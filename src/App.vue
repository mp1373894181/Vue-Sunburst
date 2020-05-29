<template>
  <div>
    <!-- 顶部区域 -->
    <div class="ui container topbar">
      <div class="ui segment borderless fixed menu  m-shadow-small" style="padding-top: 0em !important;padding-bottom: 0em !important;margin: 0 !important;background-color: #fef7f7 !important;">
        <div class="left item" style="padding: 0em !important;margin: 0 !important">
          <img src="/image/logo.jpg" alt class="ui small image" style="height:80px;width:110px" />
          <div class="ui content">
            <p class="ui header" style="border-bottom:1px solid;font-weight:200">● 您的私人影像馆</p>
          </div>
        </div>
        <div class="ui right item">
          <div class="ui icon input m-shadow-small" style="margin-left:500px">
            <input type="text" placeholder="Search..." />
            <i class="inverted circular search link icon"></i>
          </div>
        </div>

        <div class="right item m-shadow-small">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的收藏</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">
              <a href="https://www.ele.me" target="_blank">影像仓库</a>
            </el-menu-item>
          </el-menu>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <!-- <el-page-header content="test"></el-page-header> -->
    <!-- <el-tabs type='border-card'>

        <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i>行程</span>
        </el-tab-pane>

    </el-tabs>-->
    <!-- 中间区域 -->
    <router-view></router-view>
    <!-- tab-bar区域 -->
    <nav class="ui inverted vertical segment center aligned">
      <div class="ui container">
        <div class="ui large secondary inverted pointing menu">
          <div class="item">
            <i class="ui home icon"></i>
            <router-link to="/home">主页</router-link>
          </div>
          <div class="item">
            <i class="ui newspaper outline icon"></i>
            <router-link to="/news">新闻</router-link>
          </div>
          <div class="item">
            <i class="ui shopping basket icon"></i>
            <router-link to="/shoppingCart">订单</router-link>
          </div>
          <div class="item">
            <i class="ui user icon"></i>
            <router-link to="/member">会员</router-link>
          </div>
          <div class="right item">
            <a class="ui inverted button">登录</a>
            <a class="ui inverted button">注册</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
nav {
  width: 100%;
  position: fixed !important;
  padding-top: 2em !important;
  padding-bottom: 2em !important;
  bottom: 0 !important;
  opacity: 0.8 !important;
}

.m-width {
  width: 250px !important;
}

.topbar{
  width:100%;
  background-color: #fef7f7 !important;
  border-bottom: 1px solid;
}

.m-shadow-small {
    -webkit-box-shadow: 0 4px 8px rgba(0,0,0,0.2) !important;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2) !important;
}
.m-shadow-big {
    -webkit-box-shadow: 0 8px 16px rgba(0,0,0,0.5) !important;
    box-shadow: 0 8px 16px rgba(0,0,0,0.5) !important;
}
.m-shadow-max {
    -webkit-box-shadow: 0 12px 18px rgba(0,0,0,0.9) !important;
    box-shadow: 0 12px 18px rgba(0,0,0,0.9) !important;
}
</style>