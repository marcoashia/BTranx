import { Box, Button, Image, Text, VStack} from "@chakra-ui/react";

export default function imageWithTextAndCTA(){
  return (
    <Box w={"100vw"} pos={"relative"}>
      <Image src={"https://placeimg.com/1000/480/nature"} w={"100%"} h={"400px"} objectFit={"cover"}/>
      <VStack align={"start"} pos={"absolute"} top={"0"} h={"100%"} justifyContent={"center"} spacing={"1.5rem"} pl={"3.5rem"} bg={"linear-gradient(to right, rgba(49, 130, 206, 0.5),rgba(49, 130, 206, 0.5) 50%, rgba(49, 130, 206, 0) 65%)"}>
        <Text as={"p"} lineHeight={"1.2"} fontSize={"4xl"}>Lorem ipsum dolor sit amet <br/>consectetur adipiscing elit <br/>sed do eiusmod tempor</Text>
        <Button colorScheme={"blue"} size={"lg"}>Discover</Button>
      </VStack>
    </Box>
  )
};