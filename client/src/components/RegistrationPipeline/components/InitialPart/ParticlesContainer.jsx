import React, { useCallback, useMemo } from 'react'
import { Particles } from 'react-particles'
import { loadFull } from 'tsparticles'

export function ParticlesContainer() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      name: 'Nyan Cat 2',
      particles: {
        number: {
          value: 100,
          density: {
            enable: false,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'star',
          options: {
            star: {
              sides: 5,
            },
          },
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: {
            min: 1,
            max: 4,
          },
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'left',
          straight: true,
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      background: {
        color: '#26292B',
        image: "url('https://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
        position: '-60% 5%',
        repeat: 'no-repeat',
        size: '60%',
      },
    }
  }, [])

  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
  )
}
