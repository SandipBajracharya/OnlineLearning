<template>
  <div>
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script> 
  import Navbar from './components/Partials/Navbar';
  import Footer from './components/Partials/Footer';

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    }
  }
</script>
   
<style>
  @import url('./assets/css/main.css');
  @import url('./assets/css/footer.css');
  @import url('./assets/css/header.css');
  @import url('../node_modules/slick-carousel/slick/slick.css');
</style>
