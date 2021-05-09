import {
  Text,
  Stack,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  StackDivider,
} from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import { server } from "../config";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import WorkExperienceList from "./work_experience_list";
import EducationExperienceList from "./education_experience_list";
import AchievementExperienceList from "./achievement_experience_list";

export default function BioExperienceTabs() {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <Tabs
      isFitted
      variant="enclosed"
      index={tabIndex}
      onChange={(index) => setTabIndex(index)}
    >
      <TabList mb={4}>
        <Tab _selected={{ fontWeight: "bold", bg: "gray.100" }}>Bio</Tab>
        <Tab _selected={{ fontWeight: "bold", bg: "gray.100" }}>
          {" "}
          Experience{" "}
        </Tab>
      </TabList>

      <TabPanels>
        {/* Bio tap panel */}
        <TabPanel>
          <Text>
            Hello 👋 I'm Okkar Min, final year computer science student from
            Nanyang Technological University.
          </Text>
          <Text mt={4}>
            "To automate or not to automate, that is the question". I enjoy
            discussing on technology and its trade-offs.
          </Text>

          <Stack
            mt={6}
            direction={["column", "row"]}
            divider={<StackDivider />}
          >
            <Button
              w="full"
              rightIcon={<ArrowForwardIcon />}
              variant="outline"
              onClick={() => setTabIndex(1)}
            >
              Experience
            </Button>

            <NextLink href={`${server}/blog`}>
              <Button
                w="full"
                rightIcon={<ArrowForwardIcon />}
                variant="outline"
              >
                Blog
              </Button>
            </NextLink>

            <NextLink href={`${server}/projects`}>
              <Button
                w="full"
                rightIcon={<ArrowForwardIcon />}
                variant="outline"
              >
                Projects
              </Button>
            </NextLink>
          </Stack>
        </TabPanel>

        {/* Experience tab panel */}
        <TabPanel>
          <Stack spacing={6}>
            <WorkExperienceList />
            <EducationExperienceList />
            <AchievementExperienceList />
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
