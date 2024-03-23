export const handleScroll = () => {
  const droneSection = document.querySelector('.drone-section');
  const caseSection = document.querySelector('.case-section');

  if (droneSection) {
    const droneSectionTop = droneSection.getBoundingClientRect().top;

    if (droneSectionTop <= 100) {
      document.body.classList.add('black-background');
    } else {
      document.body.classList.remove('black-background');
    }
  }
  
  if (caseSection) {
    const caseSectionTop = caseSection.getBoundingClientRect().top;

    if (caseSectionTop <= 200) {
      document.body.classList.add('default-background');
    } else {
      document.body.classList.remove('default-background');
    }
  }

};

