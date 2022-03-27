export default function Bonus() {
  return (
    <div>
        <div className='my-5'>
          <h5>How React Works</h5>
          <div>
            React is a declaretive code. component is the main thing in react. A React component can be composed of React components and ReactElement. Following the React way, you divide your app into several components according to function and responsibility.
          </div>
        </div>
        <div className='my-5'>
          <h5>Props VS State</h5>
          <div>
            Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. The state is an updatable structure that is used to contain data or information about the component and can change over time. it is a local data storage. The change in state can happen as a response to user action or system event. A state must be kept as simple as possible.
          </div>
        </div>
      </div>
  )
}