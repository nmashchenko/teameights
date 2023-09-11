'use client';
import { FC, useCallback, useMemo } from 'react';
import { Particles } from 'react-particles';
import { loadFull } from 'tsparticles';
import { ISourceOptions, Main } from 'tsparticles-engine';

export const AmongUs: FC = () => {
  const particlesInit = useCallback(async (engine: Main) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options: ISourceOptions = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      name: 'Among Us',
      particles: {
        groups: {
          z5000: {
            number: {
              value: 70
            },
            zIndex: {
              value: 50
            }
          },
          z7500: {
            number: {
              value: 30
            },
            zIndex: {
              value: 75
            }
          },
          z2500: {
            number: {
              value: 50
            },
            zIndex: {
              value: 25
            }
          },
          z1000: {
            number: {
              value: 40
            },
            zIndex: {
              value: 10
            }
          }
        },
        number: {
          value: 200
        },
        color: {
          value: '#fff',
          animation: {
            enable: false,
            speed: 20,
            sync: true
          }
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 1
        },
        size: {
          value: 3
        },
        move: {
          angle: {
            value: 10,
            offset: 0
          },
          enable: true,
          speed: 5,
          direction: 'right'
        },
        zIndex: {
          value: 5,
          opacityRate: 0.5
        }
      },
      background: {
        color: '#26292B'
      },
      emitters: {
        position: {
          y: 55,
          x: -5
        },
        rate: {
          delay: 7,
          quantity: 1
        },
        size: {
          width: 0,
          height: 0
        },
        particles: {
          shape: {
            type: 'images',
            options: {
              images: {
                src: 'https://particles.js.org/images/cyan_amongus.png',
                width: 500,
                height: 634
              }
            }
          },
          size: {
            value: 70
          },
          move: {
            speed: 12,
            outModes: {
              default: 'none',
              right: 'destroy'
            },
            straight: true
          },
          zIndex: {
            value: 0
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 10,
              sync: true
            }
          }
        }
      }
    };
  }, []);

  return <Particles init={particlesInit} loaded={particlesLoaded} options={options} />;
};
