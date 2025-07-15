import React from 'react'
import { MapPin } from 'lucide-react'

const MapSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="bg-gray-200 rounded-xl flex flex-col items-center justify-center py-12 shadow">
            <MapPin className="w-12 h-12 text-gray-400 mb-2" />
            <div className="text-lg font-semibold text-gray-600 mb-1">Interactive Map</div>
            <div className="text-sm text-gray-500">1010 Avenue of the Moon, New York, NY 10018 USA</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection 