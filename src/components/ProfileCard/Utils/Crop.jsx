import { useState } from "react";
import Cropper from "react-easy-crop";
import ReactCrop from "react-image-crop";
// import { Modal } from "@mantine/core";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import getCroppedImg from "./GetImg";
import axios from "axios";

const CROP_AREA_ASPECT = 3 / 2;

// function Output({ croppedArea, src }) {
//   const scale = 100 / croppedArea.width;
//   const transform = {
//     x: `${-croppedArea.x * scale}%`,
//     y: `${-croppedArea.y * scale}%`,
//     scale,
//     width: "calc(100% + 0.5px)",
//     height: "auto",
//   };

//   const imageStyle = {
//     transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
//     width: transform.width,
//     height: transform.height,
//   };

//   return (
//     <div
//       className="output"
//       style={{ paddingBottom: `${100 / CROP_AREA_ASPECT}%` }}
//     >
//       <img src={src} alt="" style={imageStyle} />
//     </div>
//   );
// }
export default function Crop({ src }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState();
  const [croppedArea, setCroppedArea] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const submitImage = async () => {
    const croppedImage = await getCroppedImg(src, croppedArea);
    setImage(croppedImage);
    console.log(croppedImage);
    await axios.post("https://api.cloudinary.com/v1_1/dmfse4ydr/image/upload", {
      upload_preset: "ftvgzdez",
      file: croppedImage.url.split("blob:")[1],
    });
  };
  const onCropComplete = async (_, croppedAreaPixels) => {
    const croppedImage = await getCroppedImg(src, croppedAreaPixels);
  };

  return (
    <Modal isOpen isCentered overlayBlur={3}>
      <ModalOverlay>
        <ModalBody>
          <Cropper
            image={src}
            aspect={CROP_AREA_ASPECT}
            crop={crop}
            zoom={zoom}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            onCropAreaChange={(croppedArea) => {
              setCroppedArea(croppedArea);
            }}
          />

          <div className="viewer">
            <div>
              {/* {croppedArea && <Output croppedArea={croppedArea} src={src} />} */}
            </div>
          </div>
          <Button colorScheme="blue" mr={3} onClick={submitImage}>
            Crop
          </Button>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalOverlay>
    </Modal>
  );
}
