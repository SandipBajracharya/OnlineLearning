<template>
  <div class="tutor-container">
    <div class="overlay">
      <div class="card login-form-container">
        <div class="row">
          <div class="col-md-12">
            <h6>BECOME TUTOR!</h6>
            <hr />
          </div>
        </div>
        <form class="form" action="">
          <div class="row py-1">
            <div class="col-md-12">
              <input class="form-control w-100" placeholder="Tutor's Full Name"/>
            </div>
          </div>
          <div class="row py-1">
            <div class="col-md-6">
              <input class="form-control w-100" placeholder="Expertise in..."/>
            </div>
            <div class="col-md-6">
              <input class="form-control w-100" placeholder="Experience"/>
            </div>
          </div>
          <div class="row py-1">
            <div class="col-md-6">
              <input class="form-control w-100" placeholder="Qualification"/>
            </div>
            <div class="col-md-6">
              <input class="form-control w-100" placeholder="Details"/>
            </div>
          </div>
          <div class="row py-1">
            <div class="col-md-12">
              <input class="form-control w-100" placeholder="Currently work as..."/>
            </div>
          </div>
          <hr />
          <div class="row py-1">
            <div class="col-md-4">
              <label>Video Assitance:</label>
            </div>
            <div class="col-md-8 d-flex align-items-center justify-content-around">
              <div>
                <input type="radio" id="required" name="videoAssistance" value="required">
                <label for="male" class="mb-0 ml-2">Required</label><br>
              </div>
              <div>
                <input type="radio" id="not" name="videoAssistance" value="not">
                <label for="female" class="mb-0 ml-2">Not</label><br>
              </div>
            </div>
          </div>
          <div class="row py-1">
            <div class="col-md-4">
              <label>Material/ Other Assistance:</label>
            </div>
            <div class="col-md-8 d-flex align-items-center justify-content-around">
              <div>
                <input type="radio" id="required" name="materialAssistance" value="required">
                <label for="male" class="mb-0 ml-2">Required</label><br>
              </div>
              <div>
                <input type="radio" id="not" name="materialAssistance" value="not">
                <label for="female" class="mb-0 ml-2">Not</label><br>
              </div>
            </div>
          </div>
          <hr />
          <div class="row pt-1 justify-content-between">
            <div class="col-md-5 text-left">
              <button class="btn btn-logreg w-75" type="submit">Sign Up</button>
              <div class="pt-2">
                By Signing up, you agree to our
                <a href="">Terms & Condition</a>
              </div>
            </div>
            <div class="col-md-7 text-left">
              <div><strong>Or Sign up using:</strong></div>
              <div class="row pt-2">
                <div class="col-md-3">
                  <div class="section-content p-2 my-2">
                    <img src="images/Logins/icons/google.png" alt="" class="img-fluid" style="max-width: 23px;">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="section-content p-2 my-2">
                    <img src="images/Logins/icons/facebook.png" alt="" class="img-fluid" style="max-width: 23px;">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="section-content p-2 my-2">
                    <img src="images/Logins/icons/github.png" alt="" class="img-fluid" style="max-width: 23px;">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="section-content p-2 my-2">
                    <img src="images/Logins/icons/linkedin.png" alt="" class="img-fluid" style="max-width: 23px;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 pr-0">
        <div class="tutor-bg-image" style="background-image: url(../images/Logins/pic1.jpg);"></div>
      </div>
      <div class="col-md-6 pl-0">
        <div class="tutor-bg-image" style="background-image: url(../images/Logins/pic2.jpg);"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BecomeTutor'
}
</script>
