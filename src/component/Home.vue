<template>
  <div>

    <!-- <div class="ui container">
        <div class="ui segment vertical">
            <p class="ui header">最新发布:</p>
        </div>
    </div> -->
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
         <!-- <div class="ui segment vertical">
            <p class="ui header">最新发布:</p>
        </div> -->
      <div class="ui  segment">
        <div class="ui top attached segment vertical divided three column grid">
          <div class="column">
            <div class="ui fluid card">
              <div class="image">
                <img
                  src="http://t8.baidu.com/it/u=4100756023,1345858297&fm=79&app=86&f=JPEG?w=1280&h=854"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card">
              <div class="image">
                <img
                  src="http://t8.baidu.com/it/u=4100756023,1345858297&fm=79&app=86&f=JPEG?w=1280&h=854"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card">
              <div class="image">
                <img
                  src="http://t8.baidu.com/it/u=4100756023,1345858297&fm=79&app=86&f=JPEG?w=1280&h=854"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card">
              <div class="image">
                <img
                  src="http://t8.baidu.com/it/u=4100756023,1345858297&fm=79&app=86&f=JPEG?w=1280&h=854"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card">
              <div class="image">
                <img
                  src="http://t8.baidu.com/it/u=4100756023,1345858297&fm=79&app=86&f=JPEG?w=1280&h=854"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card">
              <div class="image">
                <img
                  src="http://t8.baidu.com/it/u=4100756023,1345858297&fm=79&app=86&f=JPEG?w=1280&h=854"
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
export default {
  data: function() {
    return {
      image_cards: []
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
          "http://img0.imgtn.bdimg.com/it/u=3769023270,3433174748&fm=214&gp=0.jpg"
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