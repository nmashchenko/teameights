// * Modules
import Typewriter from '@mikhail2404/react-ts-typewriter'
import { photo } from '../Photo'
// * Styles
import {
  ImageArea,
  DefaultImageArea,
  AvatarsContainer,
  Text,
  CodingArea,
} from '../UserAvatar.styles'
import {useFormikContext} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {setIsFinishedAvatarLoading} from "../../../../../../../store/reducers/RegistrationAuth";

const ConsoleSimulator = ({
  startedUploading,
  returnedToPreviousSteps,
                            setStartedUploading
}) => {

  const {values} = useFormikContext()
  const dispatch = useDispatch()
  const { isFinishedAvatarLoading  } = useSelector((state) => state.registrationReducer)
  const lines = [`teameights@ubuntu:~$ ${values.username}, ${values.age}`, `teameights@ubuntu:~$ ${values.concentration}`, "teameights@ubuntu:~$ waiting...", "teameights@ubuntu:~$ uploading img...", "teameights@ubuntu:~$ uploaded!", "teameights@ubuntu:~$ ready to launch!"]
  return (
    <AvatarsContainer>
      {values.file ? <ImageArea src={values.file} alt="Preview" /> : <DefaultImageArea src={photo} alt="Preview" />}
        <CodingArea>
          {isFinishedAvatarLoading && returnedToPreviousSteps ?
              <Text fontSize="10px" color="#5D9D0B" margin="0 0 0 10px">
                {lines.map((line, index) => (
                    <span key={line + index}>
                    {line}
                      <br />
                </span>
                ))}
              </Text>
              :
              <>
                <Text fontSize="10px" color="#5D9D0B" margin="0 0 0 10px">
                  <Typewriter
                      text={[...lines.slice(0, 3)]}
                      cursor={false}
                      speed={10}
                      delay={100}
                      newLine={true}
                  />
                </Text>
                {startedUploading && (
                  <Text fontSize="10px" color="#5D9D0B" margin="0 0 0 10px">
                  <Typewriter text={lines[3]} cursor={false} speed={10} />
                  </Text>
                  )}
                {values.file && (
                  <Text fontSize="10px" color="#5D9D0B" margin="0 0 0 10px">
                  <Typewriter
                  text={[...lines.slice(4, 6)]}
                  onFinished={() => {
                    setStartedUploading(false)
                    dispatch(setIsFinishedAvatarLoading(true))
                  }}
                  cursor={false}
                  speed={10}
                  delay={100}
                  newLine={true}
                  />
                  </Text>
                  )}
              </>
          }


          {/* {lineSixActive && (
            <Text fontSize="10px" color="#5D9D0B" margin="0 0 0 10px">
              <Typewriter
                text="teameights@ubuntu:~$ preparing..."
                cursor={false}
                speed={20}
                onFinished={() => setLineSevenActive(true)}
              />
            </Text>
          )} */}
        </CodingArea>
    </AvatarsContainer>
  )
}

export default ConsoleSimulator
