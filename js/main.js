'use strict';

{
  const tas = document.querySelectorAll('img');

  function callback(entries,obs) { 
    console.log(entries);

    entries.forEach(en => {
      
          if (!en.isIntersecting) {
            return;
          }
      
          en.target.classList.add('appear');
          obs.unobserve(en.target);
    });
  }

  const options = {
    threshold: 0.2,
    
  }

  const ss = new IntersectionObserver(callback,options);

  tas.forEach(ta => {
    ss.observe(ta);
  })



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