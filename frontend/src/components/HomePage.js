import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
        <Router>
          <Switch>
          
            <Route exact path="/">
              <div>
                <p>This is home.</p>
              </div>
            </Route>
            <Route path="/join" component={RoomJoinPage} />
            <Route path="/create" component={CreateRoomPage} />
            <Route path="/room/:roomCode" component={room} />
            
          </Switch>
        </Router>
     
    );
  }
}
