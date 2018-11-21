<template>
  <div>
    <ul class="nav">
      <li v-for="(item,index) in navList" :key="index" :class="{navActive:activeChange(index)}" @click="addFocus(index)">
        <router-link :to="item.href">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Vheader',
    data() {
      return {
        navList: [
          {href:'/selfEval',title:'联系我们',name:'selfEval'},
          // {href:'/projectExcp',title:'项目经验',name:'projectExcp'},
          // {href:'/workExcp',title:'工作经历',name:'workExcp'},
          // {href:'/skills',title:'专业技能',name:'skills'},
          // {href:'/selfInfo',title:'自我介绍',name:'selfInfo'},
        ],
        numFocus: 4
      }
    },
    methods: {
      addFocus(num) {
        this.numFocus = num
      },
      activeChange(num) {
        if(num == this.numFocus) {
          return true
        }
        return false
      }
    }
  }
</script>
<style>
  .nav {
    position: fixed;
    z-index: 100;
    float: right;
    height: 60px;
    width: 100%;
    background-color: #333;
  }
  .nav a {
    color: #fbfbfb;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .nav >li {
    float: right;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    color: #fff;
  }
  .navActive {
    background-color: #d93;
  }
</style>


