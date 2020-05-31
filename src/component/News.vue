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
            
            <div class="ui top attached segment">
                <p class="ui header">按更新时间：</p>
            </div>
            <div class="ui attached five column grid segment mobile reversed stackable m-card-animate" style="display: flex;justify-content:flex-start;flex-wrap:wrap;">
                
                <div class="ui column card" style="width:190px !important;float:left;margin:24px 15px;padding:0px;position:relative">
                    <div class="m-rate-number">
                        <p class="ui header">8.1</p>
                    </div>
                    <a href="" class="m-image">
                        <img src="https://img3.doubanio.com/view/photo/l/public/p2545472803.webp" alt="" width='190px' height='250px'>
                    </a>
                    <div class="content" style="width:100%;height:50px;text-align:center">
                        <a class="m-card-title" href="card.php#">流浪地球</a>
                    </div>
                    <div class="m-tag"><p>科幻</p></div>
                </div>
                <div class="ui column card" style="width:190px !important;float:left;margin:24px 15px;padding:0px;position:relative">
                    <div class="m-rate-number">
                        <p class="ui header">6.1</p>
                    </div>
                    <a href="" class="m-image">
                        <img src="https://img1.doubanio.com/view/photo/l/public/p2601371208.webp" alt="" width='190px' height='250px'>
                    </a>
                    <div class="content" style="width:100%;height:50px;text-align:center">
                        <a class="m-card-title" href="card.php#">浩瀚的夜晚</a>
                    </div>
                    <div class="m-tag"><p>科幻</p></div>
                </div>
                <div class="ui column card" style="width:190px !important;float:left;margin:24px 15px;padding:0px;position:relative">
                    <div class="m-rate-number">
                        <p class="ui header">9.4</p>
                    </div>
                    <a href="" class="m-image">
                        <img src="https://img3.doubanio.com/view/photo/l/public/p2208323422.webp" alt="" width='190px' height='250px'>
                    </a>
                    <div class="content" style="width:100%;height:50px;text-align:center">
                        <a class="m-card-title" href="card.php#">星际穿越</a>
                    </div>
                    <div class="m-tag"><p>科幻</p></div>
                </div>
                <div class="ui column card" style="width:190px !important;float:left;margin:24px 15px;padding:0px;position:relative">
                    <div class="m-rate-number">
                        <p class="ui header">5.0</p>
                    </div>
                    <a href="" class="m-image">
                        <img src="https://img9.doubanio.com/view/photo/l/public/p2600602044.webp" alt="" width='190px' height='250px'>
                    </a>
                    <div class="content" style="width:100%;height:50px;text-align:center">
                        <a class="m-card-title" href="card.php#">灭绝边缘</a>
                    </div>
                    <div class="m-tag"><p>科幻</p></div>
                </div>
                <div class="ui column card" style="width:190px !important;float:left;margin:24px 15px;padding:0px;position:relative">
                    <div class="m-rate-number">
                        <p class="ui header">7.6</p>
                    </div>
                    <a href="" class="m-image">
                        <img src="https://img3.doubanio.com/view/photo/l/public/p2198455702.webp" alt="" width='190px' height='250px'>
                    </a>
                    <div class="content" style="width:100%;height:50px;text-align:center">
                        <a class="m-card-title" href="card.php#">银河护卫队</a>
                    </div>
                    <div class="m-tag"><p>科幻</p></div>
                </div>
                
                 <div class="ui column card" style="width:190px !important;float:left;margin:24px 15px;padding:0px;position:relative">
                    <div class="m-rate-number">
                        <p class="ui header">7.5</p>
                    </div>
                    <a href="" class="m-image">
                        <img src="https://img3.doubanio.com/view/photo/l/public/p2525057333.webp" alt="" width='190px' height='250px'>
                    </a>
                    <div class="content" style="width:100%;height:50px;text-align:center">
                        <a class="m-card-title" href="card.php#">侏罗纪世界</a>
                    </div>
                    <div class="m-tag"><p>科幻</p></div>
                </div>
                <div class="ui column card" style="width:190px !important;float:left;margin:24px 15px;padding:0px;position:relative">
                    <div class="m-rate-number">
                        <p class="ui header">8.7</p>
                    </div>
                    <a href="" class="m-image">
                        <img src="https://img3.doubanio.com/view/photo/l/public/p2432313490.webp" alt="" width='190px' height='250px'>
                    </a>
                    <div class="content" style="width:100%;height:50px;text-align:center">
                        <a class="m-card-title" href="card.php#">黑客帝国</a>
                    </div>
                    <div class="m-tag"><p>科幻</p></div>
                </div>
                <div class="ui column card" style="width:190px !important;float:left;margin:24px 15px;padding:0px;position:relative">
                    <div class="m-rate-number">
                        <p class="ui header">8.0</p>
                    </div>
                    <a href="" class="m-image">
                        <img src="https://img3.doubanio.com/view/photo/l/public/p2280097442.webp" alt="" width='190px' height='250px'>
                    </a>
                    <div class="content" style="width:100%;height:50px;text-align:center">
                        <a class="m-card-title" href="card.php#">火星救援</a>
                    </div>
                    <div class="m-tag"><p>科幻</p></div>
                </div>
                <div class="ui column card" style="width:190px !important;float:left;margin:24px 15px;padding:0px;position:relative">
                    <div class="m-rate-number">
                        <p class="ui header">7.9</p>
                    </div>
                    <a href="" class="m-image">
                        <img src="https://img3.doubanio.com/view/photo/l/public/p2014135242.webp" alt="" width='190px' height='250px'>
                    </a>
                    <div class="content" style="width:100%;height:50px;text-align:center">
                        <a class="m-card-title" href="card.php#">地心引力</a>
                    </div>
                    <div class="m-tag"><p>科幻</p></div>
                </div>
                <div class="ui column card" style="width:190px !important;float:left;margin:24px 15px;padding:0px;position:relative">
                    <div class="m-rate-number">
                        <p class="ui header">7.3</p>
                    </div>
                    <a href="" class="m-image">
                        <img src="https://img1.doubanio.com/view/photo/l/public/p505238859.webp" alt="" width='190px' height='250px'>
                    </a>
                    <div class="content" style="width:100%;height:50px;text-align:center">
                        <a class="m-card-title" href="card.php#">2012</a>
                    </div>
                    <div class="m-tag"><p>科幻</p></div>
                </div>
                
            </div>
            <div class="ui basic right aligned segment">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="20">
                </el-pagination>
            </div>
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
    /* margin: auto !important; */
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

.m-card-animate .card:hover{
    transform: translateX(20px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
}

.m-card-title {
    font-size: 14px;
    color: black;
    font-weight: 900;
}

.m-tag{
    background-color: orange;
    padding: 0;
    margin: 0;
    width:50px;
    height: 15px;
    text-align: center;
    padding:5px;
    position: absolute !important;
    right:0px !important;
    border:1px dotted red;
    display: flex;
    align-items: center;
    float: right;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
.m-tag p{
    font-size:5px;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 15px;
}

.m-rate-number{
    position: absolute;
    top:-21px;
    right:-14px;
    z-index: 99;
    outline-color: rgb(58, 42, 27);
    opacity: 0.7;
    
}

.m-rate-number p{
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: rgb(169, 201, 74);
    font-size: 40px !important;
    font-style: oblique !important;
    lighting-color: rgb(110, 0, 219);
    transform: rotateZ(7deg);
    outline-width: 3px;
    outline-style: solid;
    
}

.m-movie-card {
    width:190px !important;
    float:left;
    margin:10px 16px;
    padding:0px;
    position:relative
}
</style>