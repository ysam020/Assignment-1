I have used Google Material components for the UI. Also, I have used react-axios npm to fetch data.

Initially, a loader state is set false. When a user clicks on the Get Users button, the function getUsers() is called, where following code is executed:

1. the loader state is set to true
2. data is fetched from API and stored in users array
3. the loader state is set to false

In the UI, upon clicking on Get Users button, while the loader state is true, loader will be displayed. When loader state is set false, the data fetched from API is mapped in a grid container.

It took me 1 hour for the assignment.
