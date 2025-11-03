import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Activity, BarChart3, Shield, Zap, Network } from "lucide-react";
import { motion } from "framer-motion";
import aiTechImage from "@/assets/ai-technology.jpg";
import pipelineImage from "@/assets/feature-pipeline.jpg";

const Technology = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Prediction",
      description: "Machine learning models yang memprediksi pola konsumsi energi dengan akurasi hingga 95%.",
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Pemantauan konsumsi energi secara real-time dengan dashboard interaktif yang intuitif.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Analisis mendalam terhadap data energi untuk mengidentifikasi peluang efisiensi.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Keamanan data tingkat enterprise dengan uptime 99.9% yang terjamin.",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Otomasi cerdas untuk mengoptimalkan penggunaan energi tanpa intervensi manual.",
    },
    {
      icon: Network,
      title: "IoT Integration",
      description: "Integrasi seamless dengan berbagai perangkat IoT dan sistem smart grid.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${aiTechImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Teknologi & Inovasi</h1>
            <p className="text-xl text-muted-foreground">
              Platform energi cerdas yang didukung oleh teknologi AI terdepan untuk optimasi maksimal
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fitur Unggulan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Teknologi yang mengubah cara perusahaan mengelola energi mereka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border-primary/20 h-full group">
                  <CardContent className="pt-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:text-secondary transition-colors" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Platform AETHERA</h2>
          
          <Tabs defaultValue="ai" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ai">AI Engine</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
            </TabsList>

            <TabsContent value="ai" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Engine yang Powerful</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Mesin AI kami menggunakan algoritma machine learning terbaru untuk menganalisis pola konsumsi energi dan memberikan rekomendasi optimasi yang akurat.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold mb-2">Predictive Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        Prediksi kebutuhan energi dengan akurasi tinggi berdasarkan data historis dan faktor eksternal.
                      </p>
                    </div>
                    <div className="p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold mb-2">Anomaly Detection</h4>
                      <p className="text-sm text-muted-foreground">
                        Deteksi otomatis terhadap pola konsumsi yang tidak normal untuk mencegah pemborosan.
                      </p>
                    </div>
                    <div className="p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold mb-2">Optimization Engine</h4>
                      <p className="text-sm text-muted-foreground">
                        Optimasi real-time untuk memaksimalkan efisiensi energi tanpa mengurangi produktivitas.
                      </p>
                    </div>
                    <div className="p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold mb-2">Self-Learning System</h4>
                      <p className="text-sm text-muted-foreground">
                        Sistem yang terus belajar dan meningkat seiring waktu untuk hasil yang lebih baik.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dashboard" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dashboard Intuitif</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Dashboard yang user-friendly memberikan visualisasi data energi secara komprehensif dengan insights yang actionable.
                  </p>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <strong>Real-Time Monitoring:</strong> Pantau konsumsi energi secara live dengan update setiap detik
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <strong>Customizable Reports:</strong> Buat laporan sesuai kebutuhan dengan berbagai template
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <strong>Alert System:</strong> Notifikasi otomatis untuk anomali atau target efisiensi
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <strong>Multi-Device Access:</strong> Akses dashboard dari desktop, tablet, atau smartphone
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integration" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Integrasi Seamless</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Platform AETHERA dapat diintegrasikan dengan berbagai sistem dan perangkat yang sudah ada di infrastruktur Anda.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 border border-border rounded-lg text-center">
                      <h4 className="font-semibold mb-2">IoT Devices</h4>
                      <p className="text-sm text-muted-foreground">Smart meters, sensors, dan berbagai perangkat IoT</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg text-center">
                      <h4 className="font-semibold mb-2">ERP Systems</h4>
                      <p className="text-sm text-muted-foreground">SAP, Oracle, dan sistem enterprise lainnya</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg text-center">
                      <h4 className="font-semibold mb-2">Cloud Platforms</h4>
                      <p className="text-sm text-muted-foreground">AWS, Azure, Google Cloud integration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Technology;
