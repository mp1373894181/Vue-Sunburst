<template>  
    <div>
        <div class="ui segment">
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>影片列表</el-breadcrumb-item>
                <el-breadcrumb-item>影片详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="m-flex-column-box">
        <div class="m-movie-title">
            <div class="m-movie-t">
                《天气之子》BD1080P.日语中字
            </div>
            <div class="m-movie-d">
                <span style="font-weight: bold;">更新时间：<span class="myTag">2020-06-01</span></span>
                <span style="font-weight: bold;margin:0 4px">类别：<span class="myTag">爱情 </span><span class="myTag">动画 </span><span class="myTag">奇幻 </span></span>
                   
            </div>
        </div>
        <div class="m-movie-detail">
            <div class="m-key">导演：<span>新海诚</span></div>
            <div class="m-key">主演：<span> 森七菜</span></div>
            <div class="m-key">制片国家/地区：<span>日本</span></div>
            <div class="m-key">上映时间：<span>2019-11-01</span></div>
            <div class="m-key">片长：<span>113分钟</span></div>
        </div>

    </div>
        <div class="m-movie-post">
            <div class="main-post stackable">
                <img src="https://img1.doubanio.com/view/photo/l/public/p2570059839.webp" alt="">
            </div>
            <div class="slave-post ui two column">
                <img src="https://img9.doubanio.com/view/photo/l/public/p2580470145.webp" alt="">
                <img src="https://img9.doubanio.com/view/photo/l/public/p2575409155.webp" alt="">
                <img src="https://img9.doubanio.com/view/photo/l/public/p2574966515.webp" alt="">
                <img src="https://img3.doubanio.com/view/photo/l/public/p2558029291.webp" alt="">
            </div>
            <div>
                <div class="m-movie-text-title">
                    <div class="ui three pointing item menu stackable">
                    <a class="item"><el-popover style="border-bottom:5px red solid"
                        placement="bottom"
                        title="简介"
                        width="200"
                        trigger="click"
                        :content="movieDescription">
                        <el-button slot="reference">查看简介</el-button>
                    </el-popover></a>
                    <a class="item  active">截图预览</a>
                    <a class="item">
                        <el-popover style="border-bottom:5px red solid"
                        placement="bottom-end"
                        title="下载链接"
                        width="200"
                        trigger="click">
                        <el-table :data='downloadData'>
                            <el-table-column width='150' property='type' label='下载类型'></el-table-column>
                            <el-table-column width='150' property='url' label='下载地址'></el-table-column>
                        </el-table>
                        <el-button slot="reference">下载地址</el-button>
                    </el-popover></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="m-movie-cut">
            <template>
                <div class="ui segment">
                    <el-carousel :interval="5000" arrow="always" height="550px">
                    <el-carousel-item v-for="item in cuntImages" :key="item.id">
                    <img :src="item.url" alt="" style="width:100%;height:100%">
                    </el-carousel-item>
                </el-carousel>
                </div>
            </template>
        </div>
    </div>

</template>

<script>
export default {
    data: function(){
        return {
            cuntImages: [],
            downloadData: [{
                type: '百度云',
                url: 'https://pan.baidu.com/s/13gnrRdXUH9JJoli9EJkSvQ'
            },
            {
                type: 'ED2K',
                url: 'ed2k://|file|[BD影视分享bd-film.cc]天气之子.Child.of.Weather.2019.BD720P.日语中字.mp4|2604696656|E0FCE9BF46EA02F1AB09C0D969090A19|h=JJY5C37NWXKE46YPACWA6SCOU6WB3UO3|/'
            }],
            movieDescription: '高一那年夏天，帆高（醍醐虎汰朗配音）离开位在离岛的家乡，独自一人来到东京，拮据的生活迫使他不得不找份工作，最后来到一间专门出版奇怪超自然刊物的出版社担任写手。不久，东京开始下起连日大雨，仿佛暗示着帆高不顺遂的未来，在这座繁忙城市里到处取材的帆高邂逅了与弟弟相依为命，不可思议的美少女阳菜（森七菜配音）。「等等就会放晴了喔。」阳菜这样告诉着帆高，不久，头顶的乌云逐渐散去，耀眼的阳光洒落街道……原来，阳菜拥有「改变天气」的奇妙能力……'
        }
    },
    created() {
        this.getImageList();
    },
    methods: {
        getImageList(){
            this.cuntImages.push({id:1,url:'https://img3.doubanio.com/view/photo/l/public/p2558029290.webp'});
            this.cuntImages.push({id:2,url:'https://img9.doubanio.com/view/photo/l/public/p2558022524.webp'});
            this.cuntImages.push({id:3,url:'https://img1.doubanio.com/view/photo/l/public/p2558022518.webp'});
        }
    },
}
</script>

<style>
    [role=tooltip] {
        color: #959991;
        width:500px !important;
    }

    .el-popover__title{
        font-weight: bolder !important;
        padding: 10px !important;
        border-bottom: 1px solid;
    }

    .el-table_1_column_2 .cell{
        position:relative  !important;
        right:30px
    }

    .el-table__body{
         width:500px !important;
    }

    .has-gutter tr{
        display: none;
    }

    .myTag{
        font-size:10px;background-color:orange;border-radius: 10px;padding:0px 4px;
        cursor: pointer;
    }

    .el-button{
        border: none;
    }


  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


.m-movie-cut{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 550px;
    margin-top: 5px;
}




.m-movie-post {
    margin-top: 5px;
    width: 100%;
    height: 550px;
    display: flex;
    padding: 10px 5px;
}

.main-post{
    width:32%;
    height:100%;
    display: flex;
    align-content: center;
}
.main-post img{
    width: 100%;
    height:100%;
    z-index: 10;
}

.slave-post{
    width:68%;
    height:86%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
.slave-post img{
    position:relative;
    height:48.8%;
    width: 48.5%;
    margin:1px 2px;
}

.m-movie-text-title{
    height: 13% !important;
    position: absolute;;
    top: 48%;
    right: 18px;
    width: 65.7%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
}


.m-flex-column-box{
    display: flex;
    align-content: flex-start;
}

.m-movie-detail{
    width: 20%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    height: 150px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}

.m-key{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 4px 20px;
    font-size: 16px;
    font-weight: bold;
    border-bottom-style: double;
    border-bottom-width: 2px;
    border-bottom-left-radius: 8px;
    border-bottom-color: cadetblue;
    
}

.m-key span{
    font-size: 10px;
    font-weight: lighter;
    padding: 0px;
    margin: 0px;
}


.m-movie-title{
    background-color: #959991;
    width: 80%;
    height: 150px;
    box-shadow: 0 4px 8px rgba(3, 3, 53, 8);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
.m-movie-t{
    color: white;
    position: relative;
    top:25px;
    margin: 10px 20px;
    width: 80%;
    font-size: 30px;
    height: 50px;
    border-bottom-color: rgb(218, 236, 203);
    border-bottom-style:dotted;
    border-bottom-width: 2px;
}
.m-movie-d{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    position: relative;
    left:-20%;
    bottom: -20%;
    
}
</style>