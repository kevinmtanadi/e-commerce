import { Box } from '@chakra-ui/react'

interface Props {
    value: number
}

const Money = ({value}: Props) => {
    const toMoney = (value: number) => {
        // Convert the number to a string and split it into two parts: whole and decimal
        const parts = value.toString().split(".");
        
        // Format the whole part with thousands separators
        const wholePart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        
        // Combine the whole part with the "Rp" symbol and the decimal part (if it exists)
        const formattedNumber = "Rp" + wholePart + (parts[1] ? "." + parts[1] : "");
        
        return formattedNumber;
    }
  return (
    <Box fontWeight={"bold"}>{toMoney(value)}</Box>
  )
}

export default Money