import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color="#"+Math.random().toString().slice(2,8);
//   }
// });          it is registered now as locally
Vue.directive('width',{
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth='1200px';
    }else if(binding.value=='narrow'){
      el.style.maxWidth='550px';
    }
    if(binding.arg=='column'){
      el.style.background="#ddd";
      el.style.padding='20px';
    }
  }
});
// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase();
// });          ==>now registered locally
Vue.filter('snippet',function(value){
  return value.slice(0,50)+"...";
});

new Vue({
  el: '#app',
  render: h => h(App)
})
