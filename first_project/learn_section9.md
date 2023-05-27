## React Fragments
### wrapper component no.101 
--> when you have adjacent components
--> you must wrap them in a root element
--> or use array to render those components
--> or use React.Fragment or use empty tags <> </>
--> the best solution is to use React.fragment or Fragment if destructured

### Portals (important) no.104

### Ref no.5 vs (useState)
--> if you just want to read something without updating it use Ref
--> if you want to read and update use useState
--> try not use Ref to manipulate the DOM

### controlled vs uncontrolled components (important)
--> if we access value with a ref is called uncontrolled component
--> because there value is not controlled by react