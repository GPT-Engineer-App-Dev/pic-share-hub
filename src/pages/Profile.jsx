import { Box, Heading, Text, VStack, Avatar } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Avatar size="2xl" name="User Name" />
        <Heading as="h1" size="xl">User Name</Heading>
        <Text fontSize="lg">This is the user profile page.</Text>
      </VStack>
    </Box>
  );
};

export default Profile;