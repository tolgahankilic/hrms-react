import React, { useState } from "react";
import { useHistory } from "react-router";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { Container, Menu, Icon } from "semantic-ui-react";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item as="a">
            Home
          </Menu.Item>
          <Menu.Item as="a">
            Find a job
          </Menu.Item>
          <Menu.Item as="a">
            Publish Advert
          </Menu.Item>
          <Menu.Item as="a">
            Admin
          </Menu.Item>
          <Menu.Item position="right">
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
