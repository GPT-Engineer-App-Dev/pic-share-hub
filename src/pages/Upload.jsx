import { useState } from "react";
import { Box, Heading, VStack, Input, Button, Text } from "@chakra-ui/react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadMessage("File uploaded successfully!");
      } else {
        setUploadMessage("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadMessage("An error occurred during file upload.");
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="xl">Upload Photo</Heading>
        <Input type="file" accept="image/*" onChange={handleFileChange} />
        <Button colorScheme="blue" onClick={handleUpload}>Upload</Button>
        {uploadMessage && <Text>{uploadMessage}</Text>}
      </VStack>
    </Box>
  );
};

export default Upload;