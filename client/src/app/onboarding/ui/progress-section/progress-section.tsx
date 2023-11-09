import {Flex, Logo, ProgressBar} from "@/shared/ui";
import {ReactNode} from "react";
import styles from "./progress-section.module.scss"

interface ProgressSectionProps {
    children: ReactNode;
}

export const ProgressSection = ({children}: ProgressSectionProps) => {
    return (
        <Flex direction={"column"} className={styles.container}>
            <Logo shouldRedirect={false} />
          {/*Todo Set children instead of this*/}
          {children}
          {/*Todo Set children instead of this*/}
            <ProgressBar percentageProgress={10} />
        </Flex>
    )
}
