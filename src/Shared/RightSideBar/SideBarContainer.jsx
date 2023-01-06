import {
  Drawer,
  DrawerBody,
  DrawerContent,

  DrawerOverlay,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import SideNavbar from "./RightSideBar";

export default function SideBarContainer() {
  const [isMobile] = useMediaQuery("(max-width: 1196px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {isMobile ? (
        <>
          <button type="button"  onClick={onOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                <SideNavbar />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <SideNavbar />
      )}
    </div>
  );
}
