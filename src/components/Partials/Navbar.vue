<template>
  <nav class="navbar navbar-expand-lg bg-dark py-3">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="index.html">My Teacher</a>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav w-100 justify-content-between pl-3">
        <li class="nav-item">
          <a class="nav-link" href="#">Home </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="categoryDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Category
          </a>
          <div class="dropdown-menu" aria-labelledby="categoryDropdown">
            <a class="dropdown-item" href="#">Category A</a>
            <a class="dropdown-item" href="#">Category B</a>
            <a class="dropdown-item" href="#">Category C</a>
            <a class="dropdown-item" href="#">Category D</a>
            <!-- <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a> -->
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="courseDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Course
          </a>
          <div class="dropdown-menu" aria-labelledby="courseDropdown">
            <a class="dropdown-item" href="myCourse.html">Course A</a>
            <a class="dropdown-item" href="#">Course B</a>
            <a class="dropdown-item" href="#">Course C</a>
            <a class="dropdown-item" href="#">Course D</a>
            <!-- <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a> -->
          </div>
        </li>
        <li class="" style="width: 38%;">
          <form class="form-inline my-2 my-lg-0 search-box">
            <input class="form-control mr-sm-1 w-75" type="search" placeholder="Search by Categories or Courses" aria-label="Search">
            <button class="btn btn-custom my-2 my-sm-0" type="submit">
              <i class="fas fa-search" style="color: #fff;"></i>
            </button>
          </form>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Buy Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FAQs</a>
        </li>
        <li class="">
          <a class="btn btn-logreg mr-1">Login</a>
          <a class="btn btn-logreg">Register</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>
