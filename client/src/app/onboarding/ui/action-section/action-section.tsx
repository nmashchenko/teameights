import {Button, Flex, Typography} from "@/shared/ui";
import {ReactNode} from "react";
import {ArrowLeft, ArrowRight} from "@/shared/assets";
import styles from "./action-section.module.scss"
import {NeedHelp} from "@/entities/need-help";

interface ActionSectionProps {
    children: ReactNode;
    stepTitle: string;
}

export const ActionSection = ({children, stepTitle}: ActionSectionProps) => {
    return (
        <Flex direction={"column"} className={styles.container}>
            <Flex justify={"space-between"} align={"center"}>
                <Typography size={"heading_l"} color={"greenBright"}>
                    {stepTitle}
                </Typography>
              <NeedHelp />
            </Flex>
          <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
            {children}
          </div>
          <Flex justify={"space-between"}>
            <Button className={styles.button} typeBtn={"secondary"}>
              <ArrowLeft />
              Back
            </Button>
            <Button className={styles.button}>
              Next
              <ArrowRight />
            </Button>
          </Flex>
        </Flex>
    )
}
