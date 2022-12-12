// * Modules
import Typewriter from 'react-ts-typewriter'

import { photo } from '../Photo'
// * Styles
import {
  AvatarsContainer,
  CodingArea,
  DefaultImageArea,
  ImageArea,
  Text,
} from '../UserAvatar.styles'

const ConsoleSimulator = ({
  preview,
  userData,
  lineTwoActive,
  lineThreeActive,
  lineFourActive,
  lineFiveActive,
  lineSixActive,
  lineSevenActive,
  setLineTwoActive,
  setLineThreeActive,
  setLineFourActive,
  setLineSixActive,
  setLineSevenActive,
}) => {
  return (
    <AvatarsContainer>
      {!preview && <DefaultImageArea src={photo} alt="Preview" />}
      {preview && <ImageArea src={preview} alt="Preview" />}
      <div>
        <CodingArea>
          <Text fontSize="10px" color="#5D9D0B" margin="0 0 0 10px">
            <Typewriter
              text={`teameights@ubuntu:~$ ${userData.userUsername}, ${userData.userAge}`}
              onFinished={() => setLineTwoActive(true)}
              cursor={false}
              speed={20}
            />
          </Text>
          {lineTwoActive && (
            <Text fontSize="10px" color="#5D9D0B" margin="0 0 0 10px">
              <Typewriter
                text={`teameights@ubuntu:~$ ${userData.userConcentration}`}
                onFinished={() => setLineThreeActive(true)}
                cursor={false}
                speed={20}
              />
            </Text>
          )}
          {lineThreeActive && (
            <Text fontSize="10px" color="#5D9D0B" margin="0 0 0 10px">
              <Typewriter text="teameights@ubuntu:~$ waiting..." cursor={false} speed={20} />
            </Text>
          )}
          {lineFourActive && (
            <Text fontSize="10px" color="#5D9D0B" margin="0 0 0 10px">
              <Typewriter text="teameights@ubuntu:~$ uploading img..." cursor={false} speed={20} />
            </Text>
          )}
          {lineFiveActive && (
            <Text fontSize="10px" color="#5D9D0B" margin="0 0 0 10px">
              <Typewriter
                text="teameights@ubuntu:~$ uploaded!"
                cursor={false}
                speed={20}
                onFinished={() => {
                  setLineSevenActive(true)
                }}
              />
            </Text>
          )}
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
          {lineSevenActive && (
            <Text fontSize="10px" color="#5D9D0B" margin="0 0 0 10px">
              <Typewriter text="teameights@ubuntu:~$ ready to launch!" cursor={false} speed={20} />
            </Text>
          )}
        </CodingArea>
      </div>
    </AvatarsContainer>
  )
}

export default ConsoleSimulator
