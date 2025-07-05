"use client"

import type React from "react"

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L, { type Marker as MarkerType } from "leaflet"
import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"

const customIcon = L.divIcon({
  html: `
    <div style="position:relative;transform:translate(-50%,-100%);">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="text-blue-600 drop-shadow-lg">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  `,
  className: "bg-transparent border-none",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -48],
})

const poles = [
  {
    name: "Pôle Île-de-France (Siège)",
    position: [48.8566, 2.3522] as L.LatLngExpression,
    address: "123 Rue de la Précision, 75000 Paris",
  },
  {
    name: "Pôle Auvergne-Rhône-Alpes",
    position: [45.764, 4.8357] as L.LatLngExpression,
    address: "456 Avenue des Alpes, 69000 Lyon",
  },
  {
    name: "Pôle Nouvelle-Aquitaine",
    position: [44.8378, -0.5792] as L.LatLngExpression,
    address: "789 Quai des Chartrons, 33000 Bordeaux",
  },
]

type Pole = (typeof poles)[0]

function MapController({
  pole,
  markerRefs,
}: {
  pole: Pole | null
  markerRefs: React.RefObject<Record<string, MarkerType | null>>
}) {
  const map = useMap()
  useEffect(() => {
    if (pole && markerRefs.current) {
      map.flyTo(pole.position, 13, {
        animate: true,
        duration: 1.5,
      })
      // Wait for fly animation to finish before opening popup
      const timer = setTimeout(() => {
        const marker = markerRefs.current?.[pole.name]
        if (marker) {
          marker.openPopup()
        }
      }, 1600)

      return () => clearTimeout(timer)
    }
  }, [pole, map, markerRefs])
  return null
}

export function InteractiveMap() {
  const [selectedPole, setSelectedPole] = useState<Pole | null>(poles[0])
  const markerRefs = useRef<Record<string, MarkerType | null>>({})

  const handleSelectPole = (pole: Pole) => {
    setSelectedPole(pole)
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-1 space-y-4 order-1">
        <h3 className="font-bold text-xl text-blue-900">Nos Agences</h3>
        <div className="flex flex-col space-y-2">
          {poles.map((pole) => (
            <Button
              key={pole.name}
              variant={selectedPole?.name === pole.name ? "default" : "outline"}
              onClick={() => handleSelectPole(pole)}
              className="justify-start text-left h-auto py-3"
            >
              <div>
                <p className="font-semibold">{pole.name}</p>
                <p className="text-xs font-normal">{pole.address}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 h-[400px] md:h-[500px] w-full rounded-lg shadow-lg overflow-hidden z-0 order-2">
        <MapContainer
          center={selectedPole?.position || [46.6, 1.88]}
          zoom={selectedPole ? 13 : 5.5}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          {poles.map((pole) => (
            <Marker
              key={pole.name}
              position={pole.position}
              icon={customIcon}
              ref={(ref) => {
                markerRefs.current[pole.name] = ref
              }}
            >
              <Popup>
                <div className="p-1">
                  <h3 className="font-bold text-base text-blue-800">{pole.name}</h3>
                  <p className="text-sm">{pole.address}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <MapController pole={selectedPole} markerRefs={markerRefs} />
        </MapContainer>
      </div>
    </div>
  )
}
