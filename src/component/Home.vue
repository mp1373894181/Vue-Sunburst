<template>
  <div>
    
    <div class="ui container" style="margin-top:130px">
      <div class="ui basic segment">
        <el-carousel :interval="3000" type="card" height="300px">
          <el-carousel-item v-for="item in image_cards" :key="item.image_cards">
            <!-- <div class="ui image">
                <img :src="item.url" class="ui large image"/>
            </div>-->
            <div class="block">
              <!-- <span class="demonstration">自定义</span> -->
              <el-image :src="item.url">
                <div slot="placeholder" class="image-slot">
                  加载中
                  <span class="dot">...</span>
                </div>
              </el-image>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="ui container" style="padding-top:35px">
      
      <div class="ui segment">
          <div class="ui segment vertical">
            <p class="ui header">最新发布 :</p>
      </div>
        <div class="ui top attached segment vertical divided three column grid" @mouseover="flag=true" @mouseleave="flag=false">
          <div class="column">
            <div class="ui fluid card m-hover-image">
              <div class="image">
                <div v-show="flag" class="ui center aligned shadow" style="padding-top:18px">
                    <a href="" style="font-size:17px;font-weight:800px;color: white">彩虹</a></div>
                <img
                  @mouseover="flag=!flag" @mouseleave="flag=!flag"
                  src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1205/18/c0/11660968_1337312660218.jpg"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card m-hover-image">
              <div class="image">
                <div v-show="flag" class="ui center aligned shadow" style="padding-top:18px">
                    <a href="" style="font-size:17px;font-weight:800px;color: white">islands</a></div>
                <img
                  @mouseover="flag=!flag" @mouseleave="flag=!flag"
                  src="http://attach.bbs.miui.com/forum/201312/21/204252k421cce21ylcty2s.jpg"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card m-hover-image">
              <div class="image">
                <div v-show="flag" class="ui center aligned shadow" style="padding-top:18px">
                    <a href="" style="font-size:17px;font-weight:800px;color: white">ubuntu乌班图系统官方</a></div>
                <img
                  @mouseover="flag=!flag" @mouseleave="flag=!flag"
                  src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1212/10/c1/16492492_1355128176361.jpg"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card m-hover-image">
              <div class="image">
                <div v-show="flag" class="ui center aligned shadow" style="padding-top:18px">
                    <a href="" style="font-size:17px;font-weight:800px;color: white">北极风光风景</a></div>
                <img
                  @mouseover="flag=!flag" @mouseleave="flag=!flag"
                  src="http://attach.bbs.miui.com/forum/201408/07/215032i6n6nm4gpo9xkkzx.jpg"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card m-hover-image">
              <div class="image">
                <div v-show="flag" class="ui center aligned shadow" style="padding-top:18px">
                    <a href="" style="font-size:17px;font-weight:800px;color: white">湖光山色</a></div>
                <img
                  @mouseover="flag=!flag" @mouseleave="flag=!flag"
                  src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1305/03/c0/20496484_1367549048818.jpg"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card m-hover-image">
              <div class="image">
                <div v-show="flag" class="ui center aligned shadow" style="padding-top:18px">
                    <a href="" style="font-size:17px;font-weight:800px;color: white">油菜花</a></div>
                <img
                  @mouseover="flag=!flag" @mouseleave="flag=!flag"
                  src="http://pic1.win4000.com/wallpaper/d/593a01ca2c7cd.jpg"
                  alt
                />
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import $ from 'jquery'
//     $(function(){

//     })

export default {
  data: function() {
    return {
      image_cards: [],
      flag: false,
      msg: "css3如何实现圆角边框-百度经验"
    };
  },
  methods: {
    list_image_home() {
      this.image_cards.push({
        id: 1,
        url:
          "http://attach.bbs.miui.com/forum/201110/07/082726lghakmgjmgnah9aa.jpg"
      });
      this.image_cards.push({
        id: 2,
        url:
          "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1305/03/c0/20496484_1367549048818.jpg"
      });
      this.image_cards.push({
        id: 3,
        url:
          "http://attach.bbs.miui.com/forum/201306/23/110328s72xxse7lfis9fnd.jpg"
      });
      this.image_cards.push({
        id: 4,
        url:
          "http://t9.baidu.com/it/u=583874135,70653437&fm=79&app=86&f=JPEG?w=3607&h=2408"
      });
    }
  },
  created() {
    this.list_image_home();
  }
};
</script>
<style scoped>
.el-carousel_item:nth-child(2n) {
  background-color: royalblue;
}
.el-carousel_item:nth-child(2n + 1) {
  background-color: salmon;
}

.el-carousel,
.el-carousel--horizontal,
.el-carousel--card {
  text-align: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.el-carousel__item--card {
  opacity: 0.95;
}

.m-shadow-small {
  -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
}
.m-shadow-big {
  -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5) !important;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5) !important;
}
.m-shadow-max {
  -webkit-box-shadow: 0 12px 18px rgba(0, 0, 0, 0.9) !important;
  box-shadow: 0 12px 18px rgba(0, 0, 0, 0.9) !important;
}
.m-hover-image:hover {
  /* transform: translateY(-20px); */
  transform: rotate(5deg);
  /* transform: rotate3d(0,1,0,50deg); */
  transition: 0.5s;
  z-index: 99;
}
.shadow {
  width: 100%;
  height: 25%;
  position: absolute;
  z-index: 99999;
  background-color: #000;
  opacity: 0.5;
  border-radius: 4px 4px 0 0;
}
</style>