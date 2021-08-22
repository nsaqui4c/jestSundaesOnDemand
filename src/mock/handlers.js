import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5000/scoops", (req, res, ctx) => res(ctx.json([
        {name:'chocolate', imagePath:'/images/choco.png'},
        {name:'vanilla', imagePath:'/images/vanilla.png'}

         ])
     )
  ),
];
