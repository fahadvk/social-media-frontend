/* eslint-disable jsx-a11y/label-has-associated-control */
import { useToast } from "@chakra-ui/react";
import {
  Alert,
  Box,
  Button,
  Card,
  Input,
  Modal,
  PasswordInput,
  Textarea,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconAlertCircle } from "@tabler/icons";
import {
  deleteUserAccount,
  fetchUserDetails,
  setNewPassword,
  updateUserInfo,
  verifyPassword,
} from "../../apiRequests/Authapis";

export default function Settings() {
  const [Userinfo, setUserinfo] = useState();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [verifyOpen, setVerifyOpen] = useState({ state: false, type: "" });
  const toast = useToast();
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.authReducer);
  const passwordRef = useRef("");
  const confirmRef = useRef("");
  async function fetchData() {
    const res = await fetchUserDetails(userId);
    setUserinfo(res.data);
  }
  const checkPassword = async () => {
    const res = await verifyPassword(passwordRef.current?.value);
    if (res.data === "OK") return true;
    setVerifyOpen(false);
    toast({
      title: "incorrect password",
      isClosable: true,
      status: "error",
      duration: 3000,
    });
    return false;
  };
  const DeleteAccount = async () => {
    setVerifyOpen({ state: true, type: "deleteAccount" });
    const res = await checkPassword();
    if (res) {
      const response = await deleteUserAccount();
      if (response.data) {
        toast({ status: "success", title: "deleted successfully" });
        const cookie = new Cookies();
        cookie.remove("token");
        navigate("/login");
      }
    }
  };
  const ChangePassword = async () => {
    const res = await checkPassword();
    if (res) {
      setVerifyOpen({ ...verifyOpen, state: false });
      setConfirmOpen(true);
    }
  };
  const setnewPassword = async () => {
    if (confirmRef.current.value === passwordRef.current.value) {
      const res = await setNewPassword(confirmRef.current.value);
      if (res.data) {
        setConfirmOpen(false);
        toast({
          title: "passwordChanged",
          isClosable: true,
          status: "success",
          duration: 3000,
        });
      }
    } else {
      toast({
        title: "please enter the same password again",
        isClosable: true,
        status: "error",
        duration: 3000,
      });
    }
  };
  const validationSchema = Yup.object({
    mobile: Yup.number().min(10, "Must be  minimum 10 characters "),
    email: Yup.string().email("please provide a  valid email address"),
  });
  const initialValues = {
    name: Userinfo?.name,
    email: Userinfo?.email,
    Dob: Userinfo?.DOB,
    about: Userinfo?.about,
    mobile: Userinfo?.mobile,
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async () => {
      setVerifyOpen({ type: "changeInfo", state: true });
      const body = formik.values;
      body.mobile = parseInt(body.mobile, 10);
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(body.mobile)) body.mobile = undefined;
      Object.keys(body).forEach(
        (key) => body[key] === undefined && delete body[key]
      );
      setUserinfo(body);
    },
  });
  const ChangeInfo = async () => {
    const res = await checkPassword();
    if (res) {
      const response = await updateUserInfo(Userinfo);
      if (response.data) {
        setVerifyOpen(false);
        toast({
          title: "success",
          description: "updated successfully",
          status: "success",
          isClosable: true,
        });
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Card p="md" className="">
      <h3 className=" mt-4 text-center w-2/3 font-semibold text-lg ">
        Edit Profile Details
      </h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex ">
          <Box className="  flex-col  w-2/3">
            <label htmlFor="name">Name</label>
            <Input
              placeholder="Name"
              id="name"
              defaultValue={Userinfo?.name}
              value={formik.values?.name}
              name="name"
              type="text"
              onChange={formik.handleChange}
            />

            <label htmlFor="about">About </label>
            <Textarea
              name="about"
              defaultValue={Userinfo?.about}
              value={formik.values.about}
              onChange={formik.handleChange}
            />
          </Box>
        </div>
        <label htmlFor="email"> Email </label>
        <Input
          name="email"
          defaultValue={Userinfo?.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          className="w-2/3"
          type="text"
        />
        <label className="text-red-500">{formik.errors.email}</label>
        <DatePicker
          onChange={(e) => {
            formik.values.Dob = e;
          }}
          value={formik.values.Dob}
          className="w-2/3"
          name="Dob"
          defaultValue={new Date(Userinfo?.Dob).toUTCString().slice(0, 16)}
          placeholder={new Date(Userinfo?.Dob).toUTCString().slice(0, 16)}
          label="Date Of Birth"
        />

        <label htmlFor="mobile">Mobile</label>
        <Input
          name="mobile"
          defaultValue={Userinfo?.mobile}
          value={formik.values.mobile}
          className="w-2/3"
          type="tel"
          autoComplete="off"
          onChange={formik.handleChange}
        />
        <label className="text-red-500">{formik.errors.mobile}</label>

        <p>
          {formik.errors.mobile &&
            formik.touched.mobile &&
            formik.errors.mobile}
        </p>
        <Button
          disabled={formik.isSubmitting}
          type="submit"
          className="mt-5 bg-blue"
        >
          Submit
        </Button>
      </form>

      <div className=" mt-5 ">
        <h3 className=" mt-4 text-center w-2/3 font-semibold text-lg ">
          Account & Security
        </h3>

        <button
          className="mt-3"
          type="button"
          onClick={() => {
            setVerifyOpen({ state: true, type: "changePassword" });
          }}
        >
          <h3> Change Your Password</h3>
        </button>
        <br />
        <button
          type="button"
          onClick={() => {
            setVerifyOpen({ state: true, type: "deleteAccount" });
          }}
        >
          <h3 className="mt-3 text-red-500"> Delete Your Account</h3>
        </button>
      </div>
      <Modal
        opened={verifyOpen.state}
        onClose={() => setVerifyOpen({ state: false })}
        title="Please provide Your password"
      >
        {verifyOpen.type === "deleteAccount" && (
          <Alert
            icon={<IconAlertCircle size={16} />}
            title="important notice!"
            color="red"
            radius="md"
            withCloseButton
            variant="filled"
          >
            your account will be deleted, you are no longer able to continue our
            service
          </Alert>
        )}
        <PasswordInput ref={passwordRef} placeholder="enter your password" />
        <Button
          className="bg-blue mt-3"
          onClick={() => {
            if (verifyOpen.type === "changePassword") ChangePassword();
            else if (verifyOpen.type === "deleteAccount") DeleteAccount();
            else if (verifyOpen.type === "changeInfo") ChangeInfo();
          }}
          type="button"
        >
          Submit
        </Button>
      </Modal>
      <Modal
        opened={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Please provide Your password"
      >
        <PasswordInput
          ref={passwordRef}
          placeholder="enter your new password"
        />
        <PasswordInput ref={confirmRef} placeholder="confirm your password" />

        <Button className="bg-blue mt-3" onClick={setnewPassword} type="button">
          Submit
        </Button>
      </Modal>
    </Card>
  );
}
