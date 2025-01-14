import { useEffect } from "react";

export default function useOnClickOUtside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // console.log('event', event.target)
      if (!ref.current || ref.current.contains(event.target)) {
        return
      } handler()
    }
      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    
  }, [ref, handler]);

}