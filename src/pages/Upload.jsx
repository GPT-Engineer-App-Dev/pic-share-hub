import { Box, Heading, VStack, Input, Button } from "@chakra-ui/react";

const Upload = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="xl">Upload Photo</Heading>
        <Input type="file" accept="image/*" />
        <Button colorScheme="blue">Upload</Button>
      </VStack>
    </Box>
  );
};

export default Upload;