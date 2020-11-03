<template>
  <div class="home">
    <headnav></headnav>
    <index></index>
    <footers></footers>
    <!-- <div class="positioning">
      <h4>合作咨询</h4>
      <div class="lxfs">
        <img   src="../../assets/phone.png">
        <span>: 0000-0000000</span>
      </div>
      <div class="lxfs bott">
        <img   src="../../assets/wx.png">
        <span>: 123456789</span>
      </div>
    </div> -->
  </div>
</template>

<script>
import headnav from '../../components/headnav'
import index from '../../components/index'
import footers from '../../components/footers'
export default {
  name: 'home',
  components: { headnav, index, footers }
}
</script>

<style lang="scss" scoped>
.home {
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  .positioning {
    position: fixed;
    //border: solid 1px black;
    background-color: #ffffff;
    height: 200px;
    color: black;
    right: 0;
    top: calc((100% - 228px) / 2);
    z-index: 9999;
    h4{
      text-align: center;
    }
    .lxfs{
      display: flex;
      align-items: center;
    }
    .bott{
      padding-top: 10px;
    }
    img{
    width: 40px;
    height: 40px;
    }
  }
}
</style>
