// object literals
// note: objects are reference types, meaning we copy a pointer to the object in the heap so a change to one will change all

let user = {
  name: "crystal",
  age: 30,
  blogs: [
    { title: "why mac and cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 50 },
  ],
  login: function () {
    console.log("logging in user...done!");
  },
  logBlogs() {
    // shorthand version of regular function
    console.log(`${this.name} has written these blogs: `);
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
  //   logBlogs: function () {
  //     // javascript does not change the value of this if this were an arrow function. Must use function
  //     console.log(`${this.name} has written these blogs: `);
  //     this.blogs.forEach((blog) => {
  //       console.log(blog);
  //     });
  //   },
};

console.log(user);

user.login();

user.age = 35;
console.log(user);

user.logBlogs();
