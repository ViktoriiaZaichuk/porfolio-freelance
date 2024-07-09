document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger); 

    /* Loader */
    let numbers = [];
    const numberOfSteps = 4;

    // Generate 4 random numbers between 0 and 100
    for (let i = 0; i < numberOfSteps; i++) {
        numbers.push(Math.floor(Math.random() * 101));
    }

    // Use GSAP timeline to animate the numbers
    const tl = gsap.timeline({ onUpdate: updateLoadingNumber });

    // Add animations for each random number
    numbers.forEach((num, index) => {
        tl.to({ value: num }, {
            duration: 0.5,
            ease: 'power1.inOut',
            onComplete: function() {
                if (index === numbers.length - 1) {
                    completeAnimation();
                }
            }
        });
    });

    function updateLoadingNumber() {
        loadingNumber.innerHTML = Math.round(tl.progress() * 100) + '%';
    }

    /* Text animation */
    gsap.fromTo('.loader-txt span', {
        x: 50,
        opacity: 0,
      },
      {
      delay: .6,
      duration: 1, 
      x: 0,
      opacity: 1,
      ease: 'power2.easeOut',
      stagger: {
        from: 'start',
        amount: 0.5, 
      },
    })

    /* Color change */
    const colorChange = gsap.timeline({ repeat: -1, yoyo: true });
    colorChange.to(".loader", { backgroundColor: "#FFFEF6", duration: .5 }) 
    .to(".loader", { backgroundColor: "#ffe44f", duration: .5 })
    .to(".loader", { backgroundColor: "#ffa4a4", duration: .5 });

    function completeAnimation() {
        gsap.to(".loader-txt span", {
            y: -20,
            opacity: 0,
            ease: 'power1.inOut',
            delay: 0.5
        });
        gsap.to(".loader-number", {
            y: -20,
            opacity: 0,
            ease: 'power1.inOut',
            delay: 0.5
        });
        gsap.to("#loader", {
            y: '-100%',
            duration: 0.5,
            ease: 'power1.inOut',
            delay: 1,
            onComplete: function() {
                document.getElementById('loader').style.display = 'none';
                startAfterLoaderAnim(); 
            }
        });
    }

    // Function to start the final animation
    function startAfterLoaderAnim() {
        gsap.fromTo('.loader-gsap-h2', { 
            opacity: 0, 
            y: -20 
        }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1 
        });
        gsap.fromTo('.loader-gsap-nav', { 
            opacity: 0, 
            y: -20 
        }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1 
        });
        gsap.fromTo('.loader-gsap-tags', { 
            opacity: 0, 
            y: 20 
        }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1 
        });
        gsap.fromTo('.loader-gsap-hero', { 
            opacity: 0, 
            y: 20 
        }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            delay: 0.5 
        });
    }


    /* Scroll hero */ 
    gsap.fromTo(".hp-gsap-hero-scroll", {
            opacity: 0, 
            y: 20,
        }, 
        {
            opacity: 1, 
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".hp-gsap-hero-scroll",
            }
        }
    );


    /* Scoll intro */
    gsap.from(".hp-gsap-intro-scroll .line span", {
        opacity: 0,
        y: 200,
        ease: "power4.out",
        delay: .2,
        skewY: 8,
        duration: 1.5,
        stagger: {
            amount: 0.8,
        },
        scrollTrigger: {
            trigger: ".hp-gsap-intro-scroll .line span",
        }
    },);

    gsap.from(".hp-gsap-intro-scroll-2 .line span", {
        opacity: 0,
        y: 200,
        ease: "power4.out",
        duration: 1.5,
        stagger: {
            amount: 1,
        },
        scrollTrigger: {
            trigger: ".hp-gsap-intro-scroll-2 .line span",
        }
    },);

    gsap.to(".hp-gsap-intro-scroll", {
        y: 25,
        scrollTrigger: {
          trigger: ".hp-gsap-intro-scroll",
          start: "top center",
          end: "bottom center",
          scrub: true 
        }
    });

    gsap.to(".hp-gsap-intro-scroll-2", {
        y: 25,
        scrollTrigger: {
          trigger: ".hp-gsap-intro-scroll-2",
          start: "top center",
          end: "bottom center",
          scrub: true 
        }
    });


    gsap.from(".home--intro__p1", {
        opacity: 0,
        y: 200,
        ease: "power4.out",
        duration: 1.5,
        scrollTrigger: {
            trigger: ".home--intro__p1",
        }
    },);

    gsap.from(".home--intro__p2", {
        opacity: 0,
        y: 200,
        ease: "power4.out",
        duration: 1.5,
        scrollTrigger: {
            trigger: ".home--intro__p2",
        }
    },);


    /* Scroll projects */
    gsap.fromTo(".hp-gsap-projects-t", {
        opacity: 0, 
        y: 20,
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".hp-gsap-projects-t",
            start: "top center",
        }
    });

    gsap.fromTo(".hp-gsap-projects-txt", {
        opacity: 0, 
        y: 20,
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".hp-gsap-projects-txt",
            start: "top center",
        }
    });

    gsap.fromTo(".hp-gsap-projects-arw", {
        opacity: 0, 
        y: 20,
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".hp-gsap-projects-arw",
            start: "top center",
        }
    });

    gsap.to(".home--projects__intro div:first-child", {
        y: 25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".home--projects__intro",
          start: "top center",
          scrub: true 
        }
    });


    gsap.to(".hp-gsap-projects-arw", {
        rotation: 60,
        scale: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hp-gsap-projects-arw",
          start: "top center",
          scrub: true 
        }
    });

    gsap.from(".card-container .project-card", {
        opacity: 0,
        y: 200,
        ease: "power4.out",
        skewY: 2,
        duration: 1.5,
        stagger: {
            amount: 0.8,
        },
        scrollTrigger: {
            trigger: ".card-container .project-card",
        }
    },);


    /* Scroll extra  info */
    gsap.fromTo(".extr-date div span", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".extr-date div span",
            start: "top center",
        }
    });

    gsap.fromTo(".extr-date > span", {
        opacity: 0, 
        x: 600,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".extr-date > span",
            start: "top center",
        }
    });

    gsap.fromTo(".img-bck h2", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".img-bck h2",
            start: "top center",
        }
    });

    gsap.fromTo(".extr-line div h4", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".extr-line div h4",
            start: "top center",
        }
    });

    gsap.fromTo(".extr-line > span", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".extr-line > span",
            start: "top center",
        }
    });

    gsap.fromTo(".extr-btn .light", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".extr-btn .light",
            start: "top center",
        }
    });

    gsap.fromTo(".extr-btn .dark", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".extr-btn .dark",
            start: "top center",
        }
    });


    /* Scroll extra services */
    gsap.fromTo(".intro-s div:first-child", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".intro-s div:first-child",
            start: "top center",
        }
    });

    gsap.fromTo(".intro-s div:last-child", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".intro-s div:last-child",
            start: "top center",
        }
    });

    gsap.fromTo(".s-01 div:first-child", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".s-01 div:first-child",
            start: "top center",
        }
    });

    gsap.fromTo(".s-01 div:last-child", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".s-01 div:last-child",
            start: "top center",
        }
    });

    gsap.fromTo(".s-02", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".s-02",
            start: "top center",
        }
    });

    /* Footer */
    gsap.fromTo(".footer", {
        opacity: 0, 
        y: 20,
        ease: "power4.out",
    }, 
    {   
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".footer",
          start: "top center",
        }
    });

});