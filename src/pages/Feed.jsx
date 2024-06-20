import { useState, useEffect } from "react";
import { Box, Heading, VStack, Image, Text } from "@chakra-ui/react";

const Feed = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("/api/photos");
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="xl">Photo Feed</Heading>
        {photos.map((photo, index) => (
          <Box key={index}>
            <Image src={photo.url} alt={photo.description} />
            <Text>{photo.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Feed;