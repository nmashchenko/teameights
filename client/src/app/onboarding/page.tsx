"use client"

import {Flex} from "@/shared/ui";
import {ProgressSection} from "@/app/onboarding/ui/progress-section/progress-section";
import {ActionSection} from "@/app/onboarding/ui/action-section/action-section";


const OnboardingPage = () => {

  return (
        <Flex width={"100vw"} height={"100dvh"}>
              <ProgressSection>
                <Flex  style={{flex: 1, flexDirection: "column"}}>
                  <div style={{flex: 1, display: "flex", alignItems: "center"}}>
                    Image
                  </div>
                  <div style={{marginBottom: "32px"}}>
                    Description
                  </div>
                </Flex>
              </ProgressSection>
            <ActionSection stepTitle={"Step Title"}>
                ActionSection
            </ActionSection>
        </Flex>
    )
}

export default OnboardingPage;
