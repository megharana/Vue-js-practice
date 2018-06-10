<template>

  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form>
      <label>Blog title:</label>
      <input type="text" v-model="blog.title" required/>
      <label>Blog content:</label>
      <textarea v-model.lazy="blog.content"></textarea>


    <select v-model="blog.author">
      <option v-for="author in authors">{{author}}</option>

    </select>
    <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <p>Thhe Blog is succefully submitted</p>
    </div>
    <div id="preview">
      <h2>Preview Blog</h2>
      <p>Blog title : {{blog.title}}</p>
      <p>Blog content :{{blog.content}}</p>
      <p>Author:{{blog.author}}</p>
    </div>
    <div id="checkboxes">
      <label>Ninjas</label>
      <input type="checkbox" value="Ninja" v-model="blog.categories"/>
      <label>Wizard</label>
      <input type="checkbox" value="Wizard" v-model="blog.categories"/>
      <label>Mario</label>
      <input type="checkbox" value="Mario" v-model="blog.categories"/>
      <label>Cheese</label>
      <input type="checkbox" value="cheese" v-model="blog.categories"/>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>

      </ul>
      <p
    </div>




  </div>
</template>
<script>

export default {

  data () {
    return {
      blog:{
        title:"",
        content:"",
        categories:[],
        author:""
      },
      authors:['Megha Rana','Priyanka Nittrawatti', 'Sandhya PS','Abhishek Suar'],
      submitted: false,


    }
  },
  methods:{
    post:function(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        title:this.blog.title,
        body:this.blog.content,
        userID:1
      }).then(function(data){
          console.log(data);
          this.submitted=true;


      });

    }

    }
  }

</script>

<style >
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display:inline-block;
    margin-right:10px;
}
#checkboxes label{
    display:inline-block;

}


</style>
