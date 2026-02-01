import { motion } from "framer-motion"

export default function FinalScreen() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full w-full text-center px-2"
        >
            {/* GIF */}
            <motion.div
                className="w-40 h-40 p-4 rounded-full bg-pink-900/10 border-2 border-pink-400/25 backdrop-blur-sm flex items-center justify-center overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
<div className="grid grid-cols-2 gap-2 w-full max-w-sm mt-4">
  {/* Photo */}
  <img 
    src="/gifs/pic.jpeg" 
    className="w-full h-32 object-cover rounded-lg border-2 border-pink-300" 
  />

  {/* Video 1 */}
  <video autoPlay loop muted playsInline className="w-full h-32 object-cover rounded-lg border-2 border-pink-300">
    <source src="/gifs/v1.mp4" type="video/mp4" />
  </video>

  {/* Video 2 */}
  <video autoPlay loop muted playsInline className="w-full h-32 object-cover rounded-lg border-2 border-pink-300">
    <source src="/gifs/v2.mp4" type="video/mp4" />
  </video>

  {/* Video 3 */}
  <video autoPlay loop muted playsInline className="w-full h-32 object-cover rounded-lg border-2 border-pink-300">
    <source src="/gifs/v3.mp4" type="video/mp4" />
  </video>
</div>
            </motion.div>


            {/* Final Text */}
            <motion.h2
                className="mt-8 text-3xl md:text-4xl font-dancing-script text-zinc-50 font-medium leading-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                You’ll always be special to me
            </motion.h2>
        </motion.div>
    )
}
