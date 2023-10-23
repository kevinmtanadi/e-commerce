import { Avatar, Box, HStack, Heading } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Box marginX={5} height={"50px"}>
        <HStack justifyContent={'space-between'}>
            <Heading>test</Heading>
            <Avatar name="John Doe" />
        </HStack>
    </Box>
  )
}

export default Navbar