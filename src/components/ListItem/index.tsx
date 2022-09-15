import { Button, Link as ChakraLink, Td, Text, Tr } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiEdit, BiX } from "react-icons/bi";
import { Driver } from "../../@types/Driver";
import { useSizes } from "../../hooks/useSizes";
import Link from "next/link";
interface ListItemPros {
  driver: Driver;
}

export function ListItem({ driver }: ListItemPros) {
  const { isMdVersion, isSmallVersion, isWideVersion } = useSizes();
  const formattedData = new Date(driver.birth_date).toLocaleDateString("pt-br");
  return (
    <Tr>
      <Td>
        <Text fontWeight="bold" fontSize={["12", "14", "16"]} color={driver.ativo ? "" : "red.500"}>
          {driver.name}
        </Text>
      </Td>
      <Td fontSize={["10", "14", "16"]} fontWeight="bold">
        {driver.cpf}
      </Td>
      {isWideVersion && <Td w="8">{driver.phone}</Td>}
      {isWideVersion && <Td w="8">{formattedData}</Td>}
      {!isSmallVersion && (
        <Td fontSize={["10", "14", "16"]}>
          {driver.cnh_number} {isMdVersion && <br />} {driver.cnh_category}
        </Td>
      )}
      <Td>
        {driver.ativo && (
          <Link href={`edit/${driver.id}`}>
            <ChakraLink
              colorScheme="twitter"
              type="submit"
              variant="ghost"
              size={["sm", "md"]}
            >
              <BiEdit size={!isSmallVersion ? 30 : 20} />
            </ChakraLink>
          </Link>
        )}
        <ChakraLink
          colorScheme="twitter"
          type="submit"
          variant="ghost"
          size={["sm", "md"]}
        >
        </ChakraLink>
      </Td>
    </Tr>
  );
}
