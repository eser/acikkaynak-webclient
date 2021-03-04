import { Box, ButtonPrimary, Heading, StyledOcticon } from "@primer/components";
import { CheckIcon } from "@primer/octicons-react";
import "./Home.css";

function Home() {
  return (
    <>
      <Box m={4}>
        <StyledOcticon icon={CheckIcon} size={32} color="green.5" mr={2}/>

        <Heading mb={2}>Hello, world!</Heading>
        <p>This will get Primer text styles.</p>

        <ButtonPrimary>Button Primary</ButtonPrimary>
      </Box>
    </>
  );
}

export { Home as default };
