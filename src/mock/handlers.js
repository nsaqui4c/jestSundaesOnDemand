import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5000/scoops", (req, res, ctx) => res(ctx.json([
        {name:'chocolate', imagePath:'/images/choco.png'},
        {name:'vanilla', imagePath:'/images/vanilla.png'}

         ])
     )
  ),

  rest.get('http://localhost:5000/toppings',(req,res,ctx)=>
  res(ctx.json([
      {name:'cherrt',imagePath:'/images/cherrt'},
      {name:'cherry',imagePath:'/images/cherry'},
      {name:'cherrz',imagePath:'/images/cherrz'},
  ]))
  )
];
