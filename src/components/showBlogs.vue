<template>
  <div v-width:column="'narrow'" id ="show-blogs">

    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blog"/>
    <div v-rainbow="" v-for="blog in filteredBlog" class="single-blog">
      <h2>{{blog.title|to-uppercase}}</h2>
      <article>{{blog.body|snippet}}</article>
    </div>
  </div>
</template>
<script>




export default {

  data () {
    return {
      blogs:[],
      search:''

    }
  },
  methods:{

    },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      console.log(data);
      this.blogs= data.body.slice(0,10);
      })
  },
  computed:{
    filteredBlog:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      });
    }
  },
  filters:{
    'to-uppercase':function(value){   //initially registered globally in main.js
      return value.toUpperCase();
    },
    //toUppercase(value){
    //  return value.toUpperCase();  //same it works
    //}
  },
  directives:{                               //it is now registered locally
    'rainbow':{
      bind(el,binding,vnode){
      el.style.color="#"+Math.random().toString().slice(2,8);
      }
    }
  }

}

</script>

<style >
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
#input{
    width:900px;
}

</style>
