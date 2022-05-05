<template>
<div>

<div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="../assets/itbs1.jpg" class=" d-block   " style="width:100%;height:600px" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../assets/itbs1.jpg" class="d-block  " style="width:100%;height:600px" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../assets/itbs1.jpg" class="d-block"  style="width:100%;height:600px" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


 </div>
</template>
<script>
  export default {
      name: 'Car-ousel',
  props: {
    msg: String
  }
  } 
</script>
<style scoped>

</style>