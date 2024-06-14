import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import "../CSS/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      navigate("/chat");
    }
  }, [navigate]);
  const AnimatedBox = motion(Box);
  const AnimatedText = motion(Text);

  return (
    <Container className="HomePage" maxW="xl" centerContent>
      <Box>
        <AnimatedBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={3}
          w="100%"
          m="40px 0px 15px 0px"
        >
          <AnimatedText
            fontSize="4xl"
            fontFamily="Work sans"
            fontWeight="semibold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            Campus Buddy
          </AnimatedText>
        </AnimatedBox>
      </Box>

      <Box
        w="100%"
        p={4}
        borderRadius="lg"
        color="black"
        borderWidth="3px"
        borderColor="grey"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">SIGN IN</Tab>
            <Tab width="50%">SIGN UP</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignIn />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
