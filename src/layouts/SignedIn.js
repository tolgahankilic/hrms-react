import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          src="http://marcopoloturkey.com/wp-content/uploads/2018/11/adminavatar.png"
        />
        <Dropdown pointing="top right" text="Tolgahan Kılıç">
          <Dropdown.Menu>
            <Dropdown.Item text="Infos" icon="info" />
            <Dropdown.Item
              onClick={props.signOut}
              text="Log out"
              icon="sign-out"
            />
            <Dropdown.Item text="Contact Us" icon="mail" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
