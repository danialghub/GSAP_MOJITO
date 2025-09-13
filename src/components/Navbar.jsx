import React from 'react'
import { navLinks } from '../../constatns'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: "top top",
                scrub: true
            }
        })
        navTween.fromTo('nav', { backgroundColor: "transparent" }, {
            backgroundColor: "#99999940",
            duration: 1,
            ease: 'power1.inOut',
            
        })
    }, [])
    return (
        <nav>
            <div>
                <a
                    className='flex items-center gap-2'
                    href="#home">
                    <img src='./images/logo.png' alt="" />
                    <p>Verdal Pour</p>
                </a>

                <ul>
                    {navLinks.map(nav => (
                        <li key={nav.id}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))

                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar