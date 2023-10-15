import { Box, Center, Input } from "@chakra-ui/react"
import ButtonComponent from "./Button"

interface ICard {
  text: string,
  buttonText: string,
  event: () => void;
}

export const Card = ({ text, buttonText, event }: ICard) => {
  return (
    <div>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>{text}</h1>
          </Center>
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <Center>
            <ButtonComponent onClick={event} text={buttonText} />
          </Center>
        </Box>
      </Box>
    </div>
  )
}