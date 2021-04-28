import { PrismaClient } from "@prisma/client";
import { Flex, Text } from "@chakra-ui/react";

export default function Test({ data }) {
  return (
    <Flex alig="center" w="100vh">
      {JSON.parse(data).map((each) => (
        <Text>{JSON.stringify(each)}</Text>
      ))}
    </Flex>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const data = await prisma.alias.findMany();

  return {
    props: { data: JSON.stringify(data) },
  };
}
