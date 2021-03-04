import React, { useState } from "react";
import { Dropdown, Flex, Popover } from "@primer/components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  position: absolute;
  margin-top: 0.5rem;
`;

function DropdownMenu({ children }) {
  const [isOpen, setOpen] = useState(false);
  const TopLevelItem = children[0];
  const SubMenu = children[1];

  return (
    <>
      <div onMouseEnter={() => { setOpen(true); }}>
        <div>
            {TopLevelItem}
        </div>
        <div onMouseLeave={() => { setOpen(false); }}>
          <MenuContainer mt={2}>
            <Popover relative open={isOpen} caret={"top-left"}>
              <Popover.Content p={0}>
                {SubMenu}
              </Popover.Content>
            </Popover>
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
