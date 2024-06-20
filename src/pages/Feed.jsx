import { Box, Heading, VStack, Image, Text } from "@chakra-ui/react";

const Feed = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="xl">Photo Feed</Heading>
        <Box>
          <Image src="https://via.placeholder.com/150" alt="Sample Photo" />
          <Text>Sample Photo Description</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Feed;