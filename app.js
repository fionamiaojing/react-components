// To Do
//To Do List
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['eat Apple', 'sleep good', 'go to Gym']}/>
  </div>
);

// var onListItemClick = (event) => {
//   console.log(event.target+ 'is clicked!')
// };
var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo}/>
    )}
  </ul>
);

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {textDecoration: this.state.done? 'line-through':'none'};

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

// <div>
//   <h2>My Grocery List</h2>
//   <ItemList items={['apple', 'banana', 'peach', 'stawberry', 'mango', 'orange', 'water melon', 'melon']} />
// </div>

//Grocery List
var GroceryList = () => {
  var groceryItems = ['apple', 'banana', 'peach', 'stawberry', 'mango', 'orange', 'water melon', 'melon']

  return (
    <div>
      <h2>My Grocery List</h2>
      <ItemList items={groceryItems} />
    </div>
  )
}


var ItemList = (props) => (
  <ul>
    {props.items.map(item => <ItemListItem thing={item}/>)}
  </ul>
);

class ItemListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seleted: false
    };
  }

  mouseHoverListItem() {
    this.setState({
      seleted: !this.state.seleted
    })
  }

  mouseOverListItem() {
    this.setState({
      seleted: !this.state.seleted
    })
  }

  mouseLeaveListItem() {
    this.setState({
      seleted: !this.state.seleted
    })
  }

  render() {
    var style = {fontWeight: this.state.seleted? 'bold':'normal'}

    return (
      <li
      style={style}
      onMouseOver={this.mouseOverListItem.bind(this)}
      onMouseLeave={this.mouseLeaveListItem.bind(this)}
      >{this.props.thing}</li>
    )
  }
}


//ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<GroceryList />, document.getElementById("app"));
