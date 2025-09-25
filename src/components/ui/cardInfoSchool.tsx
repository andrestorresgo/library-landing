import * as React from "react"
import { MapPin, ExternalLink, Facebook as FacebookIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type CardInfoSchoolProps = {
  className?: string
  mapSrc?: string
  mapLink?: string // Añadido mapLink
  onOpenMap?: () => void
  onOpenFacebook?: () => void
  facebookUrl?: string
}

export function LocationCard({
  mapLink,
  mapSrc,
  onOpenMap,
}: {
  mapLink?: string
  mapSrc?: string
  onOpenMap?: () => void
}) {
  // Helper: try to build an embed src from a normal maps link. If mapSrc provided, prefer it.
  const computeEmbedSrc = (link?: string) => {
    if (!link) return undefined
    try {
      const url = new URL(link)
      // If it's already an embed URL
      if (url.pathname.includes('/maps/embed')) {
        // Add parameters to hide UI elements if not already present
        const embedUrl = new URL(link)
        if (!embedUrl.searchParams.has('maptype')) embedUrl.searchParams.set('maptype', 'roadmap')
        if (!embedUrl.searchParams.has('zoom')) embedUrl.searchParams.set('zoom', '15')
        embedUrl.searchParams.set('iwloc', 'near') // Hide info windows
        // Add key parameter if available (replace YOUR_API_KEY with actual key)
        // embedUrl.searchParams.set('key', 'YOUR_API_KEY')
        return embedUrl.toString()
      }
      // If it's a google short link, we cannot embed directly.
      if (url.hostname.includes('goo.gl') || url.hostname.includes('maps.app.goo.gl')) return undefined
      // For standard www.google.com/maps URLs
      if (url.hostname.includes('google.com')) {
        const q = url.searchParams.get('q')
        const embedUrl = q 
          ? `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(q)}&maptype=roadmap&zoom=15`
          : `https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=${encodeURIComponent(link)}&maptype=roadmap&zoom=15`
        // Note: Replace YOUR_API_KEY with actual Google Maps API key for production
        // For now, fallback to old method
        return q 
          ? `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed&iwloc=near&maptype=roadmap&zoom=15`
          : `https://www.google.com/maps?q=${encodeURIComponent(link)}&output=embed&iwloc=near&maptype=roadmap&zoom=15`
      }
    } catch (e) {
      return undefined
    }
    return undefined
  }

  const embedSrc = mapSrc ?? computeEmbedSrc(mapLink)
  
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-3">
      <div className="flex flex-col gap-3">
        <div className="w-full h-44 md:h-56 lg:h-64 rounded-xl overflow-hidden relative">
          {/* Make the preview clickable: if onOpenMap provided, use it; otherwise open mapLink in a new tab */}
          {embedSrc ? (
            // If we have an embeddable src, still make the iframe wrapped with an anchor to open full mapLink when clicked
            <a
              href={mapLink ?? embedSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full">
              <iframe
                src={embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover pointer-events-none"
                title="map-preview"
              />
            </a>
          ) : (
            <a
              href={mapLink ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 border border-white rounded-lg flex items-center justify-center text-center p-4"
            >
              <div className="flex flex-col items-center justify-center gap-2 text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-600">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" stroke="currentColor" strokeWidth="1.2" fill="rgba(59,130,246,0.08)"/>
                  <circle cx="12" cy="10" r="2.5" fill="#3b82f6" />
                </svg>
                <div className="text-sm font-medium">Clic para abrir mapa</div>
                <div className="text-xs text-slate-400">{mapLink ? 'Abrir en Google Maps' : 'Sin enlace disponible'}</div>
              </div>
            </a>
          )}

          <div className="absolute inset-0 bg-blue-500/10 flex items-start justify-start p-3 pointer-events-none">
            <div className="bg-white/90 rounded-full p-1">
              <MapPin className="h-4 w-4 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="px-1 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Nuestra Ubicación</h3>
          <p className="text-gray-600 text-sm mb-1">Unidad Educativa Litoral, Sucre</p>
          <p className="text-gray-500 text-xs mb-3">📍 Chuquisaca, Bolivia</p>
        </div>
      </div>
    </div>
  )
}

export function SocialCard({
  onOpenFacebook,
  facebookUrl = "https://www.facebook.com",
}: {
  onOpenFacebook?: () => void
  facebookUrl?: string
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-3">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-24 h-24 md:w-20 md:h-20 rounded-xl flex-shrink-0 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600">
            <div className="absolute top-1 left-1 w-3 h-3 bg-white/10 rounded-full" />
            <div className="absolute bottom-2 right-1 w-2 h-2 bg-white/10 rounded-full" />
            <div className="absolute top-3 right-2 w-1 h-1 bg-white/20 rounded-full" />
          </div>

          <div className="relative z-10 bg-white rounded-full p-2">
            <FacebookIcon className="h-6 w-6 text-blue-600" />
          </div>

          <div className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
        </div>

        <div className="flex-grow text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">UETH "Litoral"</h3>
          <p className="text-gray-600 text-sm mb-1">Síguenos para enterarte de nuestras actividades</p>
        </div>

        <div className="flex justify-center md:justify-end w-full">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 text-sm hover:scale-105"
            aria-label="Seguir en Facebook"
          >
            SEGUIR
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CardInfoSchool({ 
  className, 
  mapSrc, 
  mapLink = "https://www.google.com/maps/place/Sucre,+Bolivia/@-19.0582394,-65.2617149,13z", // Valor por defecto para Sucre
  onOpenMap, 
  onOpenFacebook, 
  facebookUrl 
}: CardInfoSchoolProps) {
  return (
    <div className={cn("w-full mx-auto px-4", className)}>
      <div className="flex flex-col gap-6 items-center justify-center">
        {/* Más ancho en desktop: max-w-2xl (672px) en lugar de max-w-[560px] */}
        <div className="w-full max-w-[560px] lg:max-w-2xl">
          <LocationCard 
            mapSrc={mapSrc} 
            mapLink={mapLink} // Pasando mapLink al componente
            onOpenMap={onOpenMap} 
          />
        </div>

        <div className="w-full max-w-[560px] lg:max-w-2xl">
          <SocialCard onOpenFacebook={onOpenFacebook} facebookUrl={facebookUrl} />
        </div>
      </div>
    </div>
  )
}