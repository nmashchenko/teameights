"use client"

import {LogoBig, LogoSmall} from "@/shared/assets";
import {useGetScreenWidth} from "@/shared/lib";
import styles from './logo.module.scss';
import {useRouter} from "next/navigation";

interface LogoProps {
  /**
   * Determines whether the logo component should handle redirection logic. Default is true.
   */
  shouldRedirect?: boolean;

  /**
   * Determines whether the logo component should adaptive. Default is false.
   */
  shouldBeAdaptive?: boolean;
}

/**
 * The `Button` component represents a customizable button element with various configurations like size, type, and content.
 */

export const Logo = ({shouldRedirect = true, shouldBeAdaptive = false}: LogoProps) => {
  const router = useRouter();
  const width = useGetScreenWidth();

  const handleBack = () => {
    if(shouldRedirect){
      router.push('/');
    }
  };

  return (
    <div className={styles.logo} onClick={handleBack}>
      {!shouldBeAdaptive || width > 430 ? <LogoBig /> : <LogoSmall />}
    </div>
  )
}
