'use strict';

{
  const ta = document.querySelector('img');

  function callback() { 
    console.log('fired!');
  }

  const options = {
    threshold: [0.2,0.8],
  }

  const ss = new IntersectionObserver(callback,options);

  ss.observe(ta);



  // class Post {
  //   constructor(text){
  //     this.text = text;
  //     this.num  = 0;
  //   };

  //   show(){
  //     console.log(`${this.text} ${this.num} dazo`);
  //   }

  //   like(){
  //     this.num++;
  //     this.show();
  //   }

  //   static sakura(){
  //     console.log('sakura!');
  //   }
  // }

  // class Spon extends Post {
  //   constructor(text,spon){
  //     super(text);
  //     this.spon = spon;
  //   };

  //   show(){
  //     super.show();
  //     console.log(`${this.spon} kanana`);
  //   }
  // }

  // const post = [
  //   new Post('javascript'),
  //   new Post('ruby on rails'),
  //   new Spon('dotinstall','soccer'),
  // ]

  // post[0].like();
  // Post.sakura();
  // post[2].show();
}