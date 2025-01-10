import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

  return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <AnimatePresence mode="wait">
              {!isOpen ? (
                  <motion.button
                      layoutId="signin-container"
                      onClick={() => setIsOpen(true)}
                      onHoverStart={() => setIsHovered(true)}
                      onHoverEnd={() => setIsHovered(false)}
                      className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg shadow-lg"
                  >
                      <motion.span animate={{x: isHovered ? -4 : 0}}
                                   transition={{duration: 0.2}} layoutId="signin-text">Sign In</motion.span>
                      <motion.span layout
                          animate={{x: isHovered ? 4 : 0}}
                          transition={{duration: 0.2}}
                      >
                          →
                      </motion.span>
                  </motion.button>
              ) : (
                  <motion.div
                      layoutId="signin-container"
                      className="w-full max-w-md rounded-3xl bg-white shadow-lg"
                  >
                      <div className="border-b border-gray-200">
                          <div className="flex items-center justify-between py-4 px-6">
                              <motion.h2 layoutId="signin-text" className="text-xl">
                                  Sign In
                              </motion.h2>
                              <motion.button
                                  initial={{opacity: 0, scale: 1}}
                                  animate={{opacity: 1, scale: 1}}
                                  exit={{opacity: 0, scale: 0.8}}
                                  onClick={() => {
                                      setIsOpen(false)
                                      setIsHovered(false)
                                  }}
                                  className="rounded-full p-1 hover:bg-gray-100"
                              >
                                  <X className="h-5 w-5"/>
                              </motion.button>
                          </div>
                      </div>

                      <motion.div
                          initial={{opacity: 0, y: 20}}
                          animate={{opacity: 1, y: 0}}
                          exit={{opacity: 0, y: 20}}
                          transition={{
                              duration: 0.1,
                              delay: isOpen ? 0.15 : 0,
                              exit: { duration: 0.1 }
                          }}
                          className="flex flex-col gap-4 p-6"
                      >
                          <button
                              className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-3 hover:opacity-70">
                              <img
                                  src="https://www.google.com/favicon.ico"
                                  alt=""
                                  className="h-5 w-5"
                              />
                              Continue with Google
                          </button>

                          <button
                              className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-3 hover:opacity-70">
                              <img
                                  src="https://www.apple.com/favicon.ico"
                                  alt=""
                                  className="h-5 w-5"
                              />
                              Continue with Apple
                          </button>

                          <div className="relative my-2">
                              <div className="absolute inset-0 flex items-center">
                                  <div className="w-full border-t border-gray-200"/>
                              </div>
                              <div className="relative flex justify-center">
                                  <span className="bg-white px-4 text-sm text-gray-500">Or</span>
                              </div>
                          </div>

                          <input
                              type="email"
                              placeholder="Email"
                              className="rounded-lg border border-gray-200 px-4 py-3 focus:border-black focus:outline-none"
                          />

                          <button
                              className="flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-3 text-white hover:bg-black/90">
                              Continue <span>→</span>
                          </button>
                      </motion.div>
                  </motion.div>
              )}
          </AnimatePresence>
      </div>
  )
}

export default App;
