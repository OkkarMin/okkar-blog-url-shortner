import { Flex } from "@chakra-ui/react";

import projectDetails from "projects/projectDetails";
import ProjectDetailsCard from "components/projects/project_details_card";

import Layout from "components/layout/layout";

export default function Projects() {
  return (
    <Layout title="🗂 Projects">
      <Flex
        maxW="100ch"
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
      >
        {projectDetails.map((details, i) => (
          <ProjectDetailsCard key={i} isFirst={i == 0} details={details} />
        ))}
      </Flex>
    </Layout>
  );
}
