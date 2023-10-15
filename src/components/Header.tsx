import { Heading } from '@chakra-ui/react'

interface CustomProps {
    text: string,
}

export default function Header({ text }: CustomProps) {
    return (
        <Heading size='4xl'>
            {text}
        </Heading>
    )
}
