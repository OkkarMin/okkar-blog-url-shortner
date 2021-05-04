import { Stack } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Stack spacing={2} justifyContent="flex-start" p={[2, 4, 6, 8]}>
      {children}
    </Stack>
  );
}
