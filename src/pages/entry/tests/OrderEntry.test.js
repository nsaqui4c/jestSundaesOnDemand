import { expect, test } from "@jest/globals";
import { screen,render, waitFor } from "@testing-library/react";
import {server} from '../../../mock/server'
import {rest} from 'msw'

import OrderEntry from '../OrderEntry'


describe('Negative test case for mock service worker',()=>{
   
    test('testing for scoop',async()=>{
        server.resetHandlers(
            rest.get('http://localhost:5000/scoops',(req,res,ctx)=>res(ctx.status(404)))
        ,
        rest.get('http://localhost:5000/toppings',(req,res,ctx)=>res(ctx.status(404)))
        )

        render(<OrderEntry/>)
        await waitFor(async ()=>{
            const alert=  await screen.findAllByRole('alert'
           // ,{name:/unexpected error/i}   NEED TO CHECK WHY NAME IS NOT WORKING
            )    
            expect(alert).toHaveLength(2)
        })
        
    })

   
})