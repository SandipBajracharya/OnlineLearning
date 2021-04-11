
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import MainPage from '../Pages/MainPage.vue';
  import BecomeTutor from '../Pages/BecomeTutor.vue';
  import StudentLogin from '../Pages/StudentLogin.vue';

  Vue.use(VueRouter);

  const routes = [
    { 
      path: '/',
      name: 'index',
      title: 'MainPage', 
      component: MainPage
    },
    { 
      path: '/become-tutor',
      name: 'become-tutor',
      title: 'BecomeTutor', 
      component: BecomeTutor
    },
    { 
      path: '/student-login',
      name: 'student-login',
      title: 'StudentLogin', 
      component: StudentLogin
    }
  ];

  export default new VueRouter({
    routes,
    mode: 'history'
  })
