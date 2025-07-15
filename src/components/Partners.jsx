import React, { useRef, useEffect, useCallback } from 'react'
import themeforestLogo from '../assets/themeforest.png'
import videohiveLogo from '../assets/videohive.png'
import codecanyonLogo from '../assets/codecanyon.png'
import audiojungleLogo from '../assets/audiojungle.png'
import doceanLogo from '../assets/3docean.png'
import useEmblaCarousel from 'embla-carousel-react'

const Partners = () => {
  const partners = [
    { name: "ThemeForest", logo: themeforestLogo },
    { name: "VideoHive", logo: videohiveLogo },
    { name: "3DOcean", logo: doceanLogo },
    { name: "AudioJungle", logo: audiojungleLogo },
    { name: "CodeCanyon", logo: codecanyonLogo }
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    slidesToScroll: 1,
    dragFree: true,
  })

  // Autoplay effect
  useEffect(() => {
    if (!emblaApi) return
    let rafId
    const autoplay = () => {
      if (emblaApi) {
        emblaApi.scrollNext()
      }
      rafId = setTimeout(autoplay, 2000)
    }
    autoplay()
    return () => rafId && clearTimeout(rafId)
  }, [emblaApi])

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-12 embla__container">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 embla__slide"
                style={{ minWidth: '180px' }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners

