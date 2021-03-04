import React, { useState } from "react";
import { Dropdown, Flex, Popover } from "@primer/components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import './DropdownMenu.css'

const MenuContainer = styled.div`
  background: white;
  min-width: 10rem;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
`;

function DropdownMenu({ children }) {
  const [isOpen, setOpen] = useState(false);
  const TopLevelItem = children[0];
  const SubMenu = children[1];

  return (
    <>
      <div className={'dropdown-menu'}>
        <div>
            {TopLevelItem}
        </div>
        <div className={'dropdown-menu__submenu'}>
          <MenuContainer pt={2}>
            <div>
              {SubMenu}
            </div>
          </MenuContainer>
        </div>
      </div>
    </>
  );
}

function DropdownMenuSummary({ children }) {
  return (<div>
    {children}
  </div>);
}

function DropdownMenuContent({ children }) {
  return (<>
    <Flex flexDirection={"column"}>
      {children}
    </Flex>
  </>);
}

function DropdownMenuItem({ to, children }) {
  return (
    <Dropdown.Item>
      <Link to={to}>
        {children}
      </Link>
    </Dropdown.Item>
  );
}

DropdownMenu.Summary = DropdownMenuSummary;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;

export default DropdownMenu;
