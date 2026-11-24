import type { ReactNode } from "react";
import type { Photo as PhotoData } from "../../data/landing";

/**
 * Mostra a foto de data/landing.tsx (PHOTOS). Enquanto `src` estiver vazio,
 * mostra o `placeholder` (um bloco com degradê).
 */
export default function Photo({
  photo,
  className = "",
  placeholder,
}: {
  photo: PhotoData;
  className?: string;
  placeholder?: ReactNode;
}) {
  if (!photo.src) return <>{placeholder}</>;
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
