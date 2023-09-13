export const UserCard = () => {
    /* const person = {
  *   programmingLanguages: ['JS', 'C++', 'TS', 'Rust'],
  *   frameworks: ['React', 'MUI', 'NestJS', 'NodeJS']
  * };
   */
  return (
    <div
      style={{
        width: 230,
        height: 280,
        padding: 20,
        background: '#1A1C22',
        borderRadius: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'inline-flex'
      }}
    >
          {/* <img
        style={{ width: 42, height: 42, transform: 'rotate(-38deg)', transformOrigin: '0 0' }}
        src='https://via.placeholder.com/42x42'
      /> */}
      <div
        style={{
          flex: '1 1 0',
          alignSelf: 'stretch',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          display: 'inline-flex'
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            height: 146,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 16,
            display: 'flex'
          }}
        >
          <div
            style={{
              width: 190,
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'inline-flex'
            }}
          >
            <img
              style={{ width: 70, height: 70, borderRadius: 5 }}
              src='https://via.placeholder.com/70x70'
            />
            <div
              style={{
                height: 40,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 10,
                display: 'flex'
              }}
            >
              <div
                style={{
                  flex: '1 1 0',
                  height: 40,
                  background: '#2F3239',
                  borderRadius: 5,
                  overflow: 'hidden',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'inline-flex'
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    paddingTop: 2.49,
                    paddingBottom: 2.51,
                    paddingLeft: 2.6,
                    paddingRight: 2.61,
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'inline-flex'
                  }}
                >
                  <div style={{ width: 18.8, height: 19.01, background: 'white' }}></div>
                </div>
              </div>
              <div
                style={{
                  flex: '1 1 0',
                  height: 40,
                  background: '#2F3239',
                  borderRadius: 5,
                  overflow: 'hidden',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'inline-flex'
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    paddingTop: 2.49,
                    paddingBottom: 2.51,
                    paddingLeft: 2.6,
                    paddingRight: 2.61,
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'inline-flex'
                  }}
                >
                  <div style={{ width: 18.8, height: 19.01, background: 'white' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              height: 60,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 4,
              display: 'flex'
            }}
          >
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 8,
                display: 'inline-flex'
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Rubik',
                  fontWeight: '400',
                  //lineHeight: 22.4,
                  wordWrap: 'break-word'
                }}
              >
                Brooklyn, 21{' '}
              </div>
              <img style={{ width: 16, height: 12 }} src='https://via.placeholder.com/16x12' />
            </div>
            <div
              style={{
                alignSelf: 'stretch',
                height: 34,
                color: '#8F9094',
                fontSize: 14,
                fontFamily: 'Rubik',
                fontWeight: '400',
                lineHeight: 16.8,
                wordWrap: 'break-word'
              }}
            >
              Developer
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            height: 74,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            gap: 10,
            display: 'flex'
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 8,
              display: 'inline-flex'
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                height: 32,
                paddingLeft: 8,
                paddingRight: 8,
                background: '#0F8298',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'flex'
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Rubik',
                  fontWeight: '400',
                  lineHeight: 22.4,
                  wordWrap: 'break-word'
                }}
              >
                React.js
              </div>
            </div>
            <div
              style={{
                flex: '1 1 0',
                height: 32,
                paddingLeft: 8,
                paddingRight: 8,
                background: '#6239BF',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'flex'
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Rubik',
                  fontWeight: '400',
                  lineHeight: 22.4,
                  wordWrap: 'break-word'
                }}
              >
                Figma
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 8,
              display: 'inline-flex'
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                height: 32,
                paddingLeft: 8,
                paddingRight: 8,
                background: '#498505',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'flex'
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Rubik',
                  fontWeight: '400',
                  lineHeight: 22.4,
                  wordWrap: 'break-word'
                }}
              >
                Node.js
              </div>
            </div>
            <div
              style={{
                flex: '1 1 0',
                height: 32,
                paddingLeft: 8,
                paddingRight: 8,
                background: '#A62929',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'flex'
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Rubik',
                  fontWeight: '400',
                  lineHeight: 22.4,
                  wordWrap: 'break-word'
                }}
              >
                Angular
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
