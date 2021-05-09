import {
  Button,
  Link,
  Stack,
  StackDivider,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import {
  EditIcon,
  DownloadIcon,
  DragHandleIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import NextLink from "next/link";
import { server } from "../config";

import WorkExperienceList from "./work_experience_list";
import EducationExperienceList from "./education_experience_list";
import AchievementExperienceList from "./achievement_experience_list";

export default function BioExperienceTabs() {
  const [tabIndex, setTabIndex] = useState(0);
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
              rightIcon={<InfoOutlineIcon />}
              variant="outline"
              onClick={() => setTabIndex(1)}
            >
              Experience
            </Button>

            <NextLink href={`${server}/blog`}>
              <Button w="full" rightIcon={<EditIcon />} variant="outline">
                Blog
              </Button>
            </NextLink>

            <NextLink href={`${server}/projects`}>
              <Button w="full" rightIcon={<DragHandleIcon />} variant="outline">
                Projects
              </Button>
            </NextLink>
          </Stack>
        </TabPanel>

        {/* Experience tab panel */}
        <TabPanel>
          <Stack spacing={6}>
            <Link isExternal href={`${server}/Okkar_Min_Resume.pdf`}>
              <Button w="full" rightIcon={<DownloadIcon />} variant="outline">
                Resume
              </Button>
            </Link>
            <WorkExperienceList />
            <AchievementExperienceList />
            <EducationExperienceList />
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
