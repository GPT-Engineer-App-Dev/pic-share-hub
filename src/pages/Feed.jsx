import { useState, useEffect } from "react";
import { Box, Heading, VStack, Image, Text, Button, HStack } from "@chakra-ui/react";

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

  const handleLike = async (photoId) => {
    try {
      const response = await fetch(`/api/photos/${photoId}/like`, {
        method: "POST",
      });

      if (response.ok) {
        setPhotos((prevPhotos) =>
          prevPhotos.map((photo) =>
            photo.id === photoId ? { ...photo, likes: photo.likes + 1 } : photo
          )
        );
      } else {
        console.error("Error liking photo.");
      }
    } catch (error) {
      console.error("Error liking photo:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="xl">Photo Feed</Heading>
        {photos.map((photo) => (
          <Box key={photo.id}>
            <Image src={photo.url} alt={photo.description} />
            <Text>{photo.description}</Text>
            <HStack>
              <Button onClick={() => handleLike(photo.id)}>Like</Button>
              <Text>{photo.likes} likes</Text>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Feed;