'use client';

import type { FC } from 'react';
import { useCallback, useMemo } from 'react';
import { Particles } from 'react-particles';
import { loadFull } from 'tsparticles';
import type { ISourceOptions, Main } from 'tsparticles-engine';

export const AmongUs: FC = () => {
  const particlesInit = useCallback(async (engine: Main) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options: ISourceOptions = useMemo(
    () =>
      // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
      // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
      ({
        background: {
          color: '#26292B',
        },
        emitters: {
          particles: {
            move: {
              outModes: {
                default: 'none',
                right: 'destroy',
              },
              speed: 12,
              straight: true,
            },
            rotate: {
              animation: {
                enable: true,
                speed: 10,
                sync: true,
              },
              value: {
                max: 360,
                min: 0,
              },
            },
            shape: {
              options: {
                images: {
                  height: 634,
                  src: 'https://particles.js.org/images/cyan_amongus.png',
                  width: 500,
                },
              },
              type: 'images',
            },
            size: {
              value: 70,
            },
            zIndex: {
              value: 0,
            },
          },
          position: {
            x: -5,
            y: 55,
          },
          rate: {
            delay: 7,
            quantity: 1,
          },
          size: {
            height: 0,
            width: 0,
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        name: 'Among Us',
        particles: {
          color: {
            animation: {
              enable: false,
              speed: 20,
              sync: true,
            },
            value: '#fff',
          },
          groups: {
            z1000: {
              number: {
                value: 40,
              },
              zIndex: {
                value: 10,
              },
            },
            z2500: {
              number: {
                value: 50,
              },
              zIndex: {
                value: 25,
              },
            },
            z5000: {
              number: {
                value: 70,
              },
              zIndex: {
                value: 50,
              },
            },
            z7500: {
              number: {
                value: 30,
              },
              zIndex: {
                value: 75,
              },
            },
          },
          move: {
            angle: {
              offset: 0,
              value: 10,
            },
            direction: 'right',
            enable: true,
            speed: 5,
          },
          number: {
            value: 200,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: 3,
          },
          zIndex: {
            opacityRate: 0.5,
            value: 5,
          },
        },
      }),
    []
  );

  return <Particles init={particlesInit} loaded={particlesLoaded} options={options} />;
};
