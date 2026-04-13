import { motion } from "motion/react";
import {
  Flame,
  Clock,
  Utensils,
  Droplet,
  Check,
  X,
  GraduationCap,
  Briefcase,
  Dumbbell,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  ChefHat,
  Battery,
  Heart,
  Package,
  Zap,
  BrainCircuit
} from "lucide-react";
import { ProductCard } from "./components/ProductCard";
import { ProductImage } from "./components/ProductImage";

// Import product images
import studentImage from "../imports/WhatsApp_Image_2026-04-03_at_11.35.07_PM.jpeg";
import techDiagram from "../imports/WhatsApp_Image_2026-04-03_at_11.29.54_PM.jpeg";
import productBreakdown from "../imports/WhatsApp_Image_2026-04-03_at_11.21.24_PM.jpeg";

export default function App() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-orange-100">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #FF6B00 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 bg-[#FF6B00] text-white rounded-full tracking-wide"
            >
              ANNOVA FOODS
            </motion.div>

            <h1 className="mb-6" style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, color: '#030213' }}>
              Hot, Healthy Meals Anytime – No Kitchen Needed
            </h1>

            <p className="mb-8 text-gray-600" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              Self-heating meals designed for late-night productivity. Ready in minutes, powered by science.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#FF6B00] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                style={{ fontSize: '1.125rem', fontWeight: 600 }}
              >
                Order Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#FF6B00] border-2 border-[#FF6B00] rounded-full hover:bg-orange-50 transition-colors"
                style={{ fontSize: '1.125rem', fontWeight: 600 }}
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 flex items-center justify-center gap-8">
              {/* Main product showcase */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <ProductImage productType="millet" size="lg" showSteam={true} />
              </motion.div>

              {/* Secondary products */}
              <div className="hidden lg:flex flex-col gap-6">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <ProductImage productType="tomato" size="md" showSteam={false} />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <ProductImage productType="poha" size="md" showSteam={false} />
                </motion.div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-[#FF6B00] rounded-full blur-3xl opacity-20" />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#030213' }}>
              The Late-Night Struggle
            </h2>
            <p className="mt-4 text-gray-600" style={{ fontSize: '1.125rem' }}>
              We know what happens when hunger strikes at midnight
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Utensils className="w-12 h-12 text-[#FF6B00]" />,
                title: "Midnight Hunger = Junk Food",
                description: "No healthy options available when you need them most"
              },
              {
                icon: <Clock className="w-12 h-12 text-[#FF6B00]" />,
                title: "No Time to Cook",
                description: "Deadlines don't wait, and neither should your meal"
              },
              {
                icon: <BrainCircuit className="w-12 h-12 text-[#FF6B00]" />,
                title: "Low Energy, Poor Focus",
                description: "Bad nutrition leads to crashes and lost productivity"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl blur-2xl opacity-50" />
            <img
              src={techDiagram}
              alt="Annova Foods self-heating technology diagram"
              className="relative w-full h-auto rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#030213', marginBottom: '1.5rem' }}>
              Meet Annova Foods
            </h2>

            <p className="mb-8 text-gray-600" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              Revolutionary self-heating technology that brings you hot, nutritious meals anywhere, anytime.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Flame className="w-6 h-6" />,
                  title: "Self-Heating Technology",
                  description: "Powered by safe CaO reaction – no electricity needed"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Ready in Minutes",
                  description: "Hot meal in 5-8 minutes, perfect for busy schedules"
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Nutritious & Tasty",
                  description: "Balanced meals that fuel your body and mind"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-3 bg-orange-100 rounded-lg text-[#FF6B00] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "5-8", label: "Minutes to Heat", icon: <Clock className="w-8 h-8" /> },
              { number: "4", label: "Delicious Variants", icon: <Utensils className="w-8 h-8" /> },
              { number: "100%", label: "Vegetarian", icon: <Heart className="w-8 h-8" /> },
              { number: "0", label: "Electricity Needed", icon: <Zap className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center text-white"
              >
                <div className="mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }} className="mb-2">
                  {stat.number}
                </div>
                <div style={{ fontSize: '1rem', opacity: 0.95 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#030213' }}>
              How It Works
            </h2>
            <p className="mt-4 text-gray-600" style={{ fontSize: '1.125rem' }}>
              Three simple steps to a hot, delicious meal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-32 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#FF6B00] via-orange-300 to-[#FF6B00]" />

            {[
              {
                step: "01",
                icon: <Package className="w-16 h-16" />,
                title: "Open Pack",
                description: "Remove the outer packaging and access the heating element",
                product: "khichdi" as const
              },
              {
                step: "02",
                icon: <Droplet className="w-16 h-16" />,
                title: "Add Water / Activate",
                description: "Pour water into the heating chamber to start the CaO reaction",
                product: "millet" as const
              },
              {
                step: "03",
                icon: <ChefHat className="w-16 h-16" />,
                title: "Enjoy Hot Meal",
                description: "Wait 5-8 minutes and enjoy your perfectly heated meal",
                product: "tomato" as const
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative text-center"
              >
                <div className="relative inline-block mb-6">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-orange-300 rounded-full blur-xl opacity-30"
                  />
                  <div className="relative bg-white p-4 rounded-full shadow-lg">
                    <ProductImage productType={item.product} size="sm" showSteam={index === 2} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white" style={{ fontWeight: 700 }}>
                    {item.step}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Engineering Detail */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#030213' }}>
              Engineered for Perfection
            </h2>
            <p className="mt-4 text-gray-600" style={{ fontSize: '1.125rem' }}>
              Every detail designed for your convenience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl p-8 lg:p-12 shadow-2xl mb-12"
          >
            <img
              src={productBreakdown}
              alt="Annova Foods product engineering details"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>

          {/* Key Technology Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Flame className="w-8 h-8" />,
                title: "CaO Heating Sachet",
                description: "Safe exothermic reaction generates consistent heat"
              },
              {
                icon: <Package className="w-8 h-8" />,
                title: "Two-Chamber Design",
                description: "Separates food and heating elements for safety"
              },
              {
                icon: <Droplet className="w-8 h-8" />,
                title: "Steam Vent System",
                description: "Controlled steam release for optimal heating"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Thermal Insulation",
                description: "Maintains temperature while staying cool to touch"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="mb-4 p-3 bg-orange-100 rounded-lg text-[#FF6B00] inline-block">
                  {feature.icon}
                </div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.125rem' }}>
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#030213' }}>
              Our Products
            </h2>
            <p className="mt-4 text-gray-600" style={{ fontSize: '1.125rem' }}>
              Delicious variety for every craving
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Millet & Masala Noodles",
                description: "Healthy millet noodles with vegetables and savory masala",
                calories: "320 kcal",
                productType: "millet" as const
              },
              {
                name: "Hearty Tomato & Lentil Soup",
                description: "Rich tomato soup with protein-packed lentils",
                calories: "180 kcal",
                productType: "tomato" as const
              },
              {
                name: "Lemon Poha with Peanuts",
                description: "Traditional Indian poha with tangy lemon and crunchy peanuts",
                calories: "260 kcal",
                productType: "poha" as const
              },
              {
                name: "Khichdi Meal Bowl",
                description: "Dehydrated rice and lentil khichdi with freeze-dried vegetables",
                calories: "340 kcal",
                productType: "khichdi" as const
              }
            ].map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#030213' }}>
              Why Choose Annova
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap className="w-8 h-8" />, title: "No Kitchen Needed", description: "Heat your meal anywhere" },
              { icon: <Flame className="w-8 h-8" />, title: "Self-Heating Tech", description: "CaO chemical reaction" },
              { icon: <Clock className="w-8 h-8" />, title: "Quick (5-8 mins)", description: "Fast and convenient" },
              { icon: <Heart className="w-8 h-8" />, title: "Healthy Alternative", description: "Better than junk food" },
              { icon: <Package className="w-8 h-8" />, title: "Portable", description: "Take it anywhere you go" },
              { icon: <Battery className="w-8 h-8" />, title: "No Electricity", description: "Works without power" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-orange-100 rounded-lg text-[#FF6B00] flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#030213' }}>
              Annova vs. Alternatives
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left" style={{ fontWeight: 600 }}>Feature</th>
                    <th className="px-6 py-4 text-center bg-orange-100" style={{ fontWeight: 600, color: '#FF6B00' }}>
                      Annova Foods
                    </th>
                    <th className="px-6 py-4 text-center" style={{ fontWeight: 600 }}>Instant Noodles</th>
                    <th className="px-6 py-4 text-center" style={{ fontWeight: 600 }}>Junk Food</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Hot Meal", annova: true, noodles: true, junk: false },
                    { feature: "Nutritious", annova: true, noodles: false, junk: false },
                    { feature: "No Kitchen Needed", annova: true, noodles: true, junk: true },
                    { feature: "Ready in Minutes", annova: true, noodles: true, junk: true },
                    { feature: "Balanced Diet", annova: true, noodles: false, junk: false },
                    { feature: "Sustainable Energy", annova: true, noodles: false, junk: false }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="px-6 py-4 text-gray-700">{row.feature}</td>
                      <td className="px-6 py-4 text-center bg-orange-50">
                        {row.annova ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.noodles ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.junk ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#030213' }}>
              Made For You
            </h2>
            <p className="mt-4 text-gray-600" style={{ fontSize: '1.125rem' }}>
              Designed for late-night achievers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: "Students",
                description: "Fuel your late-night study sessions with nutritious meals",
                image: studentImage
              },
              {
                icon: <Briefcase className="w-12 h-12" />,
                title: "Professionals",
                description: "Stay productive during long work hours and coding marathons",
                image: "https://images.unsplash.com/photo-1541560052-5e137f229371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB3b3JraW5nJTIwbGFwdG9wfGVufDF8fHx8MTc3NTk3MzU2MHww&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                icon: <Dumbbell className="w-12 h-12" />,
                title: "Fitness Enthusiasts",
                description: "Quick, healthy meals that support your active lifestyle",
                image: "https://images.unsplash.com/photo-1768326119231-bf064c1b8fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxoZWFsdGh5JTIwbWVhbCUyMGJvd2wlMjBmb29kfGVufDF8fHx8MTc3NTk3MzU1OXww&ixlib=rb-4.1.0&q=80&w=1080"
              }
            ].map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={audience.image}
                    alt={audience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    {audience.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {audience.title}
                  </h3>
                  <p className="text-gray-600">{audience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />

        {/* Floating product images */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-12 left-12 opacity-20 hidden lg:block"
        >
          <ProductImage productType="millet" size="md" showSteam={false} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [5, -5, 5]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 right-12 opacity-20 hidden lg:block"
        >
          <ProductImage productType="tomato" size="md" showSteam={false} />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              Fuel Your Hustle the Smart Way
            </h2>

            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95 }}>
              Join thousands of students and professionals who never compromise on nutrition
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-[#FF6B00] rounded-full shadow-lg hover:shadow-xl transition-shadow"
                style={{ fontSize: '1.125rem', fontWeight: 600 }}
              >
                Order Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
                style={{ fontSize: '1.125rem', fontWeight: 600 }}
              >
                Join Waitlist
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FF6B00' }}>
                ANNOVA FOODS
              </div>
              <p className="text-gray-400 mb-4">
                Made for late-night achievers
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, color: '#FF6B00' }}
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, color: '#FF6B00' }}
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, color: '#FF6B00' }}
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Millet Noodles</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Tomato Soup</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Poha Bowl</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hello@annovafoods.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Annova Foods. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
