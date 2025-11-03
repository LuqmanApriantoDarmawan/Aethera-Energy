import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, Leaf, Users, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-oil-rig.jpg";
import featurePipeline from "@/assets/feature-pipeline.jpg";
import featureAI from "@/assets/feature-ai.jpg";
import featureRenewable from "@/assets/feature-renewable.jpg";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: Zap,
      title: "Teknologi AI Terdepan",
      description: "Sistem prediksi dan optimasi energi berbasis artificial intelligence untuk efisiensi maksimal.",
      image: featureAI,
    },
    {
      icon: Leaf,
      title: "100% Energi Bersih",
      description: "Komitmen penuh pada energi terbarukan untuk masa depan yang lebih berkelanjutan.",
      image: featureRenewable,
    },
    {
      icon: TrendingUp,
      title: "Efisiensi Optimal",
      description: "Meningkatkan efisiensi konsumsi energi hingga 40% dengan teknologi smart grid.",
      image: featurePipeline,
    },
    {
      icon: Users,
      title: "Tim Berpengalaman",
      description: "Didukung oleh para ahli energi dan teknologi terbaik di Indonesia.",
      image: featureAI,
    },
  ];

  const stats = [
    { value: "50+", label: "Klien Enterprise" },
    { value: "1M+", label: "kWh Dihemat" },
    { value: "30%", label: "Reduksi Emisi CO₂" },
    { value: "99.9%", label: "Uptime System" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </motion.div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Smart Energy, Better Future
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Solusi energi cerdas berbasis AI untuk mendorong transisi menuju energi bersih dan berkelanjutan
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="w-full sm:w-auto group">
                    Mulai Konsultasi
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/technology">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Pelajari Teknologi Kami
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.1, rotate: [0, -2, 2, -2, 0] }}
                className="text-center cursor-pointer"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mengapa Memilih AETHERA Energy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami mengombinasikan teknologi AI terdepan dengan komitmen keberlanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 border-primary/20 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <CardContent className="pt-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="h-12 w-12 text-primary mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Bertransisi ke Energi Cerdas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bergabunglah dengan lebih dari 50 perusahaan yang telah mempercayai AETHERA Energy untuk solusi energi berkelanjutan mereka.
            </p>
            <Link to="/contact">
              <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                Hubungi Kami Sekarang
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
