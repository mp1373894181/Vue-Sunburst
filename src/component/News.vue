<template>
  <!-- <div><br><br><br><br><br><br><br><h1>新闻</h1></div> -->
  <div>
    <div class="ui container m-container-extra">
      <div class="ui vertical segment">
        <div class="ui vertical divided grid">
          <div class="four wide column">
            <div class="ui segment m-middle">
                <el-row class="tac">
                    <el-col :span="24">
                        <h5 class="ui header">分类察看</h5>
                       <div style="border-top:1px solid grey;border-radius:2px;">
                            <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                        <div class="navi">
                            <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-film"></i>
                            <span>科幻</span>
                            </template>
                            <el-menu-item-group>
                            <template slot="title">年份</template>
                            <el-menu-item index="1-1">2020年</el-menu-item>
                            <el-menu-item index="1-2">2019年</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="地区">
                            <el-menu-item index="1-3">美国</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        </div>
                        <div class="navi">
                            <el-submenu  index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>恐怖</span>
                                </template>
                            </el-submenu>
                        </div>
                        <div class="navi">
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-s-shop"></i>
                                    <span>动画</span>
                                </template>
                            </el-submenu>
                        </div>
                        </el-menu>
                       </div>
                       
                    </el-col>
                    </el-row>
            </div>
            <div class="ui segment">
                <div class="ui top attached segment center aligned">
                    <p class="ui header">点击排行</p>
                </div>
                <div class="ui bottom attached segment">

                </div>
            </div>
          </div>
          <div class="twelve wide column" style="">
            <router-view>
            </router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
<style scoped>
.clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

.m-image {
    margin: 0;
    padding: 0;
}

.m-container-extra {
  width: 98%;
  margin-top: 89px !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 420px;
    border-right: none;
  }
.m-middle {
    margin-left:0px;
}

.m-image-float {
    float: left;
    width:200px;
    height: 300px;
    margin: 10px 20px;
}

.navi:hover{
    transform: translateX(-10px);
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: 0.5s ease;
}


</style>