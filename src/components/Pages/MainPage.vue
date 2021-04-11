<template>
  <div>
    <div class="control-overflow">
      <div class="row">
        <div class="category">
          <div class="py-3">
            <div class="row px-5 py-3">
              <div class="section-head-2 px-5 py-2 w-100 mx-3">
                Categories
              </div>
            </div>
            <div class="row px-5">
              <div class="col-md-6">
                <div class="dropdown">
                  <button class="card-c section-content dropdown-toggle w-100" type="button" id="dropdownAcademic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Academic
                  </button>
                  <div class="dropdown-menu w-100" aria-labelledby="dropdownAcademic">
                    <a class="dropdown-item" href="#">School</a>
                    <a class="dropdown-item" href="#">College</a>
                    <a class="dropdown-item" href="#">Business School</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dropdown">
                  <button class="card-c section-content dropdown-toggle w-100" type="button" id="dropdownProfessional" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    professional
                  </button>
                  <div class="dropdown-menu w-100" aria-labelledby="dropdownProfessional">
                    <a class="dropdown-item" href="#">professional 1</a>
                    <a class="dropdown-item" href="#">professional 2</a>
                    <a class="dropdown-item" href="#">professional 3</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dropdown">
                  <button class="card-c section-content dropdown-toggle w-100" type="button" id="dropdownIT" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    IT
                  </button>
                  <div class="dropdown-menu w-100" aria-labelledby="dropdownIT">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dropdown">
                  <button class="card-c section-content dropdown-toggle w-100" type="button" id="dropdownBusiness" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Business
                  </button>
                  <div class="dropdown-menu w-100" aria-labelledby="dropdownBusiness">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dropdown">
                  <button class="card-c section-content dropdown-toggle w-100" type="button" id="dropdownAgriculture" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Agriculture
                  </button>
                  <div class="dropdown-menu w-100" aria-labelledby="dropdownAgriculture">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dropdown">
                  <button class="card-c section-content dropdown-toggle w-100" type="button" id="dropdownSports" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sports
                  </button>
                  <div class="dropdown-menu w-100" aria-labelledby="dropdownSports">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dropdown">
                  <button class="card-c section-content dropdown-toggle w-100" type="button" id="dropdownArt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Art
                  </button>
                  <div class="dropdown-menu w-100" aria-labelledby="dropdownArt">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dropdown">
                  <button class="card-c section-content dropdown-toggle w-100" type="button" id="dropdownOthers" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Others
                  </button>
                  <div class="dropdown-menu w-100" aria-labelledby="dropdownOthers">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row px-5 py-4 justify-content-center">
              <a href="#" class="btn btn-main">
                More Categories
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-12 pl-0">
          <!-- <div class="banner"></div> -->
          <img src="images/TopBanner.jpg" class="img-fluid w-100" />
          <!-- <div class="banner-mob">
            <img src="images/TopBanner.jpg" class="img-fluid"/>
          </div> -->
        </div>
      </div>
    </div>

    <!-- Our tutors -->
    <section class="control-overflow spad-sm">
      <div class="row px-5 py-3">
        <div class="section-head px-5 py-2">
          our tutors
        </div>
      </div>
      <div class="px-5 py-3">
        <Slick ref="slick" :options="slickOptions">
          <div class="card-body px-5 pt-1 pb-1 tutors">
            <img src="images/person2.png" class="card-img-top"/>
            <div class="card-body">
              <div class="tutor-name">Ram Nepal</div>
              <p class="tutor-quote">"This is the finest Learning platform for learners all over nepal"</p>
            </div>
            <hr>
          </div>
          <div class="card-body px-5 pt-1 pb-1 tutors">
            <img src="images/person2.png" class="card-img-top"/>
            <div class="card-body">
              <div class="tutor-name">Sam Nepal</div>
              <p class="tutor-quote">"Grab your opportunities here!"</p>
            </div>
            <hr>
          </div>
          <div class="card-body px-5 pt-1 pb-1 tutors">
            <img src="images/person2.png" class="card-img-top"/>
            <div class="card-body">
              <div class="tutor-name">Sita Kumari</div>
              <p class="tutor-quote">"This platform has great potential for beginners and can help them grow professional"</p>
            </div>
            <hr>
          </div>
          <div class="card-body px-5 pt-1 pb-1 tutors">
            <img src="images/person2.png" class="card-img-top"/>
            <div class="card-body">
              <div class="tutor-name">Sujan Tharu</div>
              <p class="tutor-quote">"Amazing how all courses can be available at same platform. Great!"</p>
            </div>
            <hr>
          </div>
          <div class="card-body px-5 pt-1 pb-1 tutors">
            <img src="images/person2.png" class="card-img-top"/>
            <div class="card-body">
              <div class="tutor-name">Nitesh Manandhar</div>
              <p class="tutor-quote">"This is the finest Learning platform for learners all over nepal"</p>
            </div>
            <hr>
          </div>
          <div class="card-body px-5 pt-1 pb-1 tutors">
            <img src="images/person2.png" class="card-img-top"/>
            <div class="card-body">
              <div class="tutor-name">Gokul KC</div>
              <p class="tutor-quote">"Have been teaching for last 20 years and couldn't find better platform than this. Kudos!"</p>
            </div>
            <hr>
          </div>
        </Slick>
      </div>
    </section>
    <!-- Tutors end -->

    <!-- popular category -->
    <section class="control-overflow spad-sm">
      <div class="row px-5 py-3">
        <div class="section-head px-5 py-2">
          popular categories
        </div>
      </div>
      <div class="px-5 py-3">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-3">
                <div class="card section-content p-0 mt-0">
                  <div class="category-overlay">
                    <span>
                      ART
                    </span>
                  </div>
                  <img src="images/Categories/art.jpg" style="max-height: 94px;">
                </div>
              </div>
              <div class="col-md-3">
                <div class="card section-content p-0 mt-0">
                  <div class="category-overlay">
                    <span>
                      Music
                    </span>
                  </div>
                  <img src="images/Categories/music.jpg" style="max-height: 94px;">
                </div>
              </div>
              <div class="col-md-3">
                <div class="card section-content p-0 mt-0">
                  <div class="category-overlay">
                    <span>
                      Code
                    </span>
                  </div>
                  <img src="images/Categories/coding.jpg" style="max-height: 94px;">
                </div>
              </div>
              <div class="col-md-3">
                <div class="card section-content p-0 mt-0">
                  <div class="category-overlay">
                    <span>
                      Books
                    </span>
                  </div>
                  <img src="images/Categories/books2.jpg" style="max-height: 94px;">
                </div>
              </div>
            </div>
            <div class="row pt-5 pb-4 mt-2">
              <div class="section-head-2 px-5 py-2">
                Popular Courses
              </div>
            </div>
            <div class="row py-2">
              <div class="col-md-4">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/awLnur5Yt9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <div class="col-md-4">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/viHILXVY_eU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <div class="col-md-4">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-x7UpUwkkPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-12">
                <div class="section-head-2 py-2 px-5 w-100">
                  recent news/ updates
                </div>
                <div class="card-body" style="background-color: #eaeaea;">
                  <div class="list-group" style="box-shadow: 0px 0px 4px 0px rgba(51, 51, 51, 0.685);">
                    <a href="#" class="list-group-item list-group-item-action">Cras justo odio</a>
                    <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                    <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                    <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                    <a href="#" class="list-group-item list-group-item-action">Vestibulum at eros</a>
                    <a href="#" class="list-group-item list-group-item-action">Vestibulum at eros</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end popular category -->

    <!-- Top study material -->
    <section class="control-overflow spad-sm">
      <div class="row px-5 py-3">
        <div class="section-head px-5 py-2">
          Top Study Materials
        </div>
      </div>
      <div class="row px-5 py-4">
        <!-- <Slick ref="slick" :options="slickOptionsStudy">
          <div class="card-body">
            <div class="card-img">
              <img src="images/TopStudy/python.jpg" class="card-img-top img-fluid">
            </div>
            <div class="card-body px-5">
              <div>
                Learn Python 2021
              </div>
              <div>
                <small>Jose Portilla </small>
              </div>
              <div>
                <strong>NA</strong>
              </div>
              <div class="text-success">FREE</div>
            </div>
          </div>
        </Slick> -->
        <!-- <Slick ref="slick" :options="slickOptionsStudy"> -->
          <div class="col-md-3">
            <div class="card">
              <div class="card-img">
                <img src="images/TopStudy/python.jpg" class="card-img-top img-fluid">
              </div>
              <div class="card-body px-5">
                <div>
                  Learn Python 2021
                </div>
                <div>
                  <small>Paint Villa</small>
                </div>
                <div>
                  <strong>Rs. 7,000</strong>
                </div>
                <div class="text-warning">PAID</div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-img">
                <img src="images/TopStudy/graphics.jpg" class="card-img-top img-fluid">
              </div>
              <div class="card-body px-5">
                <div>
                  Graphics Design 2021
                </div>
                <div>
                  <small>Paint Villa</small>
                </div>
                <div>
                  <strong>Rs. 7,000</strong>
                </div>
                <div class="text-warning">PAID</div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-img">
                <img src="images/TopStudy/js.jpg" class="card-img-top img-fluid">
              </div>
              <div class="card-body px-5">
                <div>
                  Learn JavaScript Full
                </div>
                <div>
                  <small>Martin Morse</small>
                </div>
                <div>
                  <strong>Rs. 5,000</strong>
                </div>
                <div class="text-warning">PAID</div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-img">
                <img src="images/TopStudy/angular.jpg" class="card-img-top img-fluid">
              </div>
              <div class="card-body px-5">
                <div>
                  Angular Course
                </div>
                <div>
                  <small>Rose Parker</small>
                </div>
                <div>
                  <strong>NA</strong>
                </div>
                <div class="text-success">FREE</div>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-12">
            <div class="card-body">
              <div class="card-img">
                <img src="images/TopStudy/angular.jpg" class="card-img-top img-fluid">
              </div>
              <div class="card-body px-5">
                <div>
                  Angular Course
                </div>
                <div>
                  <small>Rose Parker</small>
                </div>
                <div>
                  <strong>NA</strong>
                </div>
                <div class="text-success">FREE</div>
              </div>
            </div>
          </div> -->
        <!-- </Slick> -->
      </div>
    </section>
    <!-- end top study material -->

    <!-- why study here -->
    <div class="control-overflow spad">
      <div class="row px-5">
        <div class="card-body p-5" style="border: 2px solid rgba(51, 51, 51, 0.63);">
          <div class="section-study">
              WHY STUDY HERE?
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="flip-card" style="box-shadow: 0px 0px 8px 0px rgba(51, 51, 51, 0.705); background-color: #eaeaea;">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div class="category-overlay">
                      Topic 1
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <div>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="flip-card" style="box-shadow: 0px 0px 8px 0px rgba(51, 51, 51, 0.705); background-color: #eaeaea;">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div class="category-overlay">
                      Topic 2
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <div>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="flip-card" style="box-shadow: 0px 0px 8px 0px rgba(51, 51, 51, 0.705); background-color: #eaeaea;">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div class="category-overlay">
                      Topic 3
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <div>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="flip-card" style="box-shadow: 0px 0px 8px 0px rgba(51, 51, 51, 0.705); background-color: #eaeaea;">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div class="category-overlay">
                      Topic 4
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <div>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end -->

    <section class="control-overflow spad-sm" style="background-color: #fafafa;">
      <div class="row p-5">
        <div class="col-md-6">
          <!-- <div class="card-body text-center py-5" style="background-color: #fff;"> -->
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/viHILXVY_eU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          <!-- </div> -->
        </div>
        <div class="col-md-6">
          <div class="card-body py-5 h-100">
            <div>
              <h2>Transform your life through education</h2>
              <br />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Slick from 'vue-slick';

  export default {
    components: { Slick },
    data() {
      return {
        slickOptions: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false
        },
        slickOptionsStudy: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false
        }
      };
    },
  }

</script>