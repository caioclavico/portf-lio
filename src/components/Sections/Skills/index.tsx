import { Flex, Heading, HStack } from "@chakra-ui/react";
import { skills } from "../../../utils/skills";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
    return (
        <Flex
            id="skills"
            direction="column"
            gap={12}
            w="100vw"
            minH={["auto", "auto", "100vh", "100vh"]}
            justifyContent="center"
            borderTop="5px solid"
            py={16}
        >
            <Heading mt={8} textAlign="center">
                Minhas Skills
            </Heading>
            <HStack justifyContent="center" flexWrap="wrap" shouldWrapChildren>
                {skills.map((skill, i) => (
                    <SkillCard key={i} img={skill.img} name={skill.name} />
                ))}
            </HStack>
        </Flex>
    );
};
