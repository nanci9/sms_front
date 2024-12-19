<template>
  <div class="navBarDiv">
    <div class="navBarDivLogo">
      <img src="" alt="">
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">短信测压</el-menu-item>
      <el-menu-item index="3">提交莆田广告</el-menu-item>
    </el-menu>


  </div>
</template>


<script>
export default {
  name: 'Header',
}
</script>

<style>
* {
  margin: 0;
}

.thisblack-bgc {
  background-color: rgba(0, 0, 0, 0.5);
}

.navBarDiv {
  /* background-color:transparent; */
  z-index: 100;
  position: fixed;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 6px rgba(50, 50, 93, .1);
}

.navBarDivLogo {
  text-align: center;
  width: 15%;
}

.navBarDivLogo img {
  height: 45px;
}

.navBarContent {
  width: 50%;
}

.navBarContentItem {
  text-align: center;
  float: left;
  width: 15%;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
}

.navBarContentItem1 {
  text-align: center;
  float: left;
  width: 15%;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
  border-bottom: rgb(255, 0, 0) 3px solid;
}

.navBarContentItem:hover {
  background-color: antiquewhite;
}


.navBarDivEndBlack {
  width: 100%;
  text-align: center;
  float: left;
  height: 40px;
}

.navBarDivEndBlack img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.navBarDivEndBlack img:hover {
  transform: scale(1.1);
}

.navBarDivEndBlackPop:hover {
  transform: scale(1.05);
}

.navBarDivEndBlack .el-input__prefix {
  line-height: 40px;
  padding: 0 1px 0 3px;
}

.navBarDivLoginRegDivTop {
  display: flex;
  align-items: center;
  padding: 0 6px 0 6px;
  height: 50px;
  margin-bottom: 20px;
  background-color: rgb(248, 248, 248);
}

.navBarDivLoginRegDivItem {
  cursor: pointer;
  transition: all .2s linear;
  width: 50%;
  text-align: center;
  height: 40px;
  font-size: 1.1rem;
  line-height: 40px;
  background-color: #ebdfdf;
  border-color: .1px solid #5e6262;
  border-radius: 2px;
}

.navBarDivLoginRegDivItem1 {
  cursor: pointer;
  transition: all .2s linear;
  width: 50%;
  text-align: center;
  height: 40px;
  font-size: 1.1rem;
  line-height: 40px;
  border-radius: 2px;
  background-color: rgb(248, 248, 248);
}

.navBarDivLoginRegDivContent {
  margin: auto;
}

.navBarDivLoginRegDivContent .navBarDivLoginRegDivContentItem {
  width: 100%;
  height: 57px;
  line-height: 57px;
  text-align: center;
}

.navBarDivLoginRegDivContentItem input {
  caret-color: #4e6ef2;
  box-sizing: border-box;
  padding: 10px 20px;
  width: 80%;
  border: 1px solid #b8b8b8;
  font-size: 1.1rem;
  color: #1f1f1f;
  transition: .3s;
  font-family: PingFangSC-Regular, Tahoma, Helvetica, "Microsoft Yahei", "微软雅黑", Arial, STHeiti;
  border-radius: 8px;
}

.navBarDivLoginRegDivContentItem button {
  width: 80%;
  background: linear-gradient(90deg, #00bebd, #01a7a7);
  border-radius: 8px;
  line-height: 48px;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  color: #fff;
  padding: 0;
  transition: all .2s linear;
}

.navBarDivLoginRegDivContentItem button:active {
  background: linear-gradient(90deg, #03cfcf, #05b5b5);
}

.navBarDivLoginRegDivContentBotom {
  color: rgb(49, 94, 251);
  cursor: pointer;
}

.navBarDivLoginRegDivContentItemYouEmail {
  position: absolute;
  top: 258px;
  right: 18%;
  cursor: pointer;
}

.navBarDivRegDivTop {
  font-size: 1.2rem;
  text-align: center;
  font-size: 600;
  height: 30px;
}

.navBarDivEndBlackPop {
  text-align: center;
  font-size: 1rem;
  line-height: 30px;
  font-weight: 600;
  cursor: pointer;
  height: 30px;
}

.navBarDivEndBlackPop:hover {
  background-color: #f5f4f4;
}

.navBarDivEndMore .iconfont {
  color: #447272;
  cursor: pointer;
  font-size: 28px;
}

.navBarDivEndMore {
  transition: 0.3s;
}

@media screen and (min-width: 1200px) {
  .navBarDivEndMore {
    display: none;
  }

  .navBarDivEnd {
    display: flex;
    align-items: center;
  }

  .navBarDivEnd {
    width: 35%;
  }

  .navBarDivEndMoreList {
    display: none;
  }

  .navDialog {
    width: 30%;
  }
}

@media screen and (max-width: 1200px) {
  .navBarContent {
    display: none;
  }

  .navBarDiv {
    display: flex;
    justify-content: space-between;
  }

  .navBarDivEndBlack {
    display: none;
  }

  .navBarDivEndMore {
    margin-right: 20px;
    text-align: center;
    position: relative;
  }

  .navBarDivEndMoreList {
    top: 60px;
    width: 100%;
    position: absolute;
    background-color: #ffff;
    box-shadow: 0 2px 6px rgba(50, 50, 93, .1);
    transition: 0.3s;
  }

  .navBarDivEndMoreList1 {
    position: absolute;
    transform: translateY(-10px);
    transition: 0.3s;
  }

  .navBarDivEndMoreList ul {
    padding-left: 0;
  }

  .navBarDivEndMoreList li {
    height: 40px;
    padding: 5px 20px;
    list-style: none;
    color: #353030;
    line-height: 40px;
    cursor: pointer;
  }

  .navBarDivEndMoreList li:hover {
    color: #818686;
    background-color: #f1f6f6;
  }

  .navBarDivEndMoreList img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
  }

  .navBarDivEndMoreListUserLine {
    height: 8px;
    background-color: #edf0f0;
  }

  .navDialog {
    width: 95%;
  }
}
</style>
