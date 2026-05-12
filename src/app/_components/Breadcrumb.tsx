'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const pathname = usePathname()

  const segments = pathname
    .split('/')
    .filter(Boolean)

  const breadcrumbs = segments.map((segment, index) => {
    const href =
      '/' + segments.slice(0, index + 1).join('/')

    // Formatear texto automáticamente
    const label = decodeURIComponent(segment)
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())

    return {
      label,
      href,
    }
  })

  return (
    <nav className="flex items-center font-sans flex-wrap gap-2 text-sm relative">
      <Link
        href="/"
        className="text-gray-700 font-dm-sans font-medium  hover:opacity-60 duration-200"
      >
        Inicio
      </Link>

      {breadcrumbs.map((crumb, index) => {
        const isLast =
          index === breadcrumbs.length - 1

        return (
          <div
            key={crumb.href}
            className="flex items-center gap-2 text-gray-700"
          >
            <span className="">/</span>

            {isLast ? (
              <span className="text-gray-900 font-dm-sans font-semibold ">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="text-gray-700 font-dm-sans font-medium"
              >
                  {crumb.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}