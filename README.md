All knowledge based on the udemy courses:

CHEATSHEET:
		https://testing-library.com/docs/react-testing-library/cheatsheet
		
		https://github.com/testing-library
		
		https://github.com/testing-library/jest-dom
		https://react-bootstrap.github.io/getting-started/introduction		
		https://github.com/testing-library/user-event
		npm install @testing-library/user-event @testing-library/dom

runnig npm test start the test in watch mode

{render, screen} from @testing-react-library
    Render:
        create virtual dom for argument JSX
        Access virtual dom via screen global

 screen.getByText => get text which are visible to user <p>this text is visible</p>



 React testing library helps in :
    rendering component into virtual DOM
    searching virtual DOM - getByText
    interacting with virtula DOM - clicking on element or entering text

Jest: 
    React testing library needs test runner
    can use mocha jasmine etc
    jest is recommended by test library
	
JEST DOM:
	comes with create-react-app
	src/setuoTests.js imports it before each test and makes matcher available.
	Some DOM based matcher are:
		toBeVisible() or toBeChecked() 


Global test has two parameter:
    description and function
    Any test fail only in case of error thrown
        assertion throws error in case of expectation fail
    
Types of test:    
    Unit test: test one unit of code in isolation
    Integration test: How multiple units work together
    Functional test:  Testing a particular function of software
    Acceptance/End 2 end: use actual browser and server(cypress/selenium)
	
Unit Testing:
	Isolated: mock dependencies, test internal
		Very easy to pinpoint failure

Functional testing:
	Include all relevant units.
	Close to user interact with app
	more difficult to pinpoint or debug the code
	

Behaviour driven development:
	BDD
	

 
	
What does react testing library does?
	create virtual DOM for testing
	Add utilities for interacting with DOM
	
Accessibility and finding  elements:
	Testing library recommends finding elements by accessibility handles:
	https://testing-library.com/docs/queries/about
	
	NOTE: use getByTestID in last, as it is not used by browser to get elements
	
Queries Accessible to Everyone Queries that reflect the experience of visual/mouse users as well as those that use assistive technology.
getByRole: This can be used to query every element that is exposed in the accessibility tree. With the name option you can filter the returned elements by their accessible name. This should be your top preference for just about everything. There's not much you can't get with this (if you can't, it's possible your UI is inaccessible). Most often, this will be used with the name option like so: getByRole('button', {name: /submit/i}). Check the list of roles.
getByLabelText: This method is really good for form fields. When navigating through a website form, users find elements using label text. This method emulates that behavior, so it should be your top preference.

getByPlaceholderText: A placeholder is not a substitute for a label. But if that's all you have, then it's better than alternatives.

getByText: Outside of forms, text content is the main way users find elements. This method can be used to find non-interactive elements (like divs, spans, and paragraphs).

getByDisplayValue: The current value of a form element can be useful when navigating a page with filled-in values.


Semantic Queries HTML5 and ARIA compliant selectors. Note that the user experience of interacting with these attributes varies greatly across browsers and assistive technology.
getByAltText: If your element is one which supports alt text (img, area, and input), then you can use this to find that element.
getByTitle: The title attribute is not consistently read by screenreaders, and is not visible by default for sighted users


Test IDs
getByTestId: The user cannot see (or hear) these, so this is only recommended for cases where you can't match by role or text or it doesn't make sense (e.g. the text is dynamic).


 
 fireEvent:
	import {render,screen,fireEvent} from '@testing-library/reat';
	fireEvent.click(element)
	

aria-property='some value'
	now we can get this element by using:
	scree.getByRole('button',{property:'some value'}
		
		
Label and htmlFor
Using label we can combine one element to another
	<input
		type="checkbox"
		id="some-id"
	/>
	<label htmlFor="some-id">some-name</label>
	
	now we can get the input element by using:
	screen.getByRole('checkbox',{name:'some-name'})

ESLint:
	populat linter for javascript
	Linter: 

		anakyze static text and marks syntax that breaks rule

		Static:

			Code as written and, not what happens when code is run
            
	Plug-ins extend ESLint
	to enforce best practices 
	
	************************
	npm install eslint-plugin-testing-library
	npm install eslint-plugin-jest-dom
	************************
	

Adding bootstrap to project:

	npm install react-bootstrap bootstrap
	
Add below script in index.html

	<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

	<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  	crossorigin></script>

	<script
  	src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  	crossorigin></script>
	
	<body style="background-color: teal; color:ivory" >

Add CSS index.js

	import 'bootstrap/dist/css/bootstrap.min.css';
	
	
	
	
UserEvent:
	UserEvent is better than fireEvent.
	
screen Query Method:
		get: expect element to be in DOM
		query: expect element to be not in DOM
		find: expect element to appear async.In case we want to element to appear before firing the assertion.
		
		* we can Add All after selector to get all match (getAllBy, findAllBy etc)
		
Query Type:
		Role: most prefered
		AltText: images
		Text: non interactive display elements
		
		Form Elements: 
			PlaceholderText
			LabelText
			DisplayText
			
Async#
The dom-testing-library Async API is re-exported from React Testing Library.

	waitFor (Promise) retry the function within until it stops throwing or times out
	
	waitForElementToBeRemoved (Promise) retry the function until it no longer returns a DOM node
	
		//Popup goes after unHover
        userEvent.unhover(termAndCondition)
		
        await waitForElementToBeRemoved(()=> screen.queryByText(/no icecream will actuall/i))
		
		
Mock Service:
	npm install msw
		Create handlers
		
		
			create src/mocks/handlers.js
			import {rest} from 'msw'
			export const handlers=[
				rest.get('url',(req,res.ctx)=>{
				return res(
					ctx.json([
						{kay:value},
						{key:value}
					])
					)
				})
			]
			
	Create test server
	
			create src/mock/server.js
			import {setupSever} from 'msw/node'
			import {handlers} from './handlers'
			export const server = setupSever(...handlers)
			
			
	Make sure test server listen during all test
	
		inside setupTest.js	
			
			import {server} from './mock/server.js'
			beforeAll(()=>server.listen())
			afterAll(()=>server.close())
			afterEach(()=>server.resetHanlders())
			
			
Testing negative test:
```
describe('Negative test case for mock service worker',()=>{
   
    test('testing for scoop',async()=>{
        server.resetHandlers(
            rest.get('http://localhost:5000/scoops',(req,res,ctx)=>res(ctx.status(404)))
        ,
        rest.get('http://localhost:5000/toppings',(req,res,ctx)=>res(ctx.status(404)))
        )

        render(<OrderEntry/>)
        const alert=  await screen.findAllByRole('alert',{name:/unexpected error/i})

        expect(alert).toHaveLength(2)
    })

   
})
```

The above code will not work because we are expecting 2 alert with findAllBy, but as soon as one come back findAllBy will return the result, leaving the other.

waitFor:

```
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
```


Test.only:
	Run only this test and skip other test in the file
	
test.skip:
	skip this test and run all other test in file
		
	
    
