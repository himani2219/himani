'use client'

type ModalOverlayProps = {
  onClose: () => void
}

const ModalOverlay = ({ onClose }: ModalOverlayProps) => {
  return (
    <button
      type="button"
      aria-label="Close project details"
      onClick={onClose}
      className="fixed inset-0 z-[190] h-screen w-screen overflow-hidden overscroll-none touch-none bg-black/70"
    />
  )
}

export default ModalOverlay
