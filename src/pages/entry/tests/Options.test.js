import { test } from "@jest/globals";
import { screen,render } from "@testing-library/react";

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
})