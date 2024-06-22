import { Slot } from '@radix-ui/react-slot'
import type { SlotProps } from '@radix-ui/react-slot'
type ButtonProps = SlotProps & {
  asChild?: boolean
}

export default function Buttton({ asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className="error rounded px-2 py-1"
      {...props}
    />
  )
}
