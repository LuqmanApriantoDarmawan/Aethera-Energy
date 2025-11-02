import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, Leaf, Users, ArrowRight } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Teknologi AI Terdepan",
      description: "Sistem prediksi dan optimasi energi berbasis artificial intelligence untuk efisiensi maksimal.",
    },
    {
      icon: Leaf,
      title: "100% Energi Bersih",
      description: "Komitmen penuh pada energi terbarukan untuk masa depan yang lebih berkelanjutan.",
    },
    {
      icon: TrendingUp,
      title: "Efisiensi Optimal",
      description: "Meningkatkan efisiensi konsumsi energi hingga 40% dengan teknologi smart grid.",
    },
    {
      icon: Users,
      title: "Tim Berpengalaman",
      description: "Didukung oleh para ahli energi dan teknologi terbaik di Indonesia.",
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-accent/20 to-background py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Smart Energy, Better Future
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Solusi energi cerdas berbasis AI untuk mendorong transisi menuju energi bersih dan berkelanjutan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Mulai Konsultasi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/technology">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Pelajari Teknologi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mengapa Memilih AETHERA Energy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami mengombinasikan teknologi AI terdepan dengan komitmen keberlanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Bertransisi ke Energi Cerdas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bergabunglah dengan lebih dari 50 perusahaan yang telah mempercayai AETHERA Energy untuk solusi energi berkelanjutan mereka.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Hubungi Kami Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
