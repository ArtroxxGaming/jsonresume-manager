require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('resume-form', require('./components/resumes/ResumeForm.vue').default);
Vue.component('FieldResumeImage', require('./components/resumes/vfg/FieldResumeImage.vue').default);

const app = new Vue({
    el: '#app',
});
