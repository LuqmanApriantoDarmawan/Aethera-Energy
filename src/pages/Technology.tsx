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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center">Platform AETHERA</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Eksplorasi mendalam bagaimana teknologi kami bekerja untuk mengoptimalkan energi Anda
            </p>
          </motion.div>
          
          <Tabs defaultValue="ai" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="ai" className="text-base">
                <Brain className="w-4 h-4 mr-2" />
                AI Engine
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="text-base">
                <Activity className="w-4 h-4 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="integration" className="text-base">
                <Network className="w-4 h-4 mr-2" />
                Integration
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai" className="mt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <CardTitle className="flex items-center gap-3">
                      <Brain className="w-6 h-6 text-primary" />
                      AI Engine yang Powerful
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <p className="text-muted-foreground">
                      Mesin AI kami menggunakan algoritma machine learning terbaru untuk menganalisis pola konsumsi energi dan memberikan rekomendasi optimasi yang akurat.
                    </p>

                    {/* AI Workflow Diagram */}
                    <div className="bg-accent/50 rounded-lg p-6">
                      <h4 className="font-semibold mb-4 text-center">Alur Kerja AI Engine</h4>
                      <div className="bg-background rounded-lg p-4">
                        <svg viewBox="0 0 800 400" className="w-full h-auto">
                          {/* Data Collection */}
                          <motion.g
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <rect x="20" y="150" width="140" height="100" rx="8" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2"/>
                            <text x="90" y="190" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="600">Data Collection</text>
                            <text x="90" y="210" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">IoT Sensors</text>
                            <text x="90" y="225" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Smart Meters</text>
                          </motion.g>

                          {/* Arrow 1 */}
                          <motion.path
                            d="M 160 200 L 200 200"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Data Processing */}
                          <motion.g
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                          >
                            <rect x="200" y="150" width="140" height="100" rx="8" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                            <text x="270" y="190" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="600">AI Processing</text>
                            <text x="270" y="210" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Neural Networks</text>
                            <text x="270" y="225" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Pattern Analysis</text>
                          </motion.g>

                          {/* Arrow 2 */}
                          <motion.path
                            d="M 340 200 L 380 200"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Prediction */}
                          <motion.g
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                          >
                            <rect x="380" y="150" width="140" height="100" rx="8" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2"/>
                            <text x="450" y="190" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="600">Prediction</text>
                            <text x="450" y="210" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Energy Forecast</text>
                            <text x="450" y="225" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">95% Accuracy</text>
                          </motion.g>

                          {/* Arrow 3 */}
                          <motion.path
                            d="M 520 200 L 560 200"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Optimization */}
                          <motion.g
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.7 }}
                          >
                            <rect x="560" y="150" width="140" height="100" rx="8" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                            <text x="630" y="190" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="600">Optimization</text>
                            <text x="630" y="210" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Auto Adjust</text>
                            <text x="630" y="225" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Cost Saving</text>
                          </motion.g>

                          {/* Arrow definitions */}
                          <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                              <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--primary))" />
                            </marker>
                          </defs>

                          {/* Feedback Loop */}
                          <motion.path
                            d="M 630 250 Q 350 320 90 250"
                            stroke="hsl(var(--muted-foreground))"
                            strokeWidth="1.5"
                            strokeDasharray="5,5"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.5 }}
                            transition={{ delay: 2, duration: 1 }}
                          />
                          <text x="350" y="340" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11" fontStyle="italic">Continuous Learning Loop</text>
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {[
                        { title: "Predictive Analytics", desc: "Prediksi kebutuhan energi dengan akurasi tinggi berdasarkan data historis dan faktor eksternal.", delay: 0.1 },
                        { title: "Anomaly Detection", desc: "Deteksi otomatis terhadap pola konsumsi yang tidak normal untuk mencegah pemborosan.", delay: 0.2 },
                        { title: "Optimization Engine", desc: "Optimasi real-time untuk memaksimalkan efisiensi energi tanpa mengurangi produktivitas.", delay: 0.3 },
                        { title: "Self-Learning System", desc: "Sistem yang terus belajar dan meningkat seiring waktu untuk hasil yang lebih baik.", delay: 0.4 }
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: item.delay }}
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="p-4 bg-accent rounded-lg cursor-pointer transition-shadow hover:shadow-lg"
                        >
                          <h4 className="font-semibold mb-2">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="dashboard" className="mt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
                    <CardTitle className="flex items-center gap-3">
                      <Activity className="w-6 h-6 text-secondary" />
                      Dashboard Intuitif
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <p className="text-muted-foreground">
                      Dashboard yang user-friendly memberikan visualisasi data energi secara komprehensif dengan insights yang actionable.
                    </p>

                    {/* Dashboard Preview Mock */}
                    <div className="bg-accent/50 rounded-lg p-6">
                      <h4 className="font-semibold mb-4 text-center">Interface Dashboard</h4>
                      <div className="bg-background rounded-lg p-4 border border-border">
                        <div className="grid grid-cols-12 gap-4 h-[300px]">
                          {/* Left Sidebar */}
                          <motion.div
                            className="col-span-2 space-y-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {['Dashboard', 'Analytics', 'Reports', 'Settings'].map((item, idx) => (
                              <motion.div
                                key={item}
                                className="h-8 bg-primary/20 rounded flex items-center justify-center text-xs"
                                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.3)" }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                              >
                                {item}
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* Main Content */}
                          <div className="col-span-10 space-y-3">
                            {/* Top Stats */}
                            <motion.div
                              className="grid grid-cols-4 gap-2"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              {[
                                { label: 'Energy', value: '1,245 kWh', color: 'primary' },
                                { label: 'Cost', value: '$850', color: 'secondary' },
                                { label: 'Efficiency', value: '94%', color: 'primary' },
                                { label: 'Savings', value: '28%', color: 'secondary' }
                              ].map((stat, idx) => (
                                <motion.div
                                  key={stat.label}
                                  className={`p-3 bg-${stat.color}/10 rounded border border-${stat.color}/20`}
                                  whileHover={{ scale: 1.05 }}
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.5 + idx * 0.1 }}
                                >
                                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                                  <div className="text-sm font-bold">{stat.value}</div>
                                </motion.div>
                              ))}
                            </motion.div>

                            {/* Chart Area */}
                            <motion.div
                              className="h-32 bg-primary/5 rounded border border-primary/20 relative overflow-hidden"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.8 }}
                            >
                              <div className="absolute inset-0 flex items-end justify-around p-2">
                                {[65, 45, 80, 60, 90, 70, 85, 55, 75].map((height, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="w-8 bg-gradient-to-t from-primary to-secondary rounded-t"
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{ delay: 1 + idx * 0.1, duration: 0.5 }}
                                  />
                                ))}
                              </div>
                              <div className="absolute top-2 left-2 text-xs text-muted-foreground">Real-time Energy Consumption</div>
                            </motion.div>

                            {/* Bottom Cards */}
                            <motion.div
                              className="grid grid-cols-2 gap-2"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.5 }}
                            >
                              <div className="p-3 bg-secondary/10 rounded border border-secondary/20">
                                <div className="text-xs text-muted-foreground mb-1">Active Devices</div>
                                <div className="text-lg font-bold">247</div>
                              </div>
                              <div className="p-3 bg-primary/10 rounded border border-primary/20">
                                <div className="text-xs text-muted-foreground mb-1">Alerts</div>
                                <div className="text-lg font-bold">3 New</div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mt-6">
                      {[
                        { icon: <BarChart3 className="w-5 h-5" />, title: "Real-Time Monitoring", desc: "Pantau konsumsi energi secara live dengan update setiap detik" },
                        { icon: <Shield className="w-5 h-5" />, title: "Customizable Reports", desc: "Buat laporan sesuai kebutuhan dengan berbagai template" },
                        { icon: <Zap className="w-5 h-5" />, title: "Alert System", desc: "Notifikasi otomatis untuk anomali atau target efisiensi" },
                        { icon: <Network className="w-5 h-5" />, title: "Multi-Device Access", desc: "Akses dashboard dari desktop, tablet, atau smartphone" }
                      ].map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ x: 10 }}
                        >
                          <div className="text-primary mt-1">{item.icon}</div>
                          <div>
                            <strong>{item.title}:</strong> {item.desc}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="integration" className="mt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <CardTitle className="flex items-center gap-3">
                      <Network className="w-6 h-6 text-primary" />
                      Integrasi Seamless
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <p className="text-muted-foreground">
                      Platform AETHERA dapat diintegrasikan dengan berbagai sistem dan perangkat yang sudah ada di infrastruktur Anda.
                    </p>

                    {/* Integration Architecture */}
                    <div className="bg-accent/50 rounded-lg p-6">
                      <h4 className="font-semibold mb-4 text-center">Arsitektur Integrasi</h4>
                      <div className="bg-background rounded-lg p-4">
                        <svg viewBox="0 0 800 350" className="w-full h-auto">
                          {/* Central Platform */}
                          <motion.g
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                          >
                            <circle cx="400" cy="175" r="60" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="3"/>
                            <text x="400" y="170" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="16" fontWeight="700">AETHERA</text>
                            <text x="400" y="190" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Platform</text>
                          </motion.g>

                          {/* IoT Devices - Top Left */}
                          <motion.g
                            initial={{ opacity: 0, x: -50, y: -50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <rect x="80" y="40" width="120" height="70" rx="8" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                            <text x="140" y="70" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="600">IoT Devices</text>
                            <text x="140" y="90" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Smart Meters</text>
                            <text x="140" y="103" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Sensors</text>
                          </motion.g>
                          <motion.path
                            d="M 200 75 Q 300 100 350 140"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                          />

                          {/* ERP Systems - Top Right */}
                          <motion.g
                            initial={{ opacity: 0, x: 50, y: -50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.7 }}
                          >
                            <rect x="600" y="40" width="120" height="70" rx="8" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                            <text x="660" y="70" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="600">ERP Systems</text>
                            <text x="660" y="90" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">SAP, Oracle</text>
                            <text x="660" y="103" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Enterprise</text>
                          </motion.g>
                          <motion.path
                            d="M 600 75 Q 500 100 450 140"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                          />

                          {/* Cloud Platforms - Bottom Left */}
                          <motion.g
                            initial={{ opacity: 0, x: -50, y: 50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.8 }}
                          >
                            <rect x="80" y="240" width="120" height="70" rx="8" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                            <text x="140" y="270" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="600">Cloud Platform</text>
                            <text x="140" y="290" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">AWS, Azure</text>
                            <text x="140" y="303" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Google Cloud</text>
                          </motion.g>
                          <motion.path
                            d="M 200 275 Q 300 250 350 210"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                          />

                          {/* Data Analytics - Bottom Right */}
                          <motion.g
                            initial={{ opacity: 0, x: 50, y: 50 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.9 }}
                          >
                            <rect x="600" y="240" width="120" height="70" rx="8" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                            <text x="660" y="270" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="600">Analytics Tools</text>
                            <text x="660" y="290" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">BI Platforms</text>
                            <text x="660" y="303" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Reporting</text>
                          </motion.g>
                          <motion.path
                            d="M 600 275 Q 500 250 450 210"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                          />

                          {/* API Label */}
                          <motion.text
                            x="400"
                            y="20"
                            textAnchor="middle"
                            fill="hsl(var(--primary))"
                            fontSize="12"
                            fontWeight="600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 }}
                          >
                            REST API / WebSocket / GraphQL
                          </motion.text>
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      {[
                        { title: "IoT Devices", desc: "Smart meters, sensors, dan berbagai perangkat IoT", icon: <Network className="w-6 h-6" />, color: "primary" },
                        { title: "ERP Systems", desc: "SAP, Oracle, dan sistem enterprise lainnya", icon: <BarChart3 className="w-6 h-6" />, color: "secondary" },
                        { title: "Cloud Platforms", desc: "AWS, Azure, Google Cloud integration", icon: <Shield className="w-6 h-6" />, color: "primary" }
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className={`p-6 border border-border rounded-lg text-center hover:border-${item.color} transition-all cursor-pointer group`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ y: -10, scale: 1.05 }}
                        >
                          <motion.div
                            className={`inline-flex p-3 rounded-full bg-${item.color}/10 text-${item.color} mb-3 group-hover:scale-110 transition-transform`}
                          >
                            {item.icon}
                          </motion.div>
                          <h4 className="font-semibold mb-2">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* API Features */}
                    <div className="mt-6 p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold mb-3">API Features</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['RESTful API', 'WebSocket', 'GraphQL', 'OAuth 2.0'].map((feature, idx) => (
                          <motion.div
                            key={feature}
                            className="text-center p-2 bg-background rounded border border-border"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <div className="text-xs font-medium">{feature}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Technology;
