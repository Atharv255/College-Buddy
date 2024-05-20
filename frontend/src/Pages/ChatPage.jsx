import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/miscellaneous/MyChats";
import ChatBox from "../components/miscellaneous/ChatBox";
import { useState } from "react";
import { ChatState } from "../components/context/ChatProvider";
import { Box } from "@chakra-ui/react";
import LinkSlider from "./LinkSlider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  const links = [
    "https://github.com/Atharv255/College-Buddy",
    "https://socket.io/docs/v4/",
    "https://chat.openai.com/",
    "https://www.mongodb.com/",
    "https://expressjs.com/",
    "https://react.dev/",
    "https://www.youtube.com/playlist?list=PLwGdqUZWnOp2Z3eFOgtOGvOWIk4e8Bsr_",
    "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
    "https://www.geeksforgeeks.org/blockchain/",
    "https://www.javatpoint.com/blockchain-tutorial",
    "https://www.javatpoint.com/dbms-tutorial",
    "https://www.javatpoint.com/sql-tutorial",
    "https://www.javatpoint.com/mongodb-tutorial",
    "https://www.javatpoint.com/sql-server-tutorial",
    "https://www.javatpoint.com/c-sharp-tutorial",
    "https://www.javatpoint.com/angularjs-tutorial",
    "https://www.javatpoint.com/jquery-tutorial",
    "https://www.w3schools.com/sql/",
    "https://prepinsta.com/tcs-nqt/placement-papers/coding-questions/",
    "https://www.indiabix.com/aptitude/questions-and-answers/",
  ];
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        <LinkSlider links={links} speed={2000} />
        {/* <div className="App"> */}
        {/* <h1>StudySlider</h1> */}
        {/* </div> */}
      </Box>
    </div>
  );
};

export default Chatpage;
