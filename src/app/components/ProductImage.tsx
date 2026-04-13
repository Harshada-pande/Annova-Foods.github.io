import { motion } from "motion/react";

interface ProductImageProps {
  productType: "millet" | "tomato" | "poha" | "khichdi";
  size?: "sm" | "md" | "lg";
  showSteam?: boolean;
  animate?: boolean;
}

export function ProductImage({ productType, size = "md", showSteam = false, animate = false }: ProductImageProps) {
  const productConfigs = {
    millet: {
      cupColor: "#2D5016",
      lidColor: "#FF6B00",
      label: "Millets &\nMasala Noodles",
      accent: "#8BC34A"
    },
    tomato: {
      cupColor: "#8B1538",
      lidColor: "#D32F2F",
      label: "Hearty Tomato\n& Lentil Soup",
      accent: "#FF5252"
    },
    poha: {
      cupColor: "#F9A825",
      lidColor: "#FDD835",
      label: "Lemon Poha\nwith Peanuts",
      accent: "#FFEB3B"
    },
    khichdi: {
      cupColor: "#E8EAF6",
      lidColor: "#FF6B00",
      label: "Indian Comfort\nKhichdi",
      accent: "#9FA8DA"
    }
  };

  const config = productConfigs[productType];

  const sizeMap = {
    sm: { width: 120, height: 160, fontSize: 10 },
    md: { width: 180, height: 240, fontSize: 12 },
    lg: { width: 240, height: 320, fontSize: 14 }
  };

  const dimensions = sizeMap[size];

  const MotionWrapper = animate ? motion.div : 'div';
  const motionProps = animate ? {
    whileHover: { scale: 1.05, rotate: 2 },
    transition: { duration: 0.3 }
  } : {};

  return (
    <MotionWrapper className="relative inline-block" {...motionProps}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 180 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Cup body */}
        <path
          d="M40 60 L40 200 Q40 220 60 220 L120 220 Q140 220 140 200 L140 60 Z"
          fill={config.cupColor}
          stroke="#000"
          strokeWidth="1"
          opacity="0.95"
        />

        {/* Cup rim highlight */}
        <ellipse cx="90" cy="60" rx="50" ry="8" fill={config.cupColor} stroke="#000" strokeWidth="1" />
        <ellipse cx="90" cy="60" rx="50" ry="8" fill="white" opacity="0.1" />

        {/* Lid */}
        <ellipse cx="90" cy="50" rx="58" ry="10" fill={config.lidColor} stroke="#000" strokeWidth="1.5" />
        <ellipse cx="90" cy="50" rx="58" ry="10" fill="white" opacity="0.2" />

        {/* Lid tab */}
        <ellipse cx="130" cy="50" rx="8" ry="4" fill={config.lidColor} stroke="#000" strokeWidth="1" />
        <path d="M135 48 L140 46" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />

        {/* Logo area - white label */}
        <rect x="50" y="90" width="80" height="50" rx="8" fill="white" stroke="#E0E0E0" strokeWidth="1" />

        {/* Annova Foods text */}
        <text x="90" y="110" textAnchor="middle" fill="#FF6B00" fontFamily="Poppins, sans-serif" fontSize="16" fontWeight="800">
          Annova
        </text>
        <text x="90" y="125" textAnchor="middle" fill="#333" fontFamily="Poppins, sans-serif" fontSize="10" fontWeight="600">
          Foods
        </text>

        {/* Product name on cup */}
        <text x="90" y="170" textAnchor="middle" fill="white" fontFamily="Poppins, sans-serif" fontSize={dimensions.fontSize} fontWeight="600">
          {config.label.split('\n').map((line, i) => (
            <tspan key={i} x="90" dy={i === 0 ? 0 : 14}>{line}</tspan>
          ))}
        </text>

        {/* Steam vent circle */}
        <circle cx="125" cy="95" r="6" fill="white" opacity="0.3" stroke="white" strokeWidth="1" />
        <circle cx="125" cy="95" r="3" fill="white" opacity="0.6" />

        {/* Indian vegetarian symbol */}
        <rect x="55" y="145" width="8" height="8" fill="white" stroke="#4CAF50" strokeWidth="1" rx="1" />
        <circle cx="59" cy="149" r="2" fill="#4CAF50" />

        {/* Accent stripe */}
        <rect x="40" y="155" width="100" height="3" fill={config.accent} opacity="0.4" />

        {/* Cup bottom shadow */}
        <ellipse cx="90" cy="220" rx="50" ry="6" fill={config.cupColor} opacity="0.8" />
      </svg>

      {/* Steam animation */}
      {showSteam && (
        <>
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              y: [-5, -25, -40],
              scale: [1, 1.3, 1.6]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-orange-200 to-transparent rounded-full blur-lg pointer-events-none"
          />
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [0, -30, -50],
              scale: [1, 1.4, 1.8],
              x: [-5, 5, -5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5
            }}
            className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-t from-gray-300 to-transparent rounded-full blur-md pointer-events-none"
          />
        </>
      )}
    </MotionWrapper>
  );
}
