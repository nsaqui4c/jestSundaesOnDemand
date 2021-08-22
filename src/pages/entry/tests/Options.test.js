import { test } from "@jest/globals";
import { screen,render, findAllByRole } from "@testing-library/react";

import Options from '../Optioins'


describe('Testing the server response',()=>{
    test('scoop option should be populated',async()=>{
        render(<Options optionType='scoops'/>)
        const scoopImages = await screen.findAllByRole('img', {name : /scoop$/i})

        //confirm number of images
        expect(scoopImages).toHaveLength(2)

        //confirm name of images
        const altname = scoopImages.map(elem=>elem.alt)
        expect(altname).toEqual(['chocolate scoop','vanilla scoop'])
        

    })

    test('Topping option should be populated',async()=>{

        render(<Options optionType='toppings'/>)
        const toppingImages= await screen.findAllByRole('img',{name:/topping$/i})
        expect(toppingImages).toHaveLength(3)
        const toppingNames=toppingImages.map(elem=>elem.alt)
        expect(toppingNames).toEqual(['cherrt topping','cherry topping','cherrz topping'])
    })
})