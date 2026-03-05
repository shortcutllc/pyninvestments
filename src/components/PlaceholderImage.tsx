interface PlaceholderImageProps {
  label: string
  className?: string
  aspectRatio?: string
}

export default function PlaceholderImage({ label, className = '', aspectRatio = '16/9' }: PlaceholderImageProps) {
  return (
    <div
      className={`bg-pyn-cream flex items-center justify-center ${className}`}
      style={{ aspectRatio }}
    >
      <span className="text-gray-400 text-sm text-center px-4">{label}</span>
    </div>
  )
}
