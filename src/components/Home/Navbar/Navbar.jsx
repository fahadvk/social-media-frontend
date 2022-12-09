import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  useColorMode,
  IconButton,
  AvatarBadge,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { FaSun, FaMoon, FaUser, FaBell } from "react-icons/fa";
import { GoDiffAdded } from "react-icons/go";

import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const toast = useToast();
  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: err?.message,
          status: "error",
          duration: 6900,
          isClosable: true,
        });
      });
  };
  return (
    <Flex
      backgroundColor=""
      justifyContent="flex-end"
      alignItems="center"
      p={isMobile ? 2 : 3}
      position="sticky"
      top={0}
      gap={5}
      zIndex="100"
    >
      <Flex marginEnd="auto">
        <Heading size={isMobile ? "sm" : "xl"} fontFamily="Sansita Swashed">
          Socisy
        </Heading>
      </Flex>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch("");
          navigate("/search/" + search);
        }}
      >
        <Tooltip label="Search " openDelay={400}>
          <InputGroup mx={isMobile ? 2 : 4} width={isMobile ? "20vw" : "20vw"}>
            <InputLeftElement
              pointerEvents="none"
              children={<ImSearch color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search  ..."
              variant="filled"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
          </InputGroup>
        </Tooltip>
      </form>

      <Popover>
        <PopoverTrigger>
          <IconButton icon={<FaBell />} aria-label="Notification" />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Notifications!</PopoverHeader>
          <PopoverBody>You have no new notifications !</PopoverBody>
        </PopoverContent>
      </Popover>
      <Tooltip label="Create something" openDelay={400}>
        <Button
          //   leftIcon={<IoMdCreate />}
          leftIcon={<GoDiffAdded/>}
          className="col"
          backgroundColor='#186FDC'
          variant="solid"
          borderRadius={15}
          padding={5}
         
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </Button>
      </Tooltip>
      <Menu>
        <MenuButton>
          <Tooltip
            // label={auth?.currentUser?.displayName}
            openDelay={400}
          >
            <Avatar
              cursor="pointer"
              //   src={auth?.currentUser?.photoURL as}
            />
          </Tooltip>
        </MenuButton>
        <MenuList>
          <MenuItem gap="0.7rem" onClick={() => {}}>
            <FaUserCircle size="1.4rem" />
            Your profile
          </MenuItem>

          <MenuItem
            gap="0.7rem"
            //    onClick={logout}
          >
            <IoLogOut size="1.4rem" />
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Navbar;
