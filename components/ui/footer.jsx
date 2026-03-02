import { Github, Instagram } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id="contact" className="py-12 border-t border-white/10 text-center text-neutral-500 text-sm bg-black/20 backdrop-blur-md">
                <div className="max-w-6xl mx-auto w-full px-4 md:px-8 space-y-4">

                    <div className='flex sm:flex-row flex-col sm:items-center items-center justify-between'>
                        <p className='text-xl'>Todos los derechos reservados © {new Date().getFullYear()} AlbaLabs. </p>
                        <div className='flex gap-4'>
                            <a href="https://www.instagram.com/albalabs_/" target='_blank'>
                                <Instagram />
                            </a>
                            <a href="">
                                <Github />
                            </a>
                        </div>

                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer       