export const homePageStyles = {
    bouncingArrow: {
      animation: '$bounce 1s infinite alternate', // Animation for bouncing effect
    },
    '@keyframes bounce': {
      '0%': {
        transform: 'translateY(0) scale(1)', // Initial position and size
      },
      '100%': {
        transform: 'translateY(20px) scale(1.2)', // Moved up by 20px and increased by 20%
      },
    },
    cards: {
        transition: 'transform 0.3s ease-in-out', // Transition effect for smooth scaling
        '&:hover': {
          transform: 'scale(1.2)', // Scale up when hovered
        },
      }
  }