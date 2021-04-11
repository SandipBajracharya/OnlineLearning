<template>
  <div class="tutor-container">
    <div class="overlay">
      <div class="card login-form-container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h5>BECOME TUTOR!</h5>
            <i>Fill and submit below form to Become a Tutor.</i>
            <hr>
          </div>
        </div>
        <form class="" action="">
          <div class="row py-2">
            <div class="col-md-12">
              <label>Tutor's Full Name</label>
              <input class="form-control w-100"/>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-6">
              <label>Expertise in..</label>
              <input class="form-control w-100" />
            </div>
            <div class="col-md-6">
              <label>Experience</label>
              <input class="form-control w-100" />
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-6">
              <label>Qualification</label>
              <select id="qualification" class="form-control" name="qualification">
                <option value="" selected> Select Qualification </option>
                <option value="S.E.E"> S.E.E</option>
                <option value="+2">+2</option>
                <option Value="Bachelors">Bachelors</option>
                <option value="Masters">Masters</option>
                <option value="Mphil">M.Phil</option>
                <option value="phd">P.H.D</option>
              </select>
            </div>
            <div class="col-md-6">
              <label>Qualification Detail</label>
              <input class="form-control w-100" />
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-12">
              <label>Currently working as..</label>
              <input class="form-control w-100"/>
            </div>
          </div>
          <hr />
          <div class="row py-2">
            <div class="col-md-4">
              <label>Video Assitance:</label>
            </div>
            <div class="col-md-8 d-flex align-items-center justify-content-around">
              <div>
                <input type="radio" id="required" name="videoAssistance" value="required">
                <label for="required" class="mb-0 ml-2">Required</label><br>
              </div>
              <div>
                <input type="radio" id="not" name="videoAssistance" value="not">
                <label for="not" class="mb-0 ml-2">Not</label><br>
              </div>
              <div v-tooltip="'Free of Cost'">
                <i class="fas fa-info-circle text-info" style="font-size: 16px; cursor: pointer;"></i>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-md-4">
              <label>Material/ Other Assistance:</label>
            </div>
            <div class="col-md-8 d-flex align-items-center justify-content-around">
              <div>
                <input type="radio" id="required" name="materialAssistance" value="required">
                <label for="required" class="mb-0 ml-2">Required</label><br>
              </div>
              <div>
                <input type="radio" id="not" name="materialAssistance" value="not">
                <label for="not" class="mb-0 ml-2">Not</label><br>
              </div>
              <div>
                <div v-tooltip="'Free of Cost'">
                  <i class="fas fa-info-circle text-info" style="font-size: 16px; cursor: pointer;"></i>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="row py-2 justify-content-between">
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
                    <img src="images/Logins/icons/google.png" alt="" class="img-fluid" style="max-height: 23px;">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="section-content p-2 my-2">
                    <img src="images/Logins/icons/facebook.png" alt="" class="img-fluid" style="max-height: 23px;">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="section-content p-2 my-2">
                    <img src="images/Logins/icons/github.png" alt="" class="img-fluid" style="max-height: 23px;">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="section-content p-2 my-2">
                    <img src="images/Logins/icons/linkedin.png" alt="" class="img-fluid" style="max-height: 23px;">
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
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
export default {
  name: 'BecomeTutor'
}
</script>
