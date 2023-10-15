import { 
    Button
  } from '@chakra-ui/react'

interface ButtonProps {
    onClick: () => void;
    text: string,    
}

export default function ButtonComponent({text, onClick}: ButtonProps) {
  return (
    <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
        {text}
    </Button>
  )
}
