<template>
  <div id="app">
    <!--标题-->
    <el-row>
      <el-col :span="24" class="top">
        <div class="grid-content bg-purple-dark">企业后台管理首页 （V2.0）</div>
      </el-col>
    </el-row>
    <!--导航-->
    <el-row>
      <el-col :span="24" class="nav">
        <div class="left">
          今天是：<span class="time">{{time}}</span>您当前的位置是：<span class="loca">首页</span>
        </div>
        <div class="right">
          <span class="guanli">
            管理员：
            [{{msg}}]
          </span>
          <span class="tuichu">
            <i class="el-icon-circle-cross"></i>
            退出
          </span>
        </div>
      </el-col>
    </el-row>
    <!--侧边tab-->
    <div class="container">
      <div class="left" id="tabHeight" :style="Style">
        <el-row class="tac">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                   theme="dark">
            <el-menu-item index="0">功能管理</el-menu-item>
            <el-submenu index="1">
              <template slot="title">文章管理</template>
              <el-menu-item-group title="">
                <el-menu-item index="1-1">
                  <router-link to="/Publish">发表文章</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link to="/Watch">查看文章</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">栏目管理</template>
              <el-menu-item-group title="">
                <el-menu-item index="2-1">
                  <router-link to="/add">添加栏目</router-link>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <router-link to="/seeCm">查看栏目</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">常用菜单</template>
              <el-menu-item-group title="">
                <el-menu-item index="3-1">
                  <router-link to="/index">前台首页</router-link>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <router-link to="/system">系统信息</router-link>
                </el-menu-item>
                <el-menu-item index="3-3">
                  <router-link to="/psd">密码修改</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-row>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        time: (new Date()).getFullYear() + '-' + (new Date()).getHours() + '-' + (new Date()).getMinutes(),
        msg: "XXX",
        Style: {
          height: (document.body.scrollHeight - 130) + "px"
        }
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        //this.addEventListener()
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    },

    /*ready: function () {
     let _height = document.body.scrollHeight;
     console.log(_height);
     let tabHeight = document.getElementById('tabHieght');
     console.log(tabHeight.height);
     //tabHeight.height = (_height - 130) + "px";
     }*/
  }


</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .top {

    height: 100px;
    line-height: 100px;
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    background-color: #20A0FF;
  }

  .tac {
  }

  .main {
    float: left;
  }

  .nav {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    background: url("bar1.jpg") repeat-x;
  }

  .nav .left {
    margin-left: 10px;
  }

  .nav .time {
    margin-right: 4px;
  }

  .nav .guanli {
    margin-right: 120px;
  }

  .nav .tuichu {
    color: #20A0FF;
    margin-right: 10px;
  }

  .el-menu-vertical-demo a {
    color: #ffffff;
    text-decoration: none;
  }

  .tac {
    float: left;
    width: 180px;
  }

  .container .left {
    background-color: #324157;
  }
</style>
