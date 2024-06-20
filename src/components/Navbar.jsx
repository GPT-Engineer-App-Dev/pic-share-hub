import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" p={4}>
      <Flex justify="space-around">
        <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none" }}>Home</Link>
        <Link as={NavLink} to="/profile" color="white" _hover={{ textDecoration: "none" }}>Profile</Link>
        <Link as={NavLink} to="/upload" color="white" _hover={{ textDecoration: "none" }}>Upload</Link>
        <Link as={NavLink} to="/feed" color="white" _hover={{ textDecoration: "none" }}>Feed</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;